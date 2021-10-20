import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { QuoteService } from './quote.service';
import { UserDataService } from './userdata.service';

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}


export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Geo {
  lat: number;
  lng: number;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  users$ = [];
  isLoading = false;

  constructor(private userDataService: UserDataService) { }

  ngOnInit() {
    this.isLoading = true;
    this.userDataService.getUsers()
      .pipe(finalize(() => { this.isLoading = false; }))
      .subscribe((data: any) => { this.users$ = data; });
  }

}
