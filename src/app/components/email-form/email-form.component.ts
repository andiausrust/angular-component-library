import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-email-form',
    templateUrl: './email-form.component.html',
    styleUrls: ['./email-form.component.scss']
})
export class EmailFormComponent implements OnInit {

    form: FormGroup;

    constructor(private fb: FormBuilder) {
        this.initializeForm();
    }

    ngOnInit(): void {
    }

    private initializeForm(): void {
        this.form = this.fb.group({
            name: ['', [Validators.required, Validators.minLength(2)]],
            email: ['', [Validators.required, Validators.email]],
            message: ['']
        });
    }

    submitMessage(): void {
        console.log(`submitted form: ${this.form}`);
    }
}
