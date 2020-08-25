import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";


@Component({
  templateUrl: 'users.component.html'
})
export class UsersComponent implements OnInit{

  public allUsers:any;

  constructor(private _http:HttpClient,
              private router:Router) { }

  ngOnInit(): void {
    this._http.get("http://localhost:8080/users/all").subscribe(
      result=>this.allUsers=result,
      error => console.log(error));
  }


  gotoPage(pageName: string):void {
      this.router.navigate([ `${pageName}`]);
  }
}
