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
  private formUrl = "https://jsonplaceholder.typicode.com/posts";

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
        fetch(this.formUrl, {
          method: 'POST',
          body: JSON.stringify(this.forms),
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        })
        .then(response => response.json())
        .then(json => console.log(json))
        
        
    }


  }