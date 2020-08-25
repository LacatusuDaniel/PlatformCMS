import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import { Location } from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";

@Component({
  templateUrl: 'adduser.component.html'
})
export class AdduserComponent implements OnInit{

  userForm:FormGroup;
  public user:any;

  constructor(private _http:HttpClient,
              private route: ActivatedRoute,
              private location: Location,
              private fb: FormBuilder) { }

  ngOnInit(): void {

  this.userForm=this.fb.group({
    username: [""],
    password:[""],
    email: [""],
    role: [""],
    status: [""]
  })

  }

  goBack(): void {
    this.location.back();
  }

  addUser(user:any):any{
    const addUserPayLoad={...this.userForm.value};
    return this._http.post<any>("http://localhost:8080/users/adduser",addUserPayLoad,
      {headers: new HttpHeaders({
          'Content-Type':'application/json'
        })
      }).subscribe(
      result=>this.goBack(),
      error => console.log(error));
  }
}



