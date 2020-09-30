import { FormValidations } from './../form-validations';
import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-error-msg',
  templateUrl: './error-msg.component.html',
  styleUrls: ['./error-msg.component.scss']
})
export class ErrorMsgComponent implements OnInit {

  //@Input() mostrarErro: boolean;
  //@Input() msgErro: string;

  @Input() control: FormControl;
  @Input() label: string;

  constructor() { }

  ngOnInit(): void {

  }

  get errorMessage(){

    for(const propertyName in this.control.errors){
      if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched){
        return FormValidations.getErrorMsg(this.label, propertyName,this.control.errors[propertyName]);
      }

    }

    return null;
  }
}
