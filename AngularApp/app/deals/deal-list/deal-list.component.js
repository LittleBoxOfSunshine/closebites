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
const deal_repository_service_1 = require("../api/deal/deal-repository.service");
const deal_1 = require("../api/deal/deal");
const user_repository_service_1 = require("../api/user/user-repository.service");
const router_1 = require("@angular/router");
const http_1 = require("@angular/http");
let DealListComponent = class DealListComponent {
    constructor(router, dealsService, userService, http) {
        this.router = router;
        this.dealsService = dealsService;
        this.userService = userService;
        this.http = http;
        this.deals = new Array(); //list of deals that shows after searching
        this.deal = new deal_1.Deal; //used to bring up a specific deal in the modal
        this.repeatDays = new Array();
        this.food = this.drinks = this.chinese = this.mexican = this.korean = this.italian = this.murican = false;
        this.foodAndDrinks = true;
        this.loggedIn = this.router.url == '/user';
        dealsService.listAll().then(x => this.deals = x);
        this.zip = "";
        this.repeatDays = [''];
        var that = this;
        window.navigator.geolocation.getCurrentPosition(function (pos) {
            //console.log(pos);
            that.http
                .get('http://maps.googleapis.com/maps/api/geocode/json?latlng=' + pos.coords.latitude + ',' + pos.coords.longitude + '&sensor=true&key=AIzaSyAMApUB2WTGZ_BQPtvCV9VJEr4z4buMs90')
                .toPromise()
                .then(function (res) {
                res = res.json()['results'];
                //console.log(res);
                var temp = res["0"].address_components;
                //console.log(temp);
                for (var i = 0; i < temp.length; i++) {
                    //console.log(temp[i]);
                    var idx = temp[i]['types'].indexOf("postal_code");
                    if (idx != -1) {
                        //console.log(temp[i]['long_name']);
                        that.zip = temp[i]['long_name'];
                    }
                }
            });
        });
    }
    updateMode(dealType) {
        this.food = dealType == 'food';
        this.drinks = dealType == 'drinks';
        this.foodAndDrinks = dealType == 'foodAndDrinks';
    }
    identifyDeal(id) {
        this.dealsService.getDeal(id)
            .then(x => this.deal = x)
            .catch(x => console.log(x.message));
        /*.then(x => function(x) {
            console.log(x);
            console.log("test");
            console.log(this);
            this.deal = x;
            
            if (this.userService.getUser().favorites.indexOf(this.deal.id) != -1)
                this.favoriteDeal = true;
            else
                this.favoriteDeal = false;
        });*/
        /*this.repeatDays = [];
        let days:string[] = [' Sundays',' Mondays',' Tuesdays',' Wednesdays',' Thursdays',' Fridays',' Saturdays'];

        if (this.deal.repeat.length){
            for (var i = 0; i < this.deal.repeat.length; i++){
                if (this.deal.repeat[i] == '1')
                    this.repeatDays.push(days[i]);
            }
        }*/
    }
    logout() {
        this.food = this.drinks = this.chinese = this.mexican = this.korean = this.italian = this.murican = false;
        this.foodAndDrinks = true;
        this.deals = new Array();
        this.deal = new deal_1.Deal;
        this.zip = "";
        this.userService.logout();
    }
    updateSearch() {
        var body = { "cuisines": [], "type": "Food+Drinks", "isVendor": false };
        if (this.zip != "")
            body['zip'] = parseInt(this.zip);
        else
            body['zip'] = -1;
        if (this.mexican)
            body.cuisines.push('mexican');
        if (this.chinese)
            body.cuisines.push('chinese');
        if (this.italian)
            body.cuisines.push('italian');
        var active;
        if (this.food)
            active = 'Food';
        else if (this.drinks)
            active = 'Drinks';
        else if (this.foodAndDrinks)
            active = 'Food+Drinks';
        body.type = active;
        this.dealsService.find(body).then(x => this.deals = x);
    }
    getUserName() {
        return this.userService.getUser().name;
    }
    getUserEmail() {
        return this.userService.getUser().email;
    }
};
DealListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'deal-list',
        templateUrl: 'deal-list.component.html',
        styleUrls: ['deal-list.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router, deal_repository_service_1.DealRepository, user_repository_service_1.UserRepository,
        http_1.Http])
], DealListComponent);
exports.DealListComponent = DealListComponent;
//# sourceMappingURL=deal-list.component.js.map