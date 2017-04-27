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
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
let SignUpComponent = class SignUpComponent {
    constructor(router, route) {
        this.router = router;
        this.route = route;
        this.route.params.subscribe(params => {
            this.mode = params['mode'];
        });
    }
    go() {
        if (this.mode == 'business') {
            this.router.navigate(['/business']);
        }
        else
            this.router.navigate(['/user']);
    }
};
SignUpComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'sign-up',
        templateUrl: 'sign-up.component.html',
        styleUrls: ['sign-up.component.css']
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object, typeof (_b = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _b || Object])
], SignUpComponent);
exports.SignUpComponent = SignUpComponent;
var _a, _b;
//# sourceMappingURL=sign-up.component.js.map