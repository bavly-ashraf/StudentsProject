import { Component } from '@angular/core';
import { FormControl, Validators , FormGroup } from '@angular/forms';
import { SServiceService } from 'src/app/Services/sservice.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styles: [
  ]
})
export class AddStudentComponent {
  constructor(public sService:SServiceService){}
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

 Add(){
  if(this.myValid.valid){
    this.sService.AddNewStudent(this.myValid.value).subscribe();
    alert('Student Added Successfully!!');
    this.myValid.controls.name.setValue('');
    this.myValid.controls.email.setValue('');
    this.myValid.controls.address.setValue('');
    this.myValid.controls.phone.setValue('');
    this.myValid.controls.grade.setValue('');
  }
 }
}
