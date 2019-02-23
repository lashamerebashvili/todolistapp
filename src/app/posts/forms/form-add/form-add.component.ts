import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FormService } from '../forms.service';
import { AlertsService } from 'angular-alert-module';
import { form } from '../form-interface';

@Component({
  selector: 'app-form-add',
  templateUrl: './form-add.component.html',
  styleUrls: ['./form-add.component.css']
})



export class FormAddComponent implements OnInit {
  form: form = {
    id: 0,
    userId: 0,
    title: '',
    body: ''
};

  constructor(public formService: FormService, private http: HttpClient, private route: ActivatedRoute,
    private router: Router, private alerts: AlertsService) { }

  ngOnInit() {
    
  }

    addForm() {
      this.http.post("https://jsonplaceholder.typicode.com/posts",
        this.form)
        .subscribe(
        data  => {
          console.log("POST Request is successful ", data);
        },
        error  => {
          console.log("Error", error);
        }
        );
    }

  }