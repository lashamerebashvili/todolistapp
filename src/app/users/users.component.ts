import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsersInfo } from './user-interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
users: any[] = [];
  
  pageTitle: string = 'To do list app';

  constructor(private http: HttpClient) { }

getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }



  ngOnInit(): void {
    this.getUsers().subscribe(
      (users: any) => this.users = users
    );
  }

}
