import { Component, OnInit, HostListener, HostBinding, Inject, Input } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { WINDOW_PROVIDERS, WINDOW } from '../../../shared/helpers/window.helper';
import { TokenStorageService} from '../_services/token-storage.service';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.scss']
})
export class HeaderAdminComponent implements OnInit {

  public usedPages: Object[]= [];
  isFixed;
  constructor(private _http: HttpClient,
    @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window: Window,
    private tokenStorageService: TokenStorageService
  ) { }

  ngOnInit() {
    this._http.get('http://localhost:8080/ui/menus').subscribe(
      (result) => this.usedPages = Array.from(Object.keys(result), k => result[k]),
      error => console.log(error)
    );
  }
  @HostListener("window:scroll", [])
  onWindowScroll() {
    const offset = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
    if(offset > 10) {
      this.isFixed = true
    } else {
      this.isFixed = false;
    }
  }

  @HostBinding("class.menu-opened") menuOpened = false;

  toggleMenu() {
    this.menuOpened = !this.menuOpened
  }

  scroll(id) {
    console.log(`scrolling to ${id}`);
    let el = document.getElementById(id);
    el.scrollIntoView();
  }



}
