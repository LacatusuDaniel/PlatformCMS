import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import { Location } from '@angular/common';



@Component({
  templateUrl: 'addtemplate.component.html'
})
export class AddtemplateComponent implements OnInit{

  templateForm : FormGroup;
  public template:any;


  constructor(private _http:HttpClient,
              private route: ActivatedRoute,
              private location: Location,
              private fb: FormBuilder) { }

  ngOnInit(): void {


    this.templateForm=this.fb.group({
      templateName: [""],
      templateContent: [""],
      userId: [""],
    })
  }

  goBack(): void {
    this.location.back();
  }


  addTemplate(template: any):any{
    const addTemplatePayLoad={...this.templateForm.value,"userId": 2};
    return this._http.post<any>("http://localhost:8080/templates/addtemplate",addTemplatePayLoad,
      {headers: new HttpHeaders({
          'Content-Type':'application/json'
        })
      }).subscribe(
      result=>this.goBack(),
      error => console.log(error));
  }



}
