import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../shared/users.service';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  users: any[] = [];

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.userService.getUsers().subscribe(
      (users: any) => this.users = users
    );

  }

}
