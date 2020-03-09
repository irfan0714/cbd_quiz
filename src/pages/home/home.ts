import { Component } from '@angular/core';
import { NavController, ActionSheetController, AlertController   } from 'ionic-angular';
import { BiodataPage } from '../biodata/biodata';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  public press: number = 0;
  constructor(public navCtrl: NavController, public actionSheetCtrl: ActionSheetController, public alertCtrl: AlertController) {
  }
  
  pageBiodata(){
    this.navCtrl.push(BiodataPage);
  }

  pressEvent(e){
    this.press++;
    
    if(this.press == 5){
         
        this.showPrompt();

        this.press =0;
    }
  }

  showPrompt() {
    const prompt = this.alertCtrl.create({
      title: 'Admin',
      inputs: [
        {
          name: 'Password',
          type : 'password',
          placeholder: 'Password'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Login',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }

  adminMenu(){
    const actionSheet = this.actionSheetCtrl.create({
      title: 'Menu Admin',
      buttons: [
        {
          text: 'Destructive',
          role: 'destructive',
          handler: () => {
            this.navCtrl.push(BiodataPage);
          }
        },{
          text: 'Archive',
          handler: () => {
            console.log('Archive clicked');
          }
        },{
          text: 'Close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }



}
 