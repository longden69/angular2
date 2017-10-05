import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

export interface Language {
  language: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements Language {
  @ViewChild('content') content: any;
  closeResult: string;
  language = '';
  title = 'app';
  userData: string[];
  lang = 'en';
  slLang: Language;
  param = { value: 'Hello world !' };

  constructor(private translate: TranslateService, private modalService: NgbModal) {
    translate.setDefaultLang(this.lang);
    translate.use(this.lang);
    this.slLang = {
      language: 'en'
    };
  }

  onSwitchLang(val) {
    this.lang = val.lang;
    this.translate.use(this.lang);
    this.open(this.content);
  }

  onEmitData(data) {
    this.userData = data;
  }

  open(content) {
    setTimeout(() => {
      this.modalService.open(content).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }, 0);
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
