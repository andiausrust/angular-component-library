import {Component} from '@angular/core';
import {fadeInOutAnimation} from '../animations/fade-in-out.animations';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-service-documentation',
    templateUrl: './others-documentation.component.html',
    styleUrls: ['./others-documentation.component.scss'],
    animations: [fadeInOutAnimation]
})
export class OthersDocumentationComponent {

    isInDOM = true;
    form: FormGroup;

    constructor(private fb: FormBuilder) {
        this.initializeForm();
    }

    private initializeForm(): void {
        this.form = this.fb.group({
            name: ['', [Validators.required, Validators.minLength(2)]]
        });
    }

    submit(): void {
        this.form.reset(this.form.value);
    }
}
