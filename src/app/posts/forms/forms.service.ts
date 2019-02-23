import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { form } from './form-interface';
import { Subject } from 'rxjs';



@Injectable({
    providedIn: 'root'
}) 

export class FormService {
  

  formsUrl = "https://jsonplaceholder.typicode.com/posts";
  form: form = {
      id: 0,
      userId: 0,
      title: '',
      body: ''
  };
  private _success = new Subject<string>();


    constructor(private http: HttpClient) { }



    getForms(id) {
            return this.http.get('https://jsonplaceholder.typicode.com/posts'
            + "?id=" + id)
    }

    editForm() {
        fetch(this.formsUrl + "/" + this.form.id, {
          method: 'PUT',
          body: JSON.stringify(this.form),
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        })
        .then(response => response.json())
        .then(json => console.log(json));
    }

    deleteForm() {
        this.http.delete(this.formsUrl + "/" + this.form.id)
        .subscribe(
          data  => {
            console.log("DELETE Request is successful ", data);
            this._success.next(`${new Date()} - Message successfully changed.`);
          },
          error  => {
            console.log("Error", error);
          }
        );
        
      }


}