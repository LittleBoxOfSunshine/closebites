"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const router_1 = require("@angular/router");
const forms_1 = require("@angular/forms");
const http_1 = require("@angular/http");
const Shared = require("../shared/index");
const deal_list_component_1 = require("./deal-list/deal-list.component");
const sign_up_component_1 = require("./sign-up/sign-up.component");
const searches_component_1 = require("./searches/searches.component");
const vendor_interface_component_1 = require("./vendor-interface/vendor-interface.component");
const login_component_1 = require("./login/login.component");
const deal_repository_service_1 = require("./api/deal/deal-repository.service");
const user_repository_service_1 = require("./api/user/user-repository.service");
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
let DealsModule = class DealsModule {
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
    })
], DealsModule);
exports.DealsModule = DealsModule;
//# sourceMappingURL=deals.module.js.map