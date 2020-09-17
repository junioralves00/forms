import { FormArray } from '@angular/forms';

export class FormValidations {

  static requiredMinCheckbox(min = 1){
    const validator = (FormArray: FormArray) =>{
     /* const values = FormArray.controls;
      let totalChecked = 0;
      for( let i = 0; i < values.length; i++){
        if (values[i].value){
          totalChecked += 1;
        }
      }*/

      const totalChecked  = FormArray.controls
        .map(v => v.value)
        .reduce((total, current) => current ? total + current : total, 0 );
      return totalChecked >= min ? null : { required: true};
    };
    return validator;
  }
}
