import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home-three',
  template: `<div class="landing">
  <app-header></app-header>
  <app-intro-three></app-intro-three>
  <app-service3 backgroundGray="true"></app-service3>
  <app-footer></app-footer>
  </div>`
})
export class HomeThreeComponent implements OnInit, OnDestroy {
  constructor(
  ) { }

  ngOnInit() {
  }
  ngOnDestroy() {
  }
}
