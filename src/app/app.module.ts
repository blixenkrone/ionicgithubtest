import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Hej } from '../pages/hej/hej';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Hej
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Hej
  ],
  providers: []
})
export class AppModule {}
