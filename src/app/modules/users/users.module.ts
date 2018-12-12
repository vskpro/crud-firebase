import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsersRoutingModule } from './users-routing.module';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
@NgModule({
  declarations: [AddComponent, EditComponent],
  imports: [
    CommonModule,
    FormsModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
