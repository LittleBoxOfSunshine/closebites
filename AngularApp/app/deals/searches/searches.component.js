"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
let SearchesComponent = class SearchesComponent {
    constructor(router, route) {
        this.router = router;
        this.route = route;
        this.dealOrSearch = 'search';
    }
    reset() {
        this.dealOrSearch = 'search';
    }
    updateMode(newMode) {
        this.foodOrDrink = newMode;
    }
    updateBoxMode() {
        this.dealOrSearch = this.dealOrSearch == 'search' ? 'deal' : 'search';
    }
};
SearchesComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'search',
        templateUrl: 'searches.component.html',
        styleUrls: ['searches.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute])
], SearchesComponent);
exports.SearchesComponent = SearchesComponent;
//# sourceMappingURL=searches.component.js.map