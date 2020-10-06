import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddformComponent } from './addform/addform.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { TasktableComponent } from './tasktable/tasktable.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [

{
  path: 'addform' , component: AddformComponent
},
{
  path: 'login' , component : LoginComponent
},

{
  path : 'tasktable' , component : TasktableComponent
},

{
  path : 'register' , component : RegistrationComponent
},
{
  path : '' , component : EditComponent
}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
