import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Student } from './models/student';
import { StudentComponent } from './student/student.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {path:'',component:StudentComponent},
  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
