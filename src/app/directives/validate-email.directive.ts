import { Directive, forwardRef, Input } from '@angular/core';
import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[appValidateEqual][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => ValidateEmailDirective),
      multi: true
    }
  ]
})

export class ValidateEmailDirective implements Validator {
  @Input() ngModel: any;
  @Input() appValidateEqual: any; // NOTE
  // @Input('prefix') prefix: string;

  validate(c: AbstractControl) {
    // const patern = this.appValidateEqual;
    // const prefix = /^123/i;

    // console.log(this.appValidateEqual);
    // setTimeout(() => {
    //   console.log(this.ngModel);
    // }, 1000);
    // console.log(patern);
    // console.log(typeof patern);
    // console.log(prefix);
    // console.log(typeof prefix);

    // const e = c.root.get(this.appValidateEqual);

    if (!this.appValidateEqual.test(c.value)) {
      return {
        appValidateEqual: true,
      };
    }

    return null;
  }
}
