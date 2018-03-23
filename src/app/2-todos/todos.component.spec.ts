/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';
import 'rxjs/add/observable/from';

import {TodosComponent} from './todos.component';
import {TodoService} from './todo.service';
import {HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodosComponent],
      providers: [TodoService],
      imports: [HttpClientModule]
    });

    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
  });

  it('should load todos from server', () => {
    // fixture.debugElement.injector.get(TodoService);
    const service = TestBed.get(TodoService);
    const todos = [1, 2, 3];

    spyOn(service, 'getTodos').and.returnValue(Observable.from([todos]));
    fixture.detectChanges();

    expect(component.todos).toBe(todos);
  });

});
