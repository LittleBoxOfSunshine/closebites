import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'validation-messages',
  templateUrl: 'validation-messages.component.html',
  styleUrls: [ 'validation-messages.component.css' ]
})

export class ValidationMessagesComponent { 

    @Input() model;
    @Input() set messages( value) {
        this.validators = [];
        Object.keys(value).forEach(x => {
            this.validators.push({ key: x, message: value[x] });
        });
    }

    validators;

}