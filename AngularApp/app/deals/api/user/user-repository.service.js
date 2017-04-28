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
const http_1 = require("@angular/http");
const user_1 = require("./user");
require("rxjs/add/operator/toPromise");
let UserRepository = class UserRepository {
    constructor(http) {
        this.http = http;
        this.user = new user_1.User;
        let headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        this.options = new http_1.RequestOptions({ headers: headers });
    }
    loadUser(jsonObj) {
        this.user.name = jsonObj.name;
        this.user.addr = jsonObj.address;
        this.user.favorites = jsonObj.favorites;
        this.user.filters = jsonObj.filters;
        this.user.calendar = jsonObj.calendar;
        this.user.accountType = jsonObj.accountType;
        this.user.id = jsonObj.id;
        return this.user.accountType;
    }
    getUser() {
        return this.user;
    }
    login(email, password) {
        // let body = {"email": email, "password": password};
        // this.http
        // 	.post("User/login", JSON.stringify(body), this.options)
        // 	.toPromise()
        // 	.then(x => this.loadUser(x.json().data))
        // 	.catch(x => false);
        // Note, in production there is no "loginVendor"; sepearing just allows two different
        // test cases to be derived from the mock API
        return this.http
            .get(email == 'vendor' ? "api/loginVendor" : 'api/login')
            .toPromise()
            .then(x => this.loadUser(x.json().data))
            .catch(x => x.message);
        //return this.user.accountType == undefined;
    }
};
UserRepository = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UserRepository);
exports.UserRepository = UserRepository;
//# sourceMappingURL=user-repository.service.js.map