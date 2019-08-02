import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { PostsComponent } from './posts/posts.component';
import { FormService } from './posts/forms/forms.service';
import { FormModule } from './posts/forms/form.module';
import { UserModule } from './users/user.module';
import { MatSnackBarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatSnackBarModule,
    RouterModule.forRoot( [
      {
        path: 'welcome',
      component: WelcomeComponent
      },
      {
        path: 'posts',
        component: PostsComponent
      },
      {
        path: '',
        redirectTo: 'welcome',
        pathMatch: 'full'
      },
      {
        path: '**',
        redirectTo: 'welcome',
        pathMatch: 'full'
      }
    ]),
    FormModule,
    FormsModule,
    UserModule,
    BrowserAnimationsModule
  ],
  providers: [FormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
