import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-congrat',
  templateUrl: 'congrat.html',
})
export class CongratPage {
  Score : any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.Score = navParams.get('Score');
  }

  ionViewDidLoad() {
    console.log(this.Score);
  }

  close(){
    this.navCtrl.push(HomePage);
  }

}
