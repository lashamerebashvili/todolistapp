import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Form } from './form-interface';
import { MatSnackBar } from '@angular/material';

@Injectable({
    providedIn: 'root'
})

export class FormService {

  formsUrl = 'https://jsonplaceholder.typicode.com/posts';
  form: Form = {
    id: 0,
    userId: 0,
    title: '',
    body: ''
};

    // tslint:disable-next-line:variable-name
    constructor(private http: HttpClient, private _snackBar: MatSnackBar) {}

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
        .then(response => response.json()).then((res: any) => {
          this.openSnackBar('Post has been successfully saved !', 'Close');
        });
    }

    deleteForm() {
        this.http.delete(this.formsUrl + '/' + this.form.id).subscribe(
          data  => {
            console.log('DELETE Request is successful ', data);
            this.openSnackBar('Post has been successfully deleted !', 'Close');
          },
          error  => {
            console.log('Error', error);
          }
        );
    }

    openSnackBar(message: string, action: string) {
        this._snackBar.open(message, action, {
          duration: 2000,
        });
    }

    addForm() {
          return this.http.post('https://jsonplaceholder.typicode.com/posts',
          this.form).subscribe(
            data  => {
              console.log('POST Request is successful ', data);
              this.openSnackBar('Post has been successfully added !', 'Close');
            },
            error  => {
              console.log('Error', error);
            }
            );
      }
}
