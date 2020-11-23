import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

    public snackBar$ = new Subject<string>();

    public callSnackbar(message: string): void {
        this.snackBar$.next(message);
    }
}
