import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-hero-carousel',
  templateUrl: './hero-carousel.component.html',
  styleUrls: ['./hero-carousel.component.scss'],
  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers
})
export class HeroCarouselComponent implements OnInit {

  showNavigationArrows = false;
  showNavigationIndicators = false;

  eventList = [
    {
      event:' Event 1',
      eventLocation:'Bangalore',
      eventDescription:'In bangalore, first event is going to happen. Please be careful about it',
      img: 'assets/images/carousel-1.png',
    },
    {
      event:' Event 2',
      eventLocation:'New York',
      eventDescription:'NewYork sits on top of event hosting',
      img: 'assets/images/carousel-2.png',
    },
    {
      event:' Event 3',
      eventLocation:'Berlin',
      eventDescription: 'Berlin is best place to hang on',
      img: 'assets/images/carousel-3.png',
    },
    {
      event:' Event 4',
      eventLocation:'Barcelona',
      eventDescription:'Barcelona is another good hosting city',
      img: 'assets/images/carousel-4.png',
    },
  ]


  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
    config.pauseOnHover = true;
  }

  ngOnInit(): void {
  }

}
