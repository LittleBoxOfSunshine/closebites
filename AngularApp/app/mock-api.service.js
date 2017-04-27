"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let MockApiService = class MockApiService {
    constructor() {
        //added MockApiService based on class exercise
        this.dataStore = {
            default: {
                deals: [
                    { id: 1, name: "McDonald's", description: "Deal 1 text", type: 'food' },
                    { id: 2, name: 'Burger King', description: 'Deal 2 text', type: 'drink' },
                    { id: 3, name: 'Chick Fil-A', description: 'Deal 3 text', type: 'drink' },
                    { id: 4, name: 'Subway', description: 'Deal 4 text', type: 'food' },
                    { id: 5, name: 'Pizzeria', description: 'Deal 5 text', type: 'food' },
                    { id: 6, name: 'Jamba Juice', description: 'Deal 6 text', type: 'drink' },
                ],
                movies: [
                    { id: 1, title: 'Batman', year: 1988, imagePath: 'images/shining.jpg', rating: 0 },
                    { id: 2, title: 'Home Alone', year: 1990, imagePath: 'images/nemo.jpg', rating: 0 },
                    { id: 3, title: 'Titanic', year: 1996, imagePath: 'images/hungergames.jpg', rating: 0 }
                ],
                users: [],
                login: {
                    id: 0,
                    name: "John Doe",
                    accountType: "consumer",
                    favorites: [0, 1],
                    filters: [
                        ""
                    ]
                    //error: "invalid username and/or password"
                },
                loginVendor: {
                    name: "Jack in the Crack",
                    accountType: "vendor",
                    address: "123 Fake St.",
                    dates: []
                },
                deal: {
                    id: 0
                }
            },
            empty: {
                movies: []
            }
        };
    }
    createDb() {
        return this.dataStore['default'];
    }
};
MockApiService = __decorate([
    core_1.Injectable()
], MockApiService);
exports.MockApiService = MockApiService;
//# sourceMappingURL=mock-api.service.js.map