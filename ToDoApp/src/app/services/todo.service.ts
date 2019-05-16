import { Injectable } from '@angular/core';
import { Todo } from '../models/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  getTodos() {
    return [
        {
          id: 1,
          title: "Pirmas todo",
          completed: false,
        },
        {
          id: 2,
          title: "Isvesti suni",
          completed: true,
        }, 
        {
          id: 3,
          title: "Pabaigti projekta",
          completed: false,
        }
      
    ]
  }
}
