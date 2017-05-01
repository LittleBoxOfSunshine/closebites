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
let LoginComponent = class LoginComponent {
    constructor(router, route, userRepository) {
        this.router = router;
        this.route = route;
        this.userRepository = userRepository;
        this.error = false;
    }
    submit() {
        // Allow promis callback to access this (parent scope)
        var that = this;
        // Make API call, provide "then" callback for when promise is satisfied
        /*this.userRepository.login(this.email, this.password)
                  .then(function(valid) {
                      if(valid == 'consumer')
                          that.router.navigateByUrl('user');
                      else if(valid == 'vendor')
                          that.router.navigateByUrl('vendor');
                      else
                          that.error = true;
                  });*/
    }
};
LoginComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'login',
        templateUrl: 'login.component.html',
        styleUrls: ['login.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute, user_repository_service_1.UserRepository])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map