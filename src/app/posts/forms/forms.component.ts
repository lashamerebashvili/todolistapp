import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormService } from './forms.service';
import { form } from './form-interface';
import { HttpClient } from '@angular/common/http';
import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})


export class FormsComponent implements OnInit {

  formsUrl = "https://jsonplaceholder.typicode.com/posts";
  id: any;
  form: form = {
    id: 0,
    userId: 0,
    title: '',
    body: ''
  };

  constructor(private formService: FormService ,private route: ActivatedRoute,
    private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.id=this.route.snapshot.params['id'];

    this.formService.getForms(this.id).subscribe(
      (forms: any) => {
        this.form = forms[0];
        console.log(this.form);
      }
    );
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
      },
      error  => {
      console.log("Error", error);
      }

    );
  }

}