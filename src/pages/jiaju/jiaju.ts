import { Component, ViewChild  } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { HomePage } from '../home/home';


@IonicPage()

@Component({
  selector: 'page-jiaju',
  templateUrl: 'jiaju.html',
})
export class JiajuPage {
  home;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.home = HomePage;
  }

  ionViewDidLoad() {
    
  }

}
