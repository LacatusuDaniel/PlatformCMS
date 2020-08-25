import { AfterViewInit, Component, ChangeDetectionStrategy, ChangeDetectorRef, OnInit, Input } from '@angular/core';
import { NguCarousel, NguCarouselConfig } from '@ngu/carousel';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BottomSheetShareComponent } from '../../../shared/components/bottom-sheet-share/bottom-sheet-share.component';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-portfolio-carousel',
  templateUrl: './portfolio-carousel.component.html',
  styleUrls: ['./portfolio-carousel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PortfolioCarouselComponent implements OnInit {
  @Input('backgroundGray') public backgroundGray;

  public pages: any;
  public carouselOptions: NguCarouselConfig;
  public portfolios = [{
    photo: 'assets/images/img_mountains_wide.jpg',
    text: `Adipisci quas repellat sed. Quasi quaerat aut nam possimus 
    vitae dignissimos, sapiente est atque tenetur`,
    title: 'Project One',
  }, {
    photo: 'assets/images/img_nature_wide.jpg',
    text: `Adipisci quas repellat sed. Quasi quaerat aut nam possimus 
    vitae dignissimos, sapiente est atque tenetur`,
    title: 'Project Two',
  }, {
    photo: 'assets/images/img_snow_wide.jpg',
    text: `Adipisci quas repellat sed. Quasi quaerat aut nam possimus 
    vitae dignissimos, sapiente est atque tenetur`,
    title: 'Project Three',
  }
  // , {
  //   photo: 'assets/images/sq-13.jpg',
  //   text: `Adipisci quas repellat sed. Quasi quaerat aut nam possimus
  //   vitae dignissimos, sapiente est atque tenetur`,
  //   title: 'Project Four',
  // }, {
  //   photo: 'assets/images/sq-15.jpg',
  //   text: `Adipisci quas repellat sed. Quasi quaerat aut nam possimus
  //   vitae dignissimos, sapiente est atque tenetur`,
  //   title: 'Project Five',
  // }, {
  //   photo: 'assets/images/sq-16.jpg',
  //   text: `Adipisci quas repellat sed. Quasi quaerat aut nam possimus
  //   vitae dignissimos, sapiente est atque tenetur`,
  //   title: 'Project Six',
  // }
  ]

  constructor(private bottomSheet: MatBottomSheet, private _cdr: ChangeDetectorRef, private _http: HttpClient) {
  };

  openShareComponent(): void {
    this.bottomSheet.open(BottomSheetShareComponent);
  }

  ngOnInit() {
    this.carouselOptions = {
      grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
      slide: 2,
      speed: 400,
      interval: {timing: 4000},
      point: {
        visible: true
      },
      load: 2,
      touch: true,
      loop: true
    };


  }

  ngAfterViewInit() {
    this._cdr.detectChanges();
  }

}
