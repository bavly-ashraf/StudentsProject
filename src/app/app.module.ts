import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './Components/students/students.component';
import { HeaderComponent } from './Components/header/header.component';
import { StudentDetailsComponent } from './Components/student-details/student-details.component';
import { UpdateStudentComponent } from './Components/update-student/update-student.component';
import { AddStudentComponent } from './Components/add-student/add-student.component';
import { ErrorComponent } from './Components/error/error.component';
import { DeleteConfirmComponent } from './Components/delete-confirm/delete-confirm.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    HeaderComponent,
    StudentDetailsComponent,
    UpdateStudentComponent,
    AddStudentComponent,
    ErrorComponent,
    DeleteConfirmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
