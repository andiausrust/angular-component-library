import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {User} from './user';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private readonly baseRoute = 'https://jsonplaceholder.typicode.com/users';

    constructor(private http: HttpClient) {
    }

    getUserById(id: number): any {
        return this.http.get(`${this.baseRoute}/${id}`).pipe(
            map(user => new User(user)
            )
        );
    }
}
