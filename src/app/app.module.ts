import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { RouterModule } from '@angular/router';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PostsComponent } from './posts/posts.component';
import { FormsComponent } from './posts/forms/forms.component';
import { FormService } from './posts/forms/forms.service';
import { FormAddComponent } from './posts/forms/form-add/form-add.component';
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserDetailsComponent,
    WelcomeComponent,
    PostsComponent,
    FormsComponent,
    FormAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot( [
      {
        path:'', 
      component: WelcomeComponent
      },
      { 
        path:'users/:id', 
        component: UserDetailsComponent
      },
      { 
        path:'users', 
        component: UsersComponent
      },
      { 
        path:'posts', 
        component: PostsComponent
      },
      { 
        path:'posts/:id', 
        component: FormsComponent
      },
      {
        path:'form-add',
        component: FormAddComponent
      }
    ])
  ],
  providers: [FormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
