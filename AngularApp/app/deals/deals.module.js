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
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var Shared = require('../shared/index');
var deal_list_component_1 = require('./deal-list/deal-list.component');
var sign_up_component_1 = require('./sign-up/sign-up.component');
var searches_component_1 = require('./searches/searches.component');
var vendor_interface_component_1 = require('./vendor-interface/vendor-interface.component');
var login_component_1 = require('./login/login.component');
var deal_repository_service_1 = require('./api/deal/deal-repository.service');
var user_repository_service_1 = require('./api/user/user-repository.service');
var routes = [
    {
        path: '',
        component: deal_list_component_1.DealListComponent
    },
    {
        path: 'user',
        component: deal_list_component_1.DealListComponent
    },
    {
        path: 'vendor',
        component: vendor_interface_component_1.VendorInterfaceComponent
    },
    {
        path: 'mysearches',
        component: searches_component_1.SearchesComponent
    },
    {
        path: 'signup/:mode',
        component: sign_up_component_1.SignUpComponent
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent
    },
    {
        path: 'mydeals',
        component: searches_component_1.SearchesComponent
    }
];
let DealsModule = class {
};
DealsModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            router_1.RouterModule.forRoot(routes),
            forms_1.FormsModule,
            Shared.SharedModule,
            http_1.HttpModule
        ],
        declarations: [
            deal_list_component_1.DealListComponent, sign_up_component_1.SignUpComponent, vendor_interface_component_1.VendorInterfaceComponent, searches_component_1.SearchesComponent, login_component_1.LoginComponent
        ],
        exports: [
            deal_list_component_1.DealListComponent
        ],
        providers: [
            deal_repository_service_1.DealRepository,
            user_repository_service_1.UserRepository
        ]
    }), 
    __metadata('design:paramtypes', [])
], DealsModule);
exports.DealsModule = DealsModule;
//# sourceMappingURL=deals.module.js.map