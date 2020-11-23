import {Directive, EventEmitter, HostListener, OnDestroy, OnInit, Output} from '@angular/core';
import {BehaviorSubject, Subscription} from 'rxjs';
import {debounceTime} from 'rxjs/operators';

@Directive({
    selector: '[appDebounceClick]'
})
export class DebounceClickDirective implements OnInit, OnDestroy{

    @Output() debounceClick = new EventEmitter();
    private clickSubject = new BehaviorSubject(null);
    private clicks$ = this.clickSubject.asObservable();

    sub: Subscription;

    constructor() {
    }

    ngOnInit(): void {
        const debounceTimeInMs = 500;

        this.sub = this.clicks$.pipe(
            debounceTime(debounceTimeInMs)
        ).subscribe(value => this.debounceClick.emit(value));
    }

    ngOnDestroy(): void {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    }

    @HostListener('click', ['$event'])
    clickEvent(event: any): void {
        event.preventDefault();
        event.stopPropagation();
        this.clickSubject.next(true);
    }

}
