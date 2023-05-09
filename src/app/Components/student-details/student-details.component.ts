import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SServiceService } from 'src/app/Services/sservice.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styles: [
  ]
})
export class StudentDetailsComponent implements OnInit {
  ID:any;
  Student:any;
  constructor(myRoute:ActivatedRoute, public myService:SServiceService){
    this.ID = myRoute.snapshot.params['id'];
  }
  ngOnInit() {
    this.myService.GetStudentByID(this.ID).subscribe({
      next:(data)=>{this.Student = data},
      error:(err)=>{console.log(err)}
    });
  }

}
