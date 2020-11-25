import {Component} from '@angular/core';
import {fadeInOutAnimation} from '../animations/fade-in-out.animations';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {slideRightAnimation} from '../animations/slider-animation';

@Component({
    selector: 'app-service-documentation',
    templateUrl: './others-documentation.component.html',
    styleUrls: ['./others-documentation.component.scss'],
    animations: [fadeInOutAnimation, slideRightAnimation]
})
export class OthersDocumentationComponent {

    isInDOM = true;
    form: FormGroup;


    public tabs = [
        {title: 'Tab 1', active: true},
        {title: 'Tab 2', active: false}
    ];
    selectedTab = 0;


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
