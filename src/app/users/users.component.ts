import { Component, OnInit } from '@angular/core';
import { UserService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
users: any[] = [];

  constructor(private userService: UserService) {

  }

  ngOnInit(): void {

    this.userService.getUsers().subscribe(
      (users: any) => this.users = users
    );
  }

}
