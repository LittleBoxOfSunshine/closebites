import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class MockApiService implements InMemoryDbService {

    //added MockApiService based on class exercise
    dataStore = {
        default: {
            deals: [
                {id:1,name:"McDonald's",description:"Deal 1 text",type:'food'},
                {id:2,name:'Burger King',description:'Deal 2 text',type:'drink'},
                {id:3,name:'Chick Fil-A',description:'Deal 3 text',type:'drink'},
                {id:4,name:'Subway',description:'Deal 4 text',type:'food'},
                {id:5,name:'Pizzeria',description:'Deal 5 text',type:'food'},
                {id:6,name:'Jamba Juice',description:'Deal 6 text',type:'drink'},
            ],
            movies: [
                { id: 1, title: 'Batman', year: 1988, imagePath: 'images/shining.jpg', rating: 0 },
                { id: 2, title: 'Home Alone', year: 1990, imagePath: 'images/nemo.jpg', rating: 0 },
                { id: 3, title: 'Titanic', year: 1996, imagePath: 'images/hungergames.jpg', rating: 0 }
            ],
            users: [

            ],
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
                dates: [

                ]
            },
            deal: {
                id: 0
            }
        },
        empty: {
            movies: []
        }
    };

    createDb() {
        return this.dataStore['default'];
    }
}