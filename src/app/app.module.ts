import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { ActionSheetController } from 'ionic-angular';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { PostProvider } from '../providers/post-provider';
import { IonicStorageModule } from '@ionic/Storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { BiodataPage } from '../pages/biodata/biodata';
import { QuestionsPage } from '../pages/questions/questions';
import { CongratPage } from '../pages/congrat/congrat';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BiodataPage,
    QuestionsPage,
    CongratPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BiodataPage,
    QuestionsPage,
    CongratPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PostProvider
  ]
})
export class AppModule {}
