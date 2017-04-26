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
let DealRepository = class DealRepository {
    constructor(http) {
        this.http = http;
        this._apiUrl = 'api/deals';
    }
    listAll() {
        return this.http
            .get(this._apiUrl)
            .toPromise()
            .then(x => x.json().data)
            .catch(x => x.message);
    }
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