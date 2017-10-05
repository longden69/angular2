import {Component, ViewEncapsulation} from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-customclass',
  templateUrl: './modal-customclass.html',
  encapsulation: ViewEncapsulation.None
})
export class ModalCustomclassComponent {
  closeResult: string;

  constructor(private modalService: NgbModal) {}

  open(content) {
    console.log('kaka');
    this.modalService.open(content, { windowClass: 'dark-modal' });
  }
}
