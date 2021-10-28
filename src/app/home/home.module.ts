import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { SharedModule } from '@shared';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { Angulartics2Module } from 'angulartics2';
import { MarketingComponent } from './marketing/marketing.component';
import { FeaturesComponent } from './features/features.component';
import { HeroCarouselComponent } from './hero-carousel/hero-carousel.component';
import { ModalComponent } from './ui-components/modal/modal.component';


@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    SharedModule,
    Angulartics2Module,
    HomeRoutingModule,
    NgbModule
  ],
  declarations: [
    HomeComponent,
    MarketingComponent,
    FeaturesComponent,
    HeroCarouselComponent,
    ModalComponent
  ]
})
export class HomeModule { }
