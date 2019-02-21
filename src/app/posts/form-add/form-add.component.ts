import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { form } from '../forms/form-interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-add',
  templateUrl: './form-add.component.html',
  styleUrls: ['./form-add.component.css']
})
export class FormAddComponent implements OnInit {
  
  forms: form = {
    "id": 0,
    "userId": 0,
    "title": '',
    "body": ''
  };


  constructor(private http: HttpClient, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    
  }
  
      addForm() {
        this.http.post("https://jsonplaceholder.typicode.com/posts",
          this.forms)
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