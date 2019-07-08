import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormService } from './forms.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})


export class FormsComponent implements OnInit, OnDestroy {

  id: any;
  form: any;

  constructor(public formService: FormService , private route: ActivatedRoute,
              private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;

    this.form = this.formService.getForms(this.id).subscribe(
      (forms: any) => {
        this.formService.form = forms[0];
      }
    );
  }

  ngOnDestroy() {
    this.form.unsubscribe();
  }

}
