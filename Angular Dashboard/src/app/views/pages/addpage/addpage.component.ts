import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Location } from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";

@Component({
  templateUrl: 'addpage.component.html',
  styleUrls: ['addpage.component.css']
})
export class AddpageComponent implements OnInit{
  public allTemplates:any;
  pageForm:FormGroup;


  constructor(private _http:HttpClient,
              private route: ActivatedRoute,
              private location: Location,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this._http.get("http://localhost:8080/templates/all").subscribe(
      result=>this.allTemplates=result,
      error => console.log(error));

  this.pageForm=this.fb.group({
      pageTitle: [null,Validators.required],
      pageContent: [null, Validators.required],
      templateId: [""],
      createdBy: [""],
      createdDateAndTime: [""]
  })
  }


  goBack(): void {
    this.location.back();
  }

  addPage():any{
    const addPagePayLoad={...this.pageForm.value,"userId": 23, "pageUrl":this.pageForm.value.pageTitle};
    return this._http.post<any>("http://localhost:8080/pages/addpages",addPagePayLoad,
      {headers: new HttpHeaders({
          'Content-Type':'application/json'
        })
      }).subscribe(
      result=>this.goBack(),
      error => console.log(error));
  }


  changeValue(event) {
    const newVal=event.target.value;
    this.pageForm.patchValue({templateId:newVal});

  }
}



