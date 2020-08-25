import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import { Location } from '@angular/common';
import {AuthService} from "../../_services/auth.service";
import {TokenStorageService} from "../../_services/token-storage.service";


@Component({
  templateUrl: 'edituser.component.html'
})
export class EdituserComponent implements OnInit{

  roles: string[] = [];
  userForm:FormGroup;
  public id;
  public user:any;


  constructor(private _http:HttpClient,
              private route: ActivatedRoute,
              private location: Location,
              private fb: FormBuilder,
              private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('userId');
    this.roles = this.tokenStorage.getAuthorities();

    this._http.get("http://localhost:8080/users/"+this.id).subscribe(
      result=>{
        this.user=result;
        this.userForm.patchValue({
          username:this.user.username,
          password:this.user.password,
          email: this.user.email,
          role:this.user?.roles[0]?.name,
          status: this.user.status,
        }
        )
      }
        ,error => console.log(error));

  this.userForm=this.fb.group({
      username: [""],
      password:[""],
      email: [""],
      role: [""],
      status: [""],
  })
  }

  goBack(): void {
    this.location.back();
  }


  updateUser(user: any):any{
    const updatePayLoad={...this.user,...this.userForm.value};
    return this._http.put("http://localhost:8080/users/"+this.id,updatePayLoad,
      {headers: new HttpHeaders({
          'Content-Type':'application/json'
        })
      }).subscribe(
      result=>this.goBack(),
      error => console.log(error));
  }

  deleteUser():any{
    return this._http.delete("http://localhost:8080/users/"+this.id).subscribe(
      result=>this.goBack(),
      error => console.log(error));
  }

}



