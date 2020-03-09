import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Http } from '@angular/http';
import { PostProvider } from '../../providers/post-provider';
import { Storage } from '@ionic/Storage';

import { HomePage } from '../home/home';
import { CongratPage } from '../congrat/congrat';

@IonicPage()
@Component({
  selector: 'page-questions',
  templateUrl: 'questions.html',
})
export class QuestionsPage {
  token = '37105c388133e2a6ba04dfa2568307a6';
  EventName : any;
  Question : any;
  NoQuestion : any;
  TotalQuestion : any;
  Answers : any;
  ChooseOption : any;
  ButtonNext : any;
  nomor : any;
  HeaderID : any="";
  QuestionHeaderID : any="";

  constructor(public postPvdr: PostProvider,public navCtrl: NavController,public toastCtrl: ToastController,public http:Http, public storage: Storage, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.getData('1');
    this.ChooseOption = 'A';
  }

  pageHome(){
    this.navCtrl.push(HomePage);
  }

  submit(antrian,totalAntrian){
    
    if(antrian == totalAntrian){
      this.storage.get('HeaderID').then((val1) =>{
        this.HeaderID = val1;

        this.storage.get('QuestionHeaderID').then((val2) =>{
          this.QuestionHeaderID = val2;
            let body = {
              'token' : this.token,
              'action': 'addAnswerEnd',
              'header_id': this.HeaderID,
              'question_header_id': this.QuestionHeaderID,
              'key_answer': this.ChooseOption
            };
            this.postPvdr.postData(body,'read').subscribe((res) => {
              if(res.response == 200 && res.message == 'success'){
                this.navCtrl.push(CongratPage,res.data);
              }else{
                this.presentToast('Failed, Try again.');        
              }
            }, error => {
              this.presentToast("Connection Failed, Try again.");
            });
        });

      });
    }else{
      this.storage.get('HeaderID').then((val1) =>{
        this.HeaderID = val1;

        this.storage.get('QuestionHeaderID').then((val2) =>{
          this.QuestionHeaderID = val2;
            let body = {
              'token' : this.token,
              'action': 'addAnswer',
              'header_id': this.HeaderID,
              'question_header_id': this.QuestionHeaderID,
              'key_answer': this.ChooseOption
            };
            this.postPvdr.postData(body,'read').subscribe((res) => {
              if(res.response == 200 && res.message == 'success'){
                this.nomor = parseInt(antrian) +1; 
                this.getData(this.nomor);
              }else{
                this.presentToast("Connection Failed, Try again.");
              }
            }, error => {
              this.presentToast("Connection Failed, Try again.");
            });
        });

      });
    }
  }

  getData(antrian){
    let body =  {  
                  'token'  : this.token,
                  'action' : 'getQuestion',
                  'antrian': antrian
                };
    this.postPvdr.postData(body, 'read').subscribe((res) => {
      
      if(res.response == 200 && res.message == 'success'){
          this.storage.set('QuestionHeaderID',res.data.QuestionHeader[0]['question_header_id']);
          
          this.EventName = res.data.EventName;
          this.TotalQuestion = res.data.QuestionTotal;
          this.NoQuestion = res.data.QuestionHeader[0]['antrian'];
          
          this.Question = res.data.QuestionHeader[0]['question'];
          this.ButtonNext = (res.data.QuestionHeader[0]['antrian'] == res.data.QuestionTotal) ? 'SUBMIT' : 'NEXT';
          this.Answers = [];
          for (let i = 0; i < res.data.QuestionDetail.length; i++){
            this.Answers.push({
              KeyAnswer : res.data.QuestionDetail[i]['key_answer'],
              DescriptionAnswer : res.data.QuestionDetail[i]['description_answer']
            });
          } 
      }else{
        this.presentToast('Failed');
      }
    }, error => {
      this.presentToast("Connection Failed, Try again.");
    });
  }
   
  getChooseOption(option){
    this.ChooseOption = option;
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
