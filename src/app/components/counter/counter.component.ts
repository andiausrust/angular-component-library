import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html',
    styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

    @Input() public counter = 0;
    @Input() min = 0;
    @Input() max = Number.MAX_SAFE_INTEGER;

    constructor() {
    }

    ngOnInit(): void {
    }

    minusOne(): void {
        if (this.min < this.counter) {
            this.counter--;
        }
    }

    addOne(): void {
        if (this.max > this.counter) {
            this.counter++;
        }
    }
}
