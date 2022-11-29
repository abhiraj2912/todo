import { Component } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  userId=""
  title=""
  completed=""

  readValues=()=>{
    let data:any={"userId":this.userId,"title":this.title,"completed":this.completed}
    console.log(data)
  }

}
