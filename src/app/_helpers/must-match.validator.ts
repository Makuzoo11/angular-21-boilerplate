import { AbstractControl } from '@angular/forms';

<<<<<<< HEAD
=======
// custom validator to check that two fields match
>>>>>>> 60d3a3fdbc1d84564d77ba326470f31391c17f76
export function MustMatch(controlName: string, matchingControlName: string) {
    return (group: AbstractControl) => {
        const control = group.get(controlName);
        const matchingControl = group.get(matchingControlName);

        if (!control || !matchingControl) {
            return null;
        }

<<<<<<< HEAD
        if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
            return null;
        }

=======
        // return if another validator has already found an error on the matchingControl
        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            return null;
        }

        // set error on matchingControl if validation fails
>>>>>>> 60d3a3fdbc1d84564d77ba326470f31391c17f76
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
<<<<<<< HEAD
        return null;
    };
}

export default MustMatch;
=======

        return null;
    };
}
>>>>>>> 60d3a3fdbc1d84564d77ba326470f31391c17f76
