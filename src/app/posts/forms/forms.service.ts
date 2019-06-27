import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Form } from './form-interface';
import { alert } from './alert';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})

export class FormService {

  formsUrl = 'https://jsonplaceholder.typicode.com/posts';
  form: Observable<Form[]>;
  alert: alert;


    constructor(private http: HttpClient) {
      this.alert = new alert();
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

}
