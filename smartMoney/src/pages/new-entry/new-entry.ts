import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NewEntryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-entry',
  templateUrl: 'new-entry.html',
})
export class NewEntryPage {
  entry = {
    value: '0,00',
    category: 1
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewEntryPage');
  }

  submitForm(){
    console.log('Add')
    console.log(this.entry)
    this.goBack()
  }
  goBack(){
    console.log('Voltar')
    this.navCtrl.pop()
  }

}
