import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SServiceService } from 'src/app/Services/sservice.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styles: [
  ]
})
export class UpdateStudentComponent implements OnInit {
  ID:any;
  Student:any;
  constructor(public myService:SServiceService,myRoute:ActivatedRoute,public route:Router){
    this.ID = myRoute.snapshot.params['id'];
  }
  ngOnInit() {
    this.myService.GetStudentByID(this.ID).subscribe({next:(data)=>{this.Student = data},error:(err)=>{console.log(err)}});

  }
  myValid = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
    email: new FormControl('',[Validators.required,Validators.pattern(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/)]),
    address: new FormControl('',Validators.required),
    phone: new FormControl('',[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]),
    grade: new FormControl('',[Validators.required,Validators.pattern(/[A-B-C-D-F]{1}/)])
   });

   nameChk(){
    return this.myValid.controls.name.valid;
   };
   emailChk(){
    return this.myValid.controls.email.valid;
   };
   addressChk(){
    return this.myValid.controls.address.valid;
   };
   phoneChk(){
    return this.myValid.controls.phone.valid;
   };
   gradeChk(){
    return this.myValid.controls.grade.valid;
   };

   Update(){
    if(this.myValid.valid){
      this.myService.UpdateStudent(this.ID,this.myValid.value).subscribe();
      alert('Student Updated Successfully!!');
      this.route.navigateByUrl('/students');
    }
   }
}
