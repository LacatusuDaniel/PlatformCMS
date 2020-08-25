import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";


@Component({
  templateUrl: 'pages.component.html'
})
export class PagesComponent implements OnInit{

  public allPages:any;

  constructor(private _http:HttpClient,
              private router:Router) { }

  ngOnInit(): void {
    this._http.get("http://localhost:8080/pages/all").subscribe(
      result=>this.allPages=result,
      error => console.log(error));
  }


  gotoPage(pageName: string):void {
      this.router.navigate([ `${pageName}`]);
  }
}
