import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UsersComponent } from './users.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    UsersComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { 
        path:'users/:id', 
        component: UserDetailsComponent
      },
      { 
        path:'users', 
        component: UsersComponent
      },
    ])
  ]
})
export class UserModule { }
