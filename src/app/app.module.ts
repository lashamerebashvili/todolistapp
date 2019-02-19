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
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserDetailsComponent,
    WelcomeComponent,
    PostsComponent,
    FormsComponent
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
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
