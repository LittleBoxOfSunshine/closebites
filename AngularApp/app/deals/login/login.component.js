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
var router_1 = require('@angular/router');
var user_repository_service_1 = require('../api/user/user-repository.service');
let LoginComponent = class {
    constructor(router, route, userService) {
        this.router = router;
        this.route = route;
        this.userService = userService;
        this.error = false;
    }
    submit() {
        this.userService.login(this.email, this.password).then((x) => {
            if (x) {
                if (this.userService.getUser().accountType == 'vendor')
                    this.router.navigate(['/vendor']);
                else
                    this.router.navigate(['/user']);
            }
            else {
                this.error = true;
            }
        });
    }
};
LoginComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'login',
        templateUrl: 'login.component.html',
        styleUrls: ['login.component.css']
    }), 
    __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, user_repository_service_1.UserRepository])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map