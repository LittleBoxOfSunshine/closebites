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
const Shared = require("../shared/index");
const deal_list_component_1 = require("./deal-list/deal-list.component");
const sign_up_component_1 = require("./sign-up/sign-up.component");
const searches_component_1 = require("./searches/searches.component");
const business_interface_component_1 = require("./business-interface/business-interface.component");
const deal_repository_service_1 = require("./api/deal-repository.service");
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
        path: 'business',
        component: business_interface_component_1.BusinessInterfaceComponent
    },
    {
        path: 'mysearches',
        component: searches_component_1.SearchesComponent
    },
    {
        path: 'signup/:mode',
        component: sign_up_component_1.SignUpComponent
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
            Shared.SharedModule
        ],
        declarations: [
            deal_list_component_1.DealListComponent, sign_up_component_1.SignUpComponent, business_interface_component_1.BusinessInterfaceComponent, searches_component_1.SearchesComponent
        ],
        exports: [
            deal_list_component_1.DealListComponent
        ],
        providers: [
            deal_repository_service_1.DealRepository
        ]
    })
], DealsModule);
exports.DealsModule = DealsModule;
//# sourceMappingURL=deals.module.js.map