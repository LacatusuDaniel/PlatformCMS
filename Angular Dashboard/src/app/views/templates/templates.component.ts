import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";


@Component({
  templateUrl: 'templates.component.html'
})
export class TemplatesComponent implements OnInit{

  public allTemplates:any;

  constructor(private _http:HttpClient,
              private router:Router) { }

  ngOnInit(): void {
    this._http.get("http://localhost:8080/templates/all").subscribe(
      result=>this.allTemplates=result,
      error => console.log(error));
  }


  gotoPage(templateName: string) {
    this.router.navigate([ `${templateName}`]);
  }
}
