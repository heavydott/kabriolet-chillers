import { Injectable } from '@nestjs/common';
import * as fs from "fs";

@Injectable()
export class ChillerService {
    getChillers(params = []) {
        const chillers = JSON.parse(this.readFile());
        return chillers;
    }

    getChiller(id) {
        const chillers = JSON.parse(this.readFile());
        return chillers.find(element => element.id == id);
    }

    getChillersCalculate(params) {
        const chillers = JSON.parse(this.readFile());
        if(!chillers.length) {
            return [];
        }
        let selectedChillers = chillers.filter(element => params.id.indexOf(element.id) >= 0);
        // TODO
        for(let i = 0; i < selectedChillers.length; i++) {
            this.reCalc(selectedChillers[i], params);
        }
        return selectedChillers;
    }

    reCalc(item, params) {
        const woc = parseInt(params.waterOutChiller),
            pf = parseInt(params.paramFluid),
            oa = parseInt(params.outdoorAir),
            preIn = [
                0.03315367169,
                0.5633872559,
                -0.01468592021,
                0.7167291953
            ],
            preOut = [
                0.01841345607,
                -0.3095068355,
                0.01706936398,
                0.5906456001
            ],
            coef = {
                cc: ((-0.0902 * pf**2 - 9.5013 * pf + 4362.4 ) / 4362.4) * (preIn[0] * woc + preIn[1] + preIn[2] * oa + preIn[3]),
                pi: (-9 * pf**2 * 10**(-6) - 510**(-5) * pf + 1.0004) * (preOut[0] * woc + preOut[1] + preOut[2] * oa + preOut[3]),
                pd: (0.0062 * pf + 0.9978)
            };
        item.cooling_capacity = (item.cooling_capacity * coef.cc).toFixed(2);
        item.power = (item.power * coef.pi).toFixed(2);
        item.pressure_drop = (item.pressure_drop * coef.pd).toFixed(2);
        item.mixture_flow = (item.cooling_capacity * 3600 * 1000 / (5 * (-0.000158156360401703 * item.fluid**2 - 0.00632010157823457 * item.fluid + 4.20046286255166) * (-0.00257938220813256 * item.fluid**2 + 1.27431356622419 * item.fluid +999.964879207813) * 1000)).toFixed(2);
        console.log(item, params, preIn, preOut, coef)
    }

    readFile() {
        return fs.readFileSync('./src/chiller/chiller.memoryDb.json', 'utf8');
    }
}
