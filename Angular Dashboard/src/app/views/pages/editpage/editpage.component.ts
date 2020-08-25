import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Location } from '@angular/common';
import {TemplatesComponent} from "../../templates/templates.component";


@Component({
  templateUrl: 'editpage.component.html'
})
export class EditpageComponent implements OnInit{

  public allTemplates:any;
  pageForm:FormGroup;
  public id;
  public page:any;

  constructor(private _http:HttpClient,
              private route: ActivatedRoute,
              private location: Location,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('pageId');

    this._http.get("http://localhost:8080/templates/all").subscribe(
      result=>this.allTemplates=result,
      error => console.log(error));

    this._http.get("http://localhost:8080/pages/"+this.id).subscribe(
      result=>{
        this.page=result;
        this.pageForm.patchValue({
          pageTitle:this.page.pageTitle,
          pageContent: this.page.pageContent,
          pageTemplate:this.page.templateId,
          createdBy: this.page?.users?.username,
          createdDateAndTime: this.page.createdDateAndTime
        }
        )
      }
        ,error => console.log(error));

  this.pageForm=this.fb.group({
      pageTitle: [""],
      pageContent: [""],
      pageTemplate: [""],
      createdBy: [""],
      createdDateAndTime: [""]
  })
  }

  goBack(): void {
    this.location.back();
  }



  updatePage():any{
    const updatePayLoad={...this.page,...this.pageForm.value};
    return this._http.put("http://localhost:8080/pages/"+this.id,updatePayLoad,
      {headers: new HttpHeaders({
          'Content-Type':'application/json'
        })
      }).subscribe(
      result=>this.goBack(),
      error => console.log(error));
  }

  changeValue(event) {
    const newVal=event.target.value;
    this.pageForm.patchValue({pageTemplate:newVal});
    this.page.templateId=newVal;
    console.log(newVal);
  }

  deletePage():any{
    return this._http.delete("http://localhost:8080/pages/"+this.id).subscribe(
      result=>this.goBack(),
      error => console.log(error));
  }
}



