import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-advertisement',
  templateUrl: './advertisement.component.html',
  styleUrls: ['./advertisement.component.css'],
  providers: [NgbCarouselConfig]
})
export class AdvertisementComponent implements OnInit {

  images = ['Imax', 'cinema-advertising', 'vantagens'].map((n) => `../../../assets/advert/${n}.jpg`);

  constructor(config: NgbCarouselConfig) {
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }

  ngOnInit(): void {
  }

}
