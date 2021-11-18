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

    readFile() {
        return fs.readFileSync('./src/chiller/chiller.memoryDb.json', 'utf8');
    }
}
