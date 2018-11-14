import { Component, ViewChild  } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { jiajuPage} from '../jiaju/jiaju';
import { AboutPage } from '../about/about'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // @ViewChild('ac') ac;
  icons:string="camera";
  items = [];
  jiaju;
  constructor(public http:HttpClient,public navCtrl: NavController) {
    for (let i = 0; i < 30; i++) {
      this.items.push( this.items.length );
    }
    this.jiaju = jiajuPage;
  }
  goSub(){
    this.navCtrl.push('APage',{id:1});
  }
  ionViewDidLoad(){
 
  }
  // 上拉加载
  doInfinite(infiniteScroll){

  }
  // 下拉刷新
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }
  pushjiaju(){
    
    this.navCtrl2.push(AboutPage);
  }
}
