export class Model{
    items:any;
    itemsWeekly:any;
    itemsMonthly:any;

    constructor() {
        this.items=[
            new ToDoItem("Sport",false),
            new ToDoItem("Breakfast",false),
        ],
        this.itemsWeekly=[
            new ToDoItem("Shopping",true),
            new ToDoItem("Cinema",false),
            new ToDoItem("Go Fishing",false),
        ],
        this.itemsMonthly=[
            new ToDoItem("Finish Project",false),
            new ToDoItem("Repair Car",false),
        ]
    }
}

export class ToDoItem{
    description:any;
    action:any;
  
    constructor(description: any,action: any) {
        this.description=description;
        this.action=action;
    }
}
