import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
    private modalCtrl: ModalController
  ) { }

  public async openModal() {
    await (await this.modalCtrl.create({
      component: ModalPage,
      cssClass: 'modal-60'
    })).present();
  }
}
