import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Form } from './form-interface';
import { MatSnackBar } from '@angular/material';


@Injectable({
    providedIn: 'root'
})

export class FormService {

  formsUrl = 'https://jsonplaceholder.typicode.com/posts';
  form: Form;


    constructor(private http: HttpClient, private _snackBar: MatSnackBar) {

    }

    getForms(id) {
        return this.http.get<Form[]>('https://jsonplaceholder.typicode.com/posts'
            + '?id=' + id);
    }

    editForm() {
        return fetch(this.formsUrl + '/' + this.form.id, {
          method: 'PUT',
          body: JSON.stringify(this.form),
          headers: {
            'Content-type': 'application/json; charset=UTF-8'
          }
        })
        .then(response => response.json());
    }

    deleteForm() {
        return this.http.delete(this.formsUrl + '/' + this.form.id);
    }

    openSnackBar(message: string, action: string) {
        this._snackBar.open(message, action, {
          duration: 2000,
        });
      }

}
