import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SServiceService } from 'src/app/Services/sservice.service';

@Component({
  selector: 'app-delete-confirm',
  templateUrl: './delete-confirm.component.html',
  styles: [
  ]
})
export class DeleteConfirmComponent implements OnInit{
  ID:any;
  Student:any
  constructor(public myService:SServiceService, myRoute:ActivatedRoute ){
    this.ID = myRoute.snapshot.params['id']
  }
  ngOnInit() {
    this.myService.GetStudentByID(this.ID).subscribe({next:(data)=>{this.Student = data}, error:(err)=>{console.log(err);
    }})
  }
  deleteStudent(){
    this.myService.DeleteStudent(this.ID).subscribe();
  }
}
