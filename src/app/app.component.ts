import { Component } from '@angular/core';
import { Model, ToDoItem } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TaskManager';

  id: any = "daily";

  model = new Model();
  isDisplayDaily = false;
  isDisplayWeekly = false;
  isDisplayMonthly = false;

  getItemsDaily() {
    if (this.isDisplayDaily)
      return this.model.items
    return this.model.items.filter((item: { action: any; }) => !item.action);
  }

  getItemsWeekly() {
    if (this.isDisplayWeekly)
      return this.model.itemsWeekly
    return this.model.itemsWeekly.filter((item: { action: any; }) => !item.action);
  }
  getItemsMonthly() {
    if (this.isDisplayMonthly)
      return this.model.itemsMonthly
    return this.model.itemsMonthly.filter((item: { action: any; }) => !item.action);
  }

  add(value: string, from?: any) {
    debugger;
    if (from == 'fromDaily') {
      if (value != "")
        this.model.items.push(new ToDoItem(value, false));
      debugger;

    }
    else if (from == 'fromWeekly') {
      if (value != "")
        this.model.itemsWeekly.push(new ToDoItem(value, false));
    }

    else if (from == 'fromMonthly') {
      if (value != "")
        this.model.itemsMonthly.push(new ToDoItem(value, false));
    }
    debugger;
  }

  // addItemsDaily(value: string) {
  //   if (value != "")
  //     this.model.items.push(new ToDoItem(value, false));
  // }

  // addItemsWeekly(value: string) {
  //   if (value != "")
  //     this.model.itemsWeekly.push(new ToDoItem(value, false));
  // }

  // addItemsMonthly(value: string) {
  //   if (value != "")
  //     this.model.itemsMonthly.push(new ToDoItem(value, false));
  // }


  ngOnInit(): void {

  }

  tabChange(ids: any) {
    this.id = ids;
    console.log(ids)
  }

  triggerAdd(event: any) {
    debugger;
    if (event.code == 'Enter') {
      if (event.currentTarget.id == "todoTextDaily")
        this.add(event.target.value, "fromDaily")
      else if (event.currentTarget.id == "todoTextWeekly")
        this.add(event.target.value, "fromWeekly")
      else if (event.currentTarget.id == "todoTextMonthly")
        this.add(event.target.value, "fromMonthly")

      debugger;

    }

    event;
    event.target.value;
    event.currentTarget.id

    debugger;
  }


}
