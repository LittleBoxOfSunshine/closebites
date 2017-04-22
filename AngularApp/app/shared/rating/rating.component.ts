import { Component, Input } from '@angular/core';

import { Deal } from '../../deals/api/deal/deal';


@Component({
    moduleId: module.id,
    selector: 'rating',
    template: `<span class="glyphicon"
                    *ngFor="let value of [1,2,3,4,5]"
                    [ngClass]="{ 'glyphicon-star': model >= value, 'glyphicon-star-empty': (model||0) < value }"
                    (click) = "updateRating(value)">
                </span>
                <span class="badge">{{model || 0}}/5</span>`
})
export class RatingComponent {
    @Input() model: number;
    @Input() movie: Deal;

    constructor() {
        
    }
    //rating component will take input from movie-list-component and update the movie's rating
    //reflected in both the stars and badge rating
    updateRating(value: number){
        this.model = value;
        this.movie.rating = this.model;
    }
    
}