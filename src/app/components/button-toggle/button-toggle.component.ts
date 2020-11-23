import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {ButtonMeta} from './button-meta.model';

@Component({
    selector: 'app-button-toggle',
    templateUrl: './button-toggle.component.html',
    styleUrls: ['./button-toggle.component.scss']
})
export class ButtonToggleComponent implements OnInit {

    @Input() options: ButtonMeta[] = [];
    @Output() selection = new EventEmitter<any>();

    public selectedOption(selectedOption: ButtonMeta): void {
        this.options.forEach(option => option.isActive = (selectedOption === option));
        this.selection.emit(selectedOption);
    }

    constructor() {
    }

    ngOnInit(): void {
    }

}
