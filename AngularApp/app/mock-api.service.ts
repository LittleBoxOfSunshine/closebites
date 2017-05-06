import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class MockApiService implements InMemoryDbService {

    dataStore = {
        default: {
            
        },
        empty: {
            
        }
    };

    createDb() {
        return this.dataStore['default'];
    }
}