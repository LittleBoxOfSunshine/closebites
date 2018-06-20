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
let SearchesComponent = class SearchesComponent {
    constructor(router, route, userRepository, dealRepository) {
        this.router = router;
        this.route = route;
        this.userRepository = userRepository;
        this.dealRepository = dealRepository;
        this.dealIds = new Array();
        this.favorite_deals = [];
        this.dealIds = this.userRepository.getUser().favorites;
        for (let id of this.dealIds)
            this.dealRepository.getDeal(id).then(x => this.favorite_deals.push(x));
        this.filters = this.userRepository.getUser().filters;
    }
    ngOnInit() {
        this.dealOrSearch = this.router.url == '/mysearches' ? 'search' : 'deal';
    }
    updateMode(newMode) {
        this.foodOrDrink = newMode;
    }
    updateBoxMode() {
        this.dealOrSearch = this.dealOrSearch == 'search' ? 'deal' : 'search';
    }
    getDeal(identification) {
        for (let deal of this.favorite_deals) {
            if (deal.id == identification)
                this.deal = deal;
        }
    }
    updateDeal() {
    }
    getFilter(id) {
    }
    getUserName() {
        return this.userRepository.getUser().name;
    }
    getUserEmail() {
        return this.userRepository.getUser().email;
    }
    logout() {
        this.deal = new deal_1.Deal;
        this.userRepository.logout();
    }
};
SearchesComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'search',
        templateUrl: 'searches.component.html',
        styleUrls: ['searches.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute,
        user_repository_service_1.UserRepository,
        deal_repository_service_1.DealRepository])
], SearchesComponent);
exports.SearchesComponent = SearchesComponent;
//# sourceMappingURL=searches.component.js.map