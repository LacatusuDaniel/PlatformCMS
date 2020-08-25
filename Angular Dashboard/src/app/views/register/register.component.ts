import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm} from "@angular/forms";
import { Location } from '@angular/common';
import {ErrorStateMatcher} from "@angular/material/core";

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

    return (invalidCtrl || invalidParent);
  }
}

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})
export class RegisterComponent {

  userForm:FormGroup;
  public user:any;
  matcher = new MyErrorStateMatcher();

  constructor(private _http:HttpClient,
              private route: ActivatedRoute,
              private location: Location,
              private fb: FormBuilder) { }

  ngOnInit(): void {

    this.userForm=this.fb.group({
      username: [""],
      password:[""],
      email: [""],
      confirmPassword: ['']
    }, { validator: this.checkPasswords })
  }

  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    let pass = group.controls.password.value;
    let confirmPass = group.controls.confirmPassword.value;

    return pass === confirmPass ? null : { notSame: true }
  }

  goBack(): void {
    this.location.back();
  }

  addUser(user:any):any{
    const addUserPayLoad={...this.userForm.value};
    return this._http.post<any>("http://localhost:8080/api/auth/signup",addUserPayLoad,
      {headers: new HttpHeaders({
          'Content-Type':'application/json'
        })
      }).subscribe(
      result=>this.goBack(),
      error => console.log(error));
  }
}
