import { FormArray, FormControl, FormGroup } from '@angular/forms';

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

  static cepValidator(control: FormControl){

    const cep = control.value;
    if( cep && cep !== '' ){
      const validacep = /^[0-9]{8}$/;
      return validacep.test(cep) ? null : {cepInvalido : true};
    }
  }

  static equalsTo(otherField: string){
    const validator = (FormControl: FormControl) => {
      if (otherField == null){
        throw new Error('É necessário informar um campo.');
      }

      if(!FormControl.root || !(<FormGroup>FormControl.root).controls){
        return null;
      }

      const field = (<FormGroup>FormControl.root).get(otherField);

      if(!field){
        throw new Error('É necessário informar um campo válido.');
      }

      if(field.value !== FormControl.value){
        return { equalsTo : otherField }
      }

      return null
    }
    return validator;
  }

  static getErrorMsg(fieldName: string, validatorName: string, validatorValue?: any){
    const config = {
      'required':  `${fieldName} é obrigatório.`,
      'minlength': `${fieldName} precisa ter no mínimo ${validatorValue.requiredLength} caracteres.`,
      'maxlength': `${fieldName} precisa ter no máximo ${validatorValue.requiredLength} caracteres.`,
      'cepInvalido': 'CEP inválido.'
    };

    return config[validatorName];

  }
}
