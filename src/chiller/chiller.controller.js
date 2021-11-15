"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ChillerController = void 0;
var common_1 = require("@nestjs/common");
var ChillerController = /** @class */ (function () {
    function ChillerController(chillerService) {
        this.chillerService = chillerService;
    }
    ChillerController.prototype.getChillers = function () {
        return this.chillerService.findAll();
    };
    __decorate([
        (0, common_1.Get)()
    ], ChillerController.prototype, "getChillers");
    ChillerController = __decorate([
        (0, common_1.Controller)('chillers')
    ], ChillerController);
    return ChillerController;
}());
exports.ChillerController = ChillerController;
