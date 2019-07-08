import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FormService } from '../forms.service';
import { Form } from '../form-interface';

@Component({
  selector: 'app-form-add',
  templateUrl: './form-add.component.html',
  styleUrls: ['./form-add.component.css']
})



export class FormAddComponent {
  form: Form = {
    id: 0,
    userId: 0,
    title: '',
    body: ''
};

  constructor(public formService: FormService, private http: HttpClient, private route: ActivatedRoute,
              private router: Router) { }

    addForm() {
      if (this.form.title.length && this.form.body.length) {
        this.http.post('https://jsonplaceholder.typicode.com/posts',
        this.form)
        .subscribe(
        data  => {
          console.log('POST Request is successful ', data);
          this.formService.openSnackBar('Post has been successfully added !', 'Close');
        },
        error  => {
          console.log('Error', error);
        }
        );
      }
    }
  }
