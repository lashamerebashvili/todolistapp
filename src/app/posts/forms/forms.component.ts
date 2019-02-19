import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormService } from './forms.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {


  forms: any;
  title: any;
  body: any;
  id: any;
  
  constructor(private formService: FormService ,private route: ActivatedRoute) { }

  ngOnInit() {
    this.id=this.route.snapshot.params['id'];

    this.formService.getForms(this.id).subscribe(
      (posts: any) => {
        this.forms = posts[0];
        console.log(posts);
        this.title = this.forms.title;
        this.body = this.forms.body;
      }
    );
  }

}
