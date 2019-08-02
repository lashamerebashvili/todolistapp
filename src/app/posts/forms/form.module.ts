import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsComponent } from './forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormAddComponent } from '../form-add/form-add.component';

@NgModule({
  declarations: [
    FormsComponent,
    FormAddComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: 'posts/:id',
        component: FormsComponent
      },
      {
        path: 'form-add',
        component: FormAddComponent
      }
    ])
  ]
})
export class FormModule { }
