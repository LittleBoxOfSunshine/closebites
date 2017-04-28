var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var deal_repository_service_1 = require('../api/deal/deal-repository.service');
var deal_1 = require('../api/deal/deal');
var router_1 = require('@angular/router');
let DealListComponent = class {
    constructor(router, dealsService) {
        this.router = router;
        this.dealsService = dealsService;
        this.deals = new Array(); //list of deals that show after searching
        this.deal = new deal_1.Deal; //used to bring up a specific deal in the modal
        this.food = this.drink = false;
        this.loggedIn = this.router.url == '/user';
        //dealsService.listAll()
        //.then(x => this.deals = x);
        dealsService.listAll().then(x => this.deals = x);
    }
    updateMode(dealType) {
        if (dealType == 'food') {
            this.food = !this.food;
        }
        else {
            this.drink = !this.drink;
        }
    }
    identifyDeal(id) {
        this.dealsService.getById(id)
            .then(x => this.deal = x);
    }
};
DealListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'deal-list',
        templateUrl: 'deal-list.component.html',
        styleUrls: ['deal-list.component.css']
    }), 
    __metadata('design:paramtypes', [router_1.Router, deal_repository_service_1.DealRepository])
], DealListComponent);
exports.DealListComponent = DealListComponent;
//# sourceMappingURL=deal-list.component.js.map