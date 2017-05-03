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
const deal_repository_service_1 = require("../api/deal/deal-repository.service");
const deal_1 = require("../api/deal/deal");
const user_repository_service_1 = require("../api/user/user-repository.service");
let VendorInterfaceComponent = class VendorInterfaceComponent {
    constructor(router, route, dealsService, userService) {
        this.router = router;
        this.route = route;
        this.dealsService = dealsService;
        this.userService = userService;
        this.deal = new deal_1.Deal;
        this.food = this.drink = false;
        this.mode = 'month';
        this.days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        this.times = ['7:00', '8:00', '9:00', '10:00', '11:00', 'Noon'];
        dealsService.listAll()
            .then(x => this.deals = x);
    }
    updateMode(newMode) {
        this.mode = newMode;
    }
    updateDealMode(dealType) {
        //change food and drink boolean values on click
        if (dealType == 'food') {
            this.food = !this.food;
        }
        else {
            this.drink = !this.drink;
        }
    }
    resetTypeNotChosen() {
        this.typeNotChosen = null;
    }
    addDeal() {
        if (!this.food && !this.drink) {
            this.typeNotChosen = true;
        }
        else {
            this.typeNotChosen = false;
            /*if (this.food && !this.drink)
                this.deal.type1 = 'Food';
            else if (this.drink && !this.food)
                this.deal.type1 = 'Drink';
            else if (this.food && this.drink){
                this.deal.type1='Food';
                this.deal.type2='Drink';
            }*/
            this.dealsService.add(this.deal);
            //reset modal form values afterwards
            this.deal = new deal_1.Deal;
        }
    }
    logout() {
        this.food = this.drink = false;
        this.deals = new Array();
        this.deal = new deal_1.Deal;
        this.userService.logout();
    }
};
VendorInterfaceComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'vendor',
        templateUrl: 'vendor-interface.component.html',
        styleUrls: ['vendor-interface.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute, deal_repository_service_1.DealRepository,
        user_repository_service_1.UserRepository])
], VendorInterfaceComponent);
exports.VendorInterfaceComponent = VendorInterfaceComponent;
//# sourceMappingURL=vendor-interface.component.js.map