import { Component, OnInit } from '@angular/core';
import { SServiceService } from 'src/app/Services/sservice.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styles: [
  ]
})
export class StudentsComponent implements OnInit {
  constructor(public sService:SServiceService){}
  students:any;
  ngOnInit() {
    this.sService.GetAllStudents().subscribe({
      next:(data)=>{this.students = data},
      error:(err)=>{console.log(err);},
      // complete:()=>{alert('Data Fetched successfully!!')}
    })
  }
}
