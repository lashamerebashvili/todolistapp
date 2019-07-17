import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';
import { Form } from '../forms/form-interface';

@Injectable({
  providedIn: 'root'
})
export class FormAddService {
  form: Form = {
    id: 0,
    userId: 0,
    title: '',
    body: ''
  };

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  resetForm() {
    this.form = {
      id: 0,
      userId: 0,
      title: '',
      body: ''
    };
  }

  addForm() {
    return this.http.post<Form>('https://jsonplaceholder.typicode.com/posts',
    this.form).subscribe(
      data => {
        console.log('POST Request is successful ', data);
        this.openSnackBar('Post has been successfully added !', 'Close');
        this.resetForm();
      },
      error => {
        console.log('Error', error);
      }
      );
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
