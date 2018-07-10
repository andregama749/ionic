import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  texto:String = null;


  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  mostrar(){
    const alert = this.alertCtrl.create({
      title: 'Boas vindas',
      subTitle: "Olá " + this.texto,
      buttons: ['OK']
    });
    alert.present();
  }

}
