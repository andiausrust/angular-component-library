import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';

@Component({
    selector: 'app-debounce-search',
    templateUrl: './debounce-search.component.html',
    styleUrls: ['./debounce-search.component.scss']
})
export class DebounceSearchComponent implements OnInit {

    searchTerm = '';
    @Input() placeHolder = 'Search';
    @Output() searchUpdate = new EventEmitter<string>();

    private searchUpdate$ = new Subject<string>();

    constructor() {
        this.searchUpdate$.pipe(
            debounceTime(500),
            distinctUntilChanged()
        ).subscribe(value => {
            this.searchUpdate.emit(value);
        });
    }

    ngOnInit(): void {
    }

    updateSearchTerm(term: string): void {
        this.searchUpdate$.next(term);
    }

}
