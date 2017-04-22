import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class MockApiService implements InMemoryDbService {

    //added MockApiService based on class exercise
    dataStore = {
        default: {
            movies: [
                { id: 1, title: 'Batman', year: 1988, imagePath: 'images/shining.jpg', rating: 0 },
                { id: 2, title: 'Home Alone', year: 1990, imagePath: 'images/nemo.jpg', rating: 0 },
                { id: 3, title: 'Titanic', year: 1996, imagePath: 'images/hungergames.jpg', rating: 0 }
            ]
        },
        empty: {
            movies: []
        }
    };

    createDb() {
        return this.dataStore['default'];
    }
}