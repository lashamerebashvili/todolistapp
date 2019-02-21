import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FormService } from '../forms.service';

@Component({
  selector: 'app-form-add',
  templateUrl: './form-add.component.html',
  styleUrls: ['./form-add.component.css']
})
export class FormAddComponent implements OnInit {


  constructor(public formService: FormService, private http: HttpClient, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    
  }

  }