import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-toggle',
    templateUrl: './toggle.component.html',
    styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent implements OnInit {

    @Input() isOn = false;

    constructor() {
    }

    ngOnInit(): void {
    }

    toggle(): void {
        this.isOn = !this.isOn;
    }
}
