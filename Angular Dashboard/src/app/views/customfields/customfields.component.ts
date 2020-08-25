import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  templateUrl: 'customfields.component.html'
})
export class CustomfieldsComponent implements OnInit{

  public allCustomFields:any;
  public id;

  constructor(private _http:HttpClient,
              private route: ActivatedRoute,
              private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('groupId');

    this._http.get("http://localhost:8080/customfields/group/"+this.id).subscribe(
      result=>this.allCustomFields=result,
      error => console.log(error));
  }




  gotoPage(pageName: string):void {
      this.router.navigate([ `${pageName}`]);
  }
}
