import { FormGroup } from '@angular/forms';

// custom validator to check that two fields match
export function checkSum(A: string, B: string, C: string, D: string, E: string) {
  return (formGroup: FormGroup) => {
    const a = +formGroup.controls[A].value;
    const b = +formGroup.controls[B].value;
    const c = +formGroup.controls[C].value;
    const d = +formGroup.controls[D].value;
    const e = +formGroup.controls[E].value;
    if (a + b + c + d + e !== 100 ) {
      return { notValid: true };
    } else {
      return null;
    }
  };
}
