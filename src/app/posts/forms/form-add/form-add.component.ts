import { Component } from '@angular/core';
import { FormService } from '../forms.service';
import { UserService } from 'src/app/shared/users.service';

@Component({
  selector: 'app-form-add',
  templateUrl: './form-add.component.html',
  styleUrls: ['./form-add.component.css']
})

export class FormAddComponent {

  constructor(public formService: FormService,
              public userService: UserService) {
    }
}

