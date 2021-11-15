import { Injectable } from '@nestjs/common';
import * as fs from "fs";
// const json = require('./chiller.memoryDb.json');

@Injectable()
export class ChillerService {
    getChillers(params = []) {
        const chillers = JSON.parse(this.readFile());

        if(params) {

        }

        return chillers;
    }

    readFile() {
        return fs.readFileSync('./src/chiller/chiller.memoryDb.json', 'utf8');
    }
}
