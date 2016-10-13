import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Hej } from '../hej/hej';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }

  itemTapped() {
      this.navCtrl.push(Hej, {
    });
    
}

  public greeting(){
    alert("hej");
  }
  

}
