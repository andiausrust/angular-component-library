import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {of, Subscription} from 'rxjs';
import {delay} from 'rxjs/operators';
import {SnackbarService} from '../../services/snackbar/snackbar.service';

@Component({
    selector: 'app-snackbar',
    templateUrl: './snackbar.component.html',
    styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent implements OnInit, OnDestroy {

    @Input() message = '';
    isShown = false;
    private sub: Subscription;

    constructor(private snackBarService: SnackbarService) {
    }

    public showMessage(value: string): void {
        this.isShown = true;
        this.message = value;

        const subscription = of(null).pipe(
            delay(2900)
        ).subscribe({
            complete: () => {
                this.isShown = false;
                subscription.unsubscribe();
            }
        });

    }

    ngOnInit(): void {
        this.sub = this.snackBarService.snackBar$.subscribe(val => this.showMessage(val));
    }

    ngOnDestroy(): void {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    }

}
