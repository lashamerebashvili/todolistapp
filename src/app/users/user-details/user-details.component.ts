import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserDetailService } from './user-details.service';

@Component({
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userdetails: any[] = [];
  public userId;
  
  constructor(private userDetailService: UserDetailService, private route: ActivatedRoute) { }



  ngOnInit(): void {
    this.userId=this.route.snapshot.params['id'];
    this.userDetailService.getUserDetails().subscribe(
      (userdetails: any) => this.userdetails = userdetails
    );
    }

}
