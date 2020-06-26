import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../shared/services/data.service';
import { ToastController, IonList, ModalController } from '@ionic/angular';
import { RegisterComponent } from './register/register.component';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {

  @ViewChild('lista') lista: IonList;
  category: any = [];

  constructor(
    private data: DataService,
    private toastCtrl: ToastController,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.data.getDemo().subscribe(res => this.category = res[0].category);
  }

  async presentToast( message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000
    });
    toast.present();
  }

  async add(id?: string) {
    const modal = await this.modalCtrl.create({
      component: RegisterComponent,
      componentProps: { id }
    });
    modal.present();
  }

  favorite( user ) {
    // console.log('favorite', user);
    this.presentToast('Guardó en favoritos');
    this.lista.closeSlidingItems();
  }

  share( user ) {
    this.presentToast('Compartido!');
    this.lista.closeSlidingItems();
  }

  borrar( user ) {
    this.presentToast('Borrado!');
    this.lista.closeSlidingItems();
  }
}
