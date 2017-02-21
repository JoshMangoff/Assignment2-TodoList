//details.ts
//Josh Mangoff
//200284512
//This app uses CRUD for a todo list

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-details',
  templateUrl: 'details.html'
})
export class DetailsPage {
  //properties
  todo: any;
  todos: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, af: AngularFire) {
    //add empty variable
    this.todo = {};
    //connect to database
    this.todos = af.database.list('/todos');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

  addTodo(){
    //add to database and redirect
    this.todo.completed = false;
    this.todos.push(this.todo);
    this.navCtrl.push(HomePage);
  }

}
