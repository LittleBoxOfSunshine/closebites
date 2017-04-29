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
const user_repository_service_1 = require("../api/user/user-repository.service");
let SignUpComponent = class SignUpComponent {
    constructor(router, route, userService) {
        this.router = router;
        this.route = route;
        this.userService = userService;
        this.route.params.subscribe(params => {
            this.mode = params['mode'];
        });
    }
    go() {
        let body = { email: this.email, password: this.password,
            name: this.name, accountType: this.mode == 'vendor' ? 'vendor' : 'consumer' };
        if (this.mode == 'vendor')
            body['address'] = this.address;
        var that = this;
        this.userService.register(body).then(function (x) {
            if (x) {
                if (that.mode == 'vendor')
                    that.router.navigate(['/vendor']);
                else
                    that.router.navigate(['/user']);
            }
            else {
                that.error = true;
                console.log(that.error);
            }
        });
    }
};
SignUpComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'sign-up',
        templateUrl: 'sign-up.component.html',
        styleUrls: ['sign-up.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute, user_repository_service_1.UserRepository])
], SignUpComponent);
exports.SignUpComponent = SignUpComponent;
//# sourceMappingURL=sign-up.component.js.map