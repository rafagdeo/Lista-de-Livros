import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Todo } from './todo';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  todos: Todo[] = [];
  newTodo: string;

  saveTodo() {
    if (this.newTodo) {
      let todo = new Todo();
      todo.name = this.newTodo;
      todo.isCompleted = true;
      this.todos.push(todo);
      this.newTodo = '';
    } else {
      alert('Escreva seu livro');
    }
  }

  done(id:number){
    this.todos[id].isCompleted = !this.todos[id].isCompleted;
  }

  remove(id:number){
    this.todos = this.todos.filter((v, i)=> i !== id)
  }
}
