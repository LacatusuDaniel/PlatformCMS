import {Component, OnInit} from '@angular/core';
import { navItems } from '../../_nav';
import {TokenStorageService} from "../../views/_services/token-storage.service";
import {EdituserComponent} from "../../views/users/edituser/edituser.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.css']

})
export class DefaultLayoutComponent implements OnInit{
  public sidebarMinimized = false;
  public navItems = navItems;
  isLoggedIn = false;
  private username: string;
  // roles: string[] = [];


  constructor(private tokenStorageService: TokenStorageService,
              private router:Router,
              private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    this.username=this.tokenStorage.getUsername();
  }

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

  logout(pageName: string) {
    this.tokenStorageService.signOut();
    this.router.navigate([ `${pageName}`]);
    // window.location.replace("http://localhost:4200/#/login");
  }

  goTo(pageName: string) {
   // this.router.navigate([ `${pageName}`]);
    window.location.replace("http://localhost:4200/#/login");
  }




}
