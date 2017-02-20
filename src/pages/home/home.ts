//home.ts
//Josh Mangoff
//200284512
//This app uses CRUD for a todo list

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

  //For adding a Todo item
  addTodo(){
    this.navCtrl.push(DetailsPage);
  }

  //For editing a Todo item
  editTodo(){

  }

  //For changing the checkbox value
  checkTodo(){

  }

  //For deleting a Todo item
  deleteTodo(todo){
    this.todos.remove(todo);
  }

}
