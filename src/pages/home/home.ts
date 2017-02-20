import { Component } from '@angular/core';

import { NavController, AlertController } from 'ionic-angular';

import {AngularFire, FirebaseListObservable} from 'angularfire2';

//reference to details page
import { DetailsPage } from '../details/details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //properties
  todos: FirebaseListObservable<any>;

  //constructor
  constructor(public navCtrl: NavController, public alertCtrl: AlertController, af: AngularFire) {
    this.todos = af.database.list('/todos');
  }

  //methods
  addTodo(){
    this.navCtrl.push(DetailsPage);
  }

}
