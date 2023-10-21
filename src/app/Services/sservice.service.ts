import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SServiceService {
private readonly baseUrl = 'https://my-json-server.typicode.com/bavly-ashraf/StudentsProject/students';
  constructor(private myClient:HttpClient) { }
  GetAllStudents(){
    return this.myClient.get(this.baseUrl);
  }
  GetStudentByID(id:number){
    return this.myClient.get(this.baseUrl+'/'+id);
  }
  AddNewStudent(body:any){
    return this.myClient.post(this.baseUrl,body);
  }
  UpdateStudent(id:number, body:any){
    return this.myClient.put(this.baseUrl+"/"+id, body);
  }
  DeleteStudent(id:number){
    return this.myClient.delete(this.baseUrl+"/"+id);
  }
}
