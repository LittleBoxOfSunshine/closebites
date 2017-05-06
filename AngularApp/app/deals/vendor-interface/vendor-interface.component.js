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
        this.startDate = new String;
        this.endDate = new String;
        this.startPrice = new Number;
        this.endPrice = new Number;
        this.days2 = new Array();
        this.repeat = new String;
        this.food = this.drinks = this.foodAndDrinks = false;
        dealsService.listAll()
            .then(x => this.deals = x);
        this.mon = this.tue = this.wed = this.thur = this.fri = this.sat = this.sun = false;
        this.days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
        this.days2.push(this.sun, this.mon, this.tue, this.wed, this.thur, this.fri, this.sat);
        for (let day of this.days2) {
            if (day)
                this.repeat = this.repeat.concat("1");
            else
                this.repeat = this.repeat.concat("0");
        }
        var body = { "isVendor": true };
        dealsService.find(body).then(x => this.vendorDeals = x);
    }
    identifyDeal(id) {
        this.dealsService.getDeal(id)
            .then(x => this.deal = x)
            .catch(x => console.log(x.message));
    }
    clickDay(index) {
        this.days2[index] = !this.days2[index];
        this.repeat = '';
        for (let day of this.days2) {
            if (day)
                this.repeat = this.repeat.concat("1");
            else
                this.repeat = this.repeat.concat("0");
        }
        console.log(this.repeat);
    }
    updateMode(dealType) {
        console.log(dealType);
        this.food = dealType == 'food';
        this.drinks = dealType == 'drinks';
        this.foodAndDrinks = dealType == 'foodAndDrinks';
    }
    resetTypeNotChosen() {
        this.typeNotChosen = null;
    }
    addDeal() {
        if (!this.food && !this.drinks && !this.foodAndDrinks) {
            this.typeNotChosen = true;
        }
        else {
            this.typeNotChosen = false;
            this.startDate = this.startDate.replace(/-/g, "/");
            this.endDate = this.endDate.replace(/-/g, "/");
            this.startDate = this.startDate.concat(' ', this.startTime);
            this.endDate = this.endDate.concat(' ', this.endTime);
            this.deal.repeat = this.repeat;
            this.deal.start = this.startDate;
            this.deal.end = this.endDate;
            this.deal.normPrice = this.startPrice;
            this.deal.discountedPrice = this.endPrice;
            var active;
            if (this.food)
                active = 'Food';
            else if (this.drinks)
                active = 'Drinks';
            else if (this.foodAndDrinks)
                active = 'Food+Drinks';
            this.deal.dType = active;
            this.dealsService.add2(this.deal).then((x) => {
                console.log(x);
            });
            var body = { "isVendor": true };
            this.dealsService.find(body).then(x => this.vendorDeals = x);
            //reset modal form values afterwards
            this.deal = new deal_1.Deal;
            this.startPrice = this.endPrice = 0;
            this.startDate = this.endDate = this.endTime = this.startTime = '';
            this.food = this.drinks = this.foodAndDrinks = false;
            var body = { "isVendor": true };
            this.dealsService.find(body).then(x => this.vendorDeals = x);
        }
    }
    logout() {
        this.food = this.drinks = this.foodAndDrinks = false;
        this.deals = new Array();
        this.deal = new deal_1.Deal;
        this.userService.logout();
    }
    getUserName() {
        return this.userService.getUser().name;
    }
    getUserEmail() {
        return this.userService.getUser().email;
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