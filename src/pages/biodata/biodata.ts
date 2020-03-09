import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController   } from 'ionic-angular';
import { Http } from '@angular/http';
import { PostProvider } from '../../providers/post-provider';
import { Storage } from '@ionic/Storage';

import { HomePage } from '../home/home';
import { QuestionsPage } from '../questions/questions';

@IonicPage()
@Component({
  selector: 'page-biodata',
  templateUrl: 'biodata.html',
})
export class BiodataPage {
  token = '37105c388133e2a6ba04dfa2568307a6';
  EventName : any;
  nama : any='';
  no_telp : any='';
  loader :any;
  constructor(public postPvdr: PostProvider,public navCtrl: NavController,public toastCtrl: ToastController,public http:Http, public storage: Storage, public loadingCtrl: LoadingController, public navParams: NavParams) {
  }

  async presentLoading() {
    this.loader = await this.loadingCtrl.create({
      content: "",
    });
    return await this.loader.present();
  }

  ionViewDidLoad() {
    this.presentLoading();
    
    let body =  {  
                  'token': this.token,
                  'action': 'getEventOn'
                };
    this.postPvdr.postData(body, 'read').subscribe((res) => {
      
      if(res.response == 200 && res.message == 'success'){
        this.storage.set('EventID',res.data.EventID); 
        this.EventName = res.data.EventName;
      }else{
      this.presentToast('Failed');
      }
      this.loader.dismiss();
    }, error => {
      this.presentToast("Connection Failed, Try again.");
      this.navCtrl.push(HomePage);
      this.loader.dismiss();
    });
  }

  pageHome(){
    this.navCtrl.push(HomePage);
  }

  submit(){ 
    
    if(this.nama == ''){
      this.presentToast('Silahkan isi nama !');
    }else if (this.no_telp == ''){
      this.presentToast('Silahkan isi No. Telepon !');
    }else{
      this.presentLoading();
      this.storage.get('EventID').then((res) => {
        let body =  {  
                      'token': this.token,
                      'action': 'addParticipant',
                      'nama': this.nama,
                      'no_telp': this.no_telp,
                      'event_id':res
                    };

        this.postPvdr.postData(body, 'read').subscribe((res) => {
          if(res.response == 200 && res.message == 'success'){
            this.storage.set('HeaderID',res.data.HeaderID); 
            this.navCtrl.push(QuestionsPage);
          }else{
            this.presentToast('Failed');
          }
          this.loader.dismiss();
        }, error => {
          this.presentToast("Connection Failed, Try again.");
          this.loader.dismiss();
        });
      });
      
    }
    
  }
   
  presentToast(message) {
    const toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }

  

}
