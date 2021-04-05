import { AbstractControl } from "@angular/forms";
import { map } from "rxjs/operators";
import { ServiceEmailService } from "../components/validate-email/service-email/service-email.service";

export class MyValidators {
    static validateEmail(userService: ServiceEmailService) {
        return (control: AbstractControl) => {
            const value = control.value;
            return userService.checkEmail(value)
                .pipe(
                    map(response => {
                        const isEmailAvailable = response.isEmailAvailable;
                        return isEmailAvailable ? null : { notAvailable: true };
                    })
                );
        };
    }

}