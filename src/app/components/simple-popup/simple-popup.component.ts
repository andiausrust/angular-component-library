import {Component, HostListener, Input, OnInit} from '@angular/core';
import {fadeInOutAnimation} from '../../other/animations/fade-in-out.animations';
import {delay} from 'rxjs/operators';
import {of} from 'rxjs';

@Component({
    selector: 'app-simple-popup',
    templateUrl: './simple-popup.component.html',
    styleUrls: ['./simple-popup.component.scss'],
    animations: [fadeInOutAnimation]
})
export class SimplePopupComponent implements OnInit {

    @Input() public message = '';
    public isShown = false;

    constructor() {
    }

    ngOnInit(): void {
    }

    public show(): void {

    }

    @HostListener('mouseover')
    onMouseOver(): void {
        this.isShown = true;

        /*const sub = of(null)
            .pipe(
                delay(3000)
            ).subscribe({
                complete: () => {
                    this.isShown = false;
                    sub.unsubscribe();
                }
            });*/
    }
    @HostListener('mouseleave')
    onMouseLeave(): void {
        this.isShown = false;
    }

}
