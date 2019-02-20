import { Component, OnInit } from '@angular/core';
import { FormService } from '../forms/forms.service';

@Component({
  selector: 'app-form-add',
  templateUrl: './form-add.component.html',
  styleUrls: ['./form-add.component.css']
})
export class FormAddComponent implements OnInit {

  constructor(private formService: FormService) { }

  ngOnInit() {
    
  }
  
}