import { ModalController } from '@ionic/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html'
})
export class ModalPage {

  constructor(
    private modalCtrl: ModalController
  ) { }

  public closeModal() {
    this.modalCtrl.dismiss();
  }
}
