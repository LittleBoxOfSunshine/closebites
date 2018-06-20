import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ValidationMessagesComponent } from "./validation-messages/validation-messages.component";
import { EmailValidatorDirective } from "./validators/email-validator.directive";

@NgModule({
  imports: [ 
      CommonModule,
      FormsModule
  ],
  declarations: [
    ValidationMessagesComponent,
    EmailValidatorDirective
  ],
  exports: [
    ValidationMessagesComponent,
    EmailValidatorDirective
  ]
})

export class SharedModule { }