import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { PostsComponent } from './posts/posts.component';
import { FormService } from './posts/forms/forms.service';
import { FormModule } from './posts/forms/form.module';
import { UserModule } from './users/user.module';
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
    RouterModule.forRoot( [
      {
        path:'welcome', 
      component: WelcomeComponent
      },
      { 
        path:'posts', 
        component: PostsComponent
      },
      {
        path:'',
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
    UserModule,
  ],
  providers: [FormService], 
  bootstrap: [AppComponent]
})
export class AppModule { }
