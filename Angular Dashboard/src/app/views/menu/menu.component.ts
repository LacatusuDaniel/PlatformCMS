import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";
import {Location} from "@angular/common";


@Component({
  templateUrl: 'menu.component.html',
  styleUrls: ['menu.component.css']
})
export class MenuComponent implements OnInit{

  public allPages: Object[]=[];
  public usedPages=[];
  menuItems=[];


  constructor(private _http:HttpClient,
              private router:Router,
              private location: Location) { }

  ngOnInit(): void {
    this._http.get("http://localhost:8080/pages/all").subscribe(
      (result)=>this.allPages=Array.from(Object.keys(result),k=>result[k]),
      error => console.log(error)
    );


    this._http.get("http://localhost:8080/ui/menus").subscribe(
      (result:any)=>this.usedPages=result,
      error => console.log(error)
    );
  }


  onDrop(event: CdkDragDrop<Object[],any>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data,
        event.previousIndex, event.currentIndex);

    } else  {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);

    }
  }


    reloadPage() {
      // window.location.replace('http://localhost:4200/#/dashboard');

      window.location.reload();
    }


  save() {
    this.menuItems=[];
    for(let i=0; i<this.usedPages.length;i++){
      const newElem={pageId:this.usedPages[i]["pageId"],orderId:i}
      this.menuItems.push(newElem);
    }
    console.log(this.menuItems);


    return this._http.post<any>("http://localhost:8080/menu/addmenu",this.menuItems,
      {headers: new HttpHeaders({
          'Content-Type':'application/json'
        })
      }).subscribe(
      result=>this.reloadPage(),
      error => console.log(error));

  }

}
