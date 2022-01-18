import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {




  constructor() {
    
   }

  ngOnInit(): void {
  }

  Items = [
    { description : 'promener le chien'},
    { description : 'nourrir le chien'},
    { description : 'nettoyer le chien'}     
  ];


  get items() {
      return this.Items;
  }

  addItem(value: string) {
    if(value === "") {
      alert("Please enter a description")
    } else {
      this.Items.unshift({
        description : value,
      })
    }
  }

  removeItem(item: any) {
    this.Items.splice(this.Items.indexOf(item), 1);
  }
  


  editTask(item: any){
    let index = this.Items.indexOf(item);
    let title = this.Items[index].description;
    let result = prompt("Edit Task :", title);
    if (result !== null && result !== ""){
      this.Items[index].description = result;
    }
  }


}
