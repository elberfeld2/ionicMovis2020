import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  cardsData=[{
    title:"Hola equipo",
    subtitle:"El agua esta bien",
    contentText:" Keep close to Nature's heart... and break clear away, once in awhile,and climb a mountain or spend a week in the woods. Wash your spirit clean."
  },{
    title:"Hola equipo",
    subtitle:"El agua esta bien",
    contentText:" Keep close to Nature's heart... and break clear away, once in awhile,and climb a mountain or spend a week in the woods. Wash your spirit clean."
  },{
    title:"Hola equipo",
    subtitle:"El agua esta bien",
    contentText:" Keep close to Nature's heart... and break clear away, once in awhile,and climb a mountain or spend a week in the woods. Wash your spirit clean."
  }]
  constructor(public alertController: AlertController) {}
  onBeerClicked(){
    alert("La quiero no tna fria");
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      subHeader: 'Hola',
      message: 'Mensaje de alerta.',
      buttons: [{
        text: 'Mensaje',
        handler: (blah) => {
          console.log('Mensaje ');
        } },"Salir"]
    });

    await alert.present();
  }
}
