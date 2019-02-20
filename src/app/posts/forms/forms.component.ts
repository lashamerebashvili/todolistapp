import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormService } from './forms.service';
import { form } from './form-interface';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  dataSubscription: Subscription; 

  formsUrl = "https://jsonplaceholder.typicode.com/posts";
  forms: any;
  title: any;
  body: any;
  id: any;
  form: form =  {
    "userId": 1,
    "id": 1,
    "title": "",
    "body": ""
  };
  userId: any;

  constructor(private formService: FormService ,private route: ActivatedRoute,
    private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.id=this.route.snapshot.params['id'];

    this.formService.getForms(this.id).subscribe(
      (forms: any) => {
        this.forms = forms[0];
        console.log(forms);
        this.title = this.forms.title;
        this.body = this.forms.body;
      }
    );
  }

  editForm(){
    fetch(this.formsUrl + "/" + this.form.id, {
      method: 'PUT',
      body: JSON.stringify({
        id: this.id,
        title: this.title,
        body: this.body,
        userId: this.userId
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(response => response.json())
    .then(json => console.log(json));
  }

}