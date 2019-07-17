import { Component, OnDestroy } from '@angular/core';
import { UserService } from 'src/app/shared/users.service';
import { FormAddService } from './form-add.service';

@Component({
  selector: 'app-form-add',
  templateUrl: './form-add.component.html',
  styleUrls: ['./form-add.component.css']
})

export class FormAddComponent {

  constructor(public formAddService: FormAddService,
              public userService: UserService) {
  }
}
