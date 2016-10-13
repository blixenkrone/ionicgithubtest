import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Hej page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation. Test
*/
@Component({
  selector: 'page-hej',
  templateUrl: 'hej.html'
})
export class Hej {

  constructor(public navCtrl: NavController) {

      

  }

  ionViewDidLoad() {
    console.log('Hello Hej Page');
  }

}
