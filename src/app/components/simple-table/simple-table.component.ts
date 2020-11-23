import {Component, Input, EventEmitter, Output} from '@angular/core';

@Component({
    selector: 'app-simple-table',
    templateUrl: './simple-table.component.html',
    styleUrls: ['./simple-table.component.scss']
})
export class SimpleTableComponent {

    @Input() public tableData: any[] = [
        {first: 'Mayer 1', last: 'Andi', dob: '10/25/87'},
        {first: 'Mayer 2', last: 'Andi', dob: '10/25/87'},
        {first: 'Mayer 3', last: 'Andi', dob: '10/25/87'},
        {first: 'Mayer 4', last: 'Andi', dob: '10/25/87'},
    ];

    @Output() headerSelector = new EventEmitter<{key: string, value: any}>();

    headerSelection(key: string, value: any): void {
        this.headerSelector.emit({key, value});

    }
}
