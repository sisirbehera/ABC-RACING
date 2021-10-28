import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '@app/home/userdata.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

export interface Person {
  name: string;
  description: string;
  company: string;
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})

export class ModalComponent implements OnInit {

  @Input() public user: any;
  @Output() passEntry: EventEmitter<any> = new EventEmitter();

  constructor(public activeModal: NgbActiveModal) {

  }

  ngOnInit(): void {
  }

  passBack() {
    this.passEntry.emit(this.user);
    this.activeModal.close(this.user);
  }
}
