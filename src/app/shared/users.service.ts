import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import { FormAddService } from '../posts/form-add/form-add.service';
import { MatSnackBar } from '@angular/material';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    location: Location;

    constructor(private http: HttpClient, location: Location,
                public formAddService: FormAddService,
                private snackBar: MatSnackBar
        ) {
        this.location = location;
    }

    getUsers() {
        return this.http.get('https://jsonplaceholder.typicode.com/users');
    }

    getUserDetails(userId) {
        return this.http.get('https://jsonplaceholder.typicode.com/todos' + '?userId=' + userId);
    }

    goBack(): void {
        this.location.back();
        this.formAddService.resetForm();
        this.snackBar.dismiss();
    }
}
