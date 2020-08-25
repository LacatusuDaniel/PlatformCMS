import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";


@Component({
  templateUrl: 'customfieldsgroup.component.html'
})
export class CustomfieldsgroupComponent implements OnInit{

  public allCustomFieldsGroup:any;

  constructor(private _http:HttpClient,
              private router:Router) { }

  ngOnInit(): void {
    this._http.get("http://localhost:8080/customfieldsgroup/all").subscribe(
      result=>this.allCustomFieldsGroup=result,
      error => console.log(error));
  }



  gotoPage(pageName: string):void {
      this.router.navigate([ `${pageName}`]);
  }
}
