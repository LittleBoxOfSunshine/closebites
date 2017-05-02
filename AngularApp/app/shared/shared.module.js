"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const forms_1 = require("@angular/forms");
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const rating_component_1 = require("./rating/rating.component");
const validation_messages_component_1 = require("./validation-messages/validation-messages.component");
const email_validator_directive_1 = require("./validators/email-validator.directive");
let SharedModule = class SharedModule {
};
SharedModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule
        ],
        declarations: [
            rating_component_1.RatingComponent,
            validation_messages_component_1.ValidationMessagesComponent,
            email_validator_directive_1.EmailValidatorDirective
        ],
        exports: [
            rating_component_1.RatingComponent,
            validation_messages_component_1.ValidationMessagesComponent,
            email_validator_directive_1.EmailValidatorDirective
        ]
    })
], SharedModule);
exports.SharedModule = SharedModule;
//# sourceMappingURL=shared.module.js.map