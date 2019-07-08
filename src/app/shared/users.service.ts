import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private http: HttpClient) { }

    getUsers() {
        return this.http.get('https://jsonplaceholder.typicode.com/users');
    }

    getUserDetails(userId) {
        return this.http.get('https://jsonplaceholder.typicode.com/todos' + '?userId=' + userId);
    }
}
