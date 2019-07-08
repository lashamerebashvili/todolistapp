import { Component } from '@angular/core';
import { FormService } from '../forms.service';

@Component({
  selector: 'app-form-add',
  templateUrl: './form-add.component.html',
  styleUrls: ['./form-add.component.css']
})

export class FormAddComponent {

  constructor(public formService: FormService) {}

  }
