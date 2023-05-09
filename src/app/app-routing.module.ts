import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './Components/students/students.component';
import { StudentDetailsComponent } from './Components/student-details/student-details.component';
import { UpdateStudentComponent } from './Components/update-student/update-student.component';
import { AddStudentComponent } from './Components/add-student/add-student.component';
import { ErrorComponent } from './Components/error/error.component';
import { DeleteConfirmComponent } from './Components/delete-confirm/delete-confirm.component';

const routes: Routes = [{path:'', redirectTo:'students',pathMatch:"full"},
                        {path:'students',component:StudentsComponent},
                        {path:'students/:id',component:StudentDetailsComponent},
                        {path:'update/:id',component:UpdateStudentComponent},
                        {path:'add',component:AddStudentComponent},
                        {path:'delete/:id',component:DeleteConfirmComponent},
                        {path:'**',component:ErrorComponent}
                        ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
