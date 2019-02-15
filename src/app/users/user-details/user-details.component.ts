import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userdetails: any[] = [];
  public userId;
  
  constructor(private http: HttpClient, private route: ActivatedRoute) { }

getUserDetails() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos')
  }


  ngOnInit(): void {
    this.getUserDetails().subscribe(
      (userdetails: any) => this.userdetails = userdetails
    );
    }

}
