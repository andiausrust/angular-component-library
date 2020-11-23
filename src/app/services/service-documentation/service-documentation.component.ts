import {Component, OnInit} from '@angular/core';
import {User} from '../../other/user/user';
import {UserService} from '../../other/user/user.service';
import {SnackbarService} from '../snackbar/snackbar.service';

@Component({
    selector: 'app-service-documentation',
    templateUrl: './service-documentation.component.html',
    styleUrls: ['./service-documentation.component.scss']
})
export class ServiceDocumentationComponent implements OnInit {

    user: User = new User();

    constructor(private userService: UserService,
                private snackBarService: SnackbarService) {
    }

    ngOnInit(): void {
        this.userService.getUserById(1).subscribe({
            next: response => {
                this.user = response;
            },
            error: error => console.log(error),
            complete: () => console.log('done')
        });
    }

    callSnackbar(): void {
        this.snackBarService.callSnackbar('Snackbar Service Example');
    }
}
