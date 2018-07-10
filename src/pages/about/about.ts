import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  number1:number;
  number2:number;
  result:number;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  somar(){
    this.result = Number(this.number1) + Number(this.number2);
    // ou  this.result = +(this.number1) + +(this.number2);
    this.mostrar();
  }

  subtrair(){
    this.result = Number(this.number1) - Number(this.number2);
    // ou  this.result = +(this.number1) - +(this.number2);
    this.mostrar();
  }

  multiplicar(){
    this.result = Number(this.number1) * Number(this.number2);
    // ou  this.result = +(this.number1) * +(this.number2);
    this.mostrar();
  }

  dividir(){
    this.result = Number(this.number1) / Number(this.number2);
    // ou  this.result = +(this.number1) / +(this.number2);
    this.mostrar();
  }

  mostrar(){
    const alert = this.alertCtrl.create({
      title: 'Calculadora',
      subTitle: "Resultado: " + this.result,
      buttons: ['OK']
    });
    alert.present();
  }

}
