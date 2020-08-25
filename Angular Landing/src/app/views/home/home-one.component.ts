import { Component, OnInit, OnDestroy } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-home-one',
  templateUrl: './home-one.component.html'
})
export class HomeOneComponent implements OnInit, OnDestroy {
  public allPages: any;


  constructor(private _http: HttpClient,  private route: ActivatedRoute  ) { }

  ngOnInit() {
    this._http.get('http://localhost:8080/menus/all').subscribe(
      result => this.allPages = result,
      error => console.log(error));



  }

  ngOnDestroy() {
  }

}
