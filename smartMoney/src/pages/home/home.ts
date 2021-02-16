import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewEntryPage } from '../new-entry/new-entry';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  addEntry(){
    console.log('Adicionar lançamento')
    this.navCtrl.push(NewEntryPage);
  }

}
