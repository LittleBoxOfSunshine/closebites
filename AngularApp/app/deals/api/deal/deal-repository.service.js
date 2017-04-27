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
require("rxjs/add/operator/toPromise");
require("rxjs/add/operator/map");
let DealRepository = class DealRepository {
    constructor(http) {
        this.http = http;
        /*private _movies: Deal[];*/
        this._apiUrl = 'api/deals';
        let headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        this.options = new http_1.RequestOptions({ headers: headers });
    }
    getDeal(id) {
        // let body = {"email": email, "password": password};
        // this.http
        // 	.post("User/login", JSON.stringify(body), this.options)
        // 	.toPromise()
        // 	.then(x => this.loadUser(x.json().data))
        // 	.catch(x => false);
        return this.http
            .get("api/deal")
            .toPromise()
            .then(x => x.json().data)
            .catch(x => x.message);
    }
    listAll() {
        return this.http
            .get('52.36.27.212/temp')
            .toPromise()
            .then(x => x.json().data) // as Deal[])
            .catch(x => console.log(x.message));
    }
    // listAll() {//: Promise<Deal[]>{
    // 	console.log( this.http.get('52.36.27.212/temp')
    // 		.map(res => res.json()));
    // }
    getById(id) {
        return this.http
            .get(`${this._apiUrl}/${id}`)
            .toPromise()
            .then(x => x.json().data)
            .catch(x => x.message);
    }
    add(Deal) {
        return this.http
            .post(this._apiUrl, Deal)
            .toPromise()
            .then(x => x.json().data)
            .catch(x => x.message);
    }
    update(Deal) {
        return this.http
            .put(`${this._apiUrl}/${Deal.id}`, Deal)
            .toPromise()
            .then(() => Deal)
            .catch(x => x.message);
    }
    delete(Deal) {
        return this.http
            .delete(`${this._apiUrl}/${Deal.id}`)
            .toPromise()
            .catch(x => x.message);
    }
};
DealRepository = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], DealRepository);
exports.DealRepository = DealRepository;
//# sourceMappingURL=deal-repository.service.js.map