import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormService } from './forms.service';
import { HttpClient } from '@angular/common/http';
import { Form } from './form-interface';
import { UserService } from 'src/app/shared/users.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})


export class FormsComponent implements OnInit, OnDestroy {

  id: any;
  getForms: any;

  constructor(public formService: FormService , private route: ActivatedRoute,
              private http: HttpClient,
              public userService: UserService
              ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;

    this.getForms = this.formService.getForms(this.id).subscribe(
      (forms: Form[]) => {
        this.formService.form = forms[0];
      }
    );
  }

  ngOnDestroy() {
    this.getForms.unsubscribe();
  }

}
