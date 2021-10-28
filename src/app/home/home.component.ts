import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { finalize } from 'rxjs/operators';

import { QuoteService } from './quote.service';
import { ModalComponent, Person } from './ui-components/modal/modal.component';
import { UserDataService } from './userdata.service';

export interface User {
  id?: number;
  name?: string;
  username?: string;
  email?: string;
  address?: Address;
  phone?: string;
  website?: string;
  company?: Company;
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
  isLoading = false;
  users$: any;
  public user: User | undefined;

  constructor(private userDataService: UserDataService, public modalService: NgbModal) { }

  ngOnInit() {
    this.isLoading = true;
      this.userDataService.getUsers().subscribe(
        (data: any) => {
          this.users$ = data;
          console.log('this.users$', this.users$);
          this.isLoading = false;
        }
      );
  }

  openModal(data: any) {
    // alert(data);
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.user = data;
    modalRef.result.then((result) => {
      if (result) {
        console.log(result);
      }
    });
  }
}
