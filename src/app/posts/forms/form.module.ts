import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormAddComponent } from './form-add/form-add.component';
import { FormsComponent } from './forms.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    FormsComponent,
    FormAddComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { 
        path:'posts/:id', 
        component: FormsComponent
      },
      {
        path:'form-add',
        component: FormAddComponent
      }
    ])
  ]
})
export class FormModule { }
