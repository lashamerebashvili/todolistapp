import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormService } from './forms.service';
import { HttpClient } from '@angular/common/http';
import { alert } from './alert';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})


export class FormsComponent implements OnInit {

  alert: alert;
  id: any;
  posts: any;
  post: any;
  form: any;

  constructor(public formService: FormService , private route: ActivatedRoute,
              private router: Router, private http: HttpClient) { }



  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.alert = new alert();

    this.form = this.formService.getForms(this.id).subscribe(
      (forms: any) => {
        this.formService.form = forms[0];
      }
    );
  }

  ngOnDestroy() {
    this.form.unsubscribe();
  }

  editPost() {
    this.formService.editForm()
    .then((res: any) => {
      this.formService.alert.setAlert('Post has been successfully saved !');
    });
  }

  deletePost() {
    this.post = this.formService.deleteForm()
    .subscribe(
      data  => {
        console.log('DELETE Request is successful ', data);
        this.formService.alert.setAlert('Post has been successfully deleted !');
      },
      error  => {
        console.log('Error', error);
      }
    );
  }

}
