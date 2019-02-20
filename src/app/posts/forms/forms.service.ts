import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
}) 

export class FormService {



    constructor(private http: HttpClient) { }

    getForms(id) {
        return this.http.get('https://jsonplaceholder.typicode.com/posts'
        + "?id=" + id)
      }

    // storeForms(forms: any[]) {
    //     return this.http.post('https://jsonplaceholder.typicode.com/posts',
    //     forms)
    // }

    

}