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
const deal_1 = require("../../deals/api/deal/deal");
let RatingComponent = class RatingComponent {
    constructor() {
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], RatingComponent.prototype, "model", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", deal_1.Deal)
], RatingComponent.prototype, "movie", void 0);
RatingComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'rating',
        template: `<span class="glyphicon"
                    *ngFor="let value of [1,2,3,4,5]"
                    [ngClass]="{ 'glyphicon-star': model >= value, 'glyphicon-star-empty': (model||0) < value }"
                    (click) = "updateRating(value)">
                </span>
                <span class="badge">{{model || 0}}/5</span>`
    }),
    __metadata("design:paramtypes", [])
], RatingComponent);
exports.RatingComponent = RatingComponent;
//# sourceMappingURL=rating.component.js.map