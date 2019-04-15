import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})
export class UserDetailService {
    constructor(private http: HttpClient) { }


    getUserDetails(userId) {
        return this.http.get('https://jsonplaceholder.typicode.com/todos' + '?userId=' + userId);
    }
}
