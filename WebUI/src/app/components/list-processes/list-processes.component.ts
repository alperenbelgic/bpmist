import { Component, OnInit } from '@angular/core';
import { WebService } from 'src/app/services/Web/web.service';
import { Observable, Subscribable, Unsubscribable, BehaviorSubject } from 'rxjs';
import { FormControlName } from '@angular/forms';

@Component({
  selector: 'app-list-processes',
  templateUrl: './list-processes.component.html',
  styleUrls: ['./list-processes.component.css']
})
export class ListProcessesComponent implements OnInit {

  processes: any[];

  constructor(
    private webService: WebService
  ) { }

  ngOnInit(): void {

    this.webService.GetProcessesQuery().subscribe(r => {
      console.log(r);
      this.processes = r.Value.Processes;
    });
  }
}

// below work are templates for generating viewmodels that are hierarchically observable
// config for generating viewmodels
// observable & non-observable fields are separate.

export class Parent {

  constructor(private _value1: string, private _value2: number, private _child1: Child1, private _child2List: Child2[]) {
    this._child1Subject = new BehaviorSubject<Child1>(_child1);
    // this._child2ListSubject = new BehaviorSubject <ObservableArray<Child2>>()

  }

  get child1(): Child1 {
    return this._child1;
  }
  set child1(value: Child1) {
    this._child1 = value;
    this._child1Subject.next(this._child1);
  }

  private _child1Subject: BehaviorSubject<Child1>;
  private _child2ListSubject: BehaviorSubject<ObservableArray<Child2>>;

  get _child1Observable(): Observable<Child1> {
    return this._child1Subject.asObservable();
  }
  get _child2Observable(): Observable<ObservableArray<Child2>> {
    return this._child2ListSubject.asObservable();
  }

}

export class Child1 {

}

export class Child2 implements IHaveObservable<Child2> {

  constructor(private _c2Value1: string, private _c2Value2: number) {
    this._c2Value1Subject = new BehaviorSubject<string>(_c2Value1);

    this._c2Value1Subject.subscribe(v => {
      this.subject.next(this);
    })
  }

  private subject: BehaviorSubject<Child2> = new BehaviorSubject<Child2>(this);

  get c2Value1(): string {
    return this._c2Value1;
  }
  set c2Value1(value: string) {
    this._c2Value1 = value;
    this._c2Value1Subject.next(value);
  }

  private _c2Value1Subject: BehaviorSubject<string>;

  public get _c2ValueObservable() {
    return this._c2Value1Subject.asObservable();
  }

  asObservable(): Observable<Child2> {
    return this.subject.asObservable();
  }

}

export interface IHaveObservable<T> {
  asObservable(): Observable<T>;
}

export class ObservableArray<T extends IHaveObservable<T>> extends Array<T> implements IHaveObservable<ObservableArray<T>> {

  private subject = new BehaviorSubject<ObservableArray<T>>(this);

  asObservable(): Observable<ObservableArray<T>> {
    return this.subject.asObservable();
  }

  push(e: T): number {

    const result = super.push(e);
    this.subject.next(this);
    e.asObservable().subscribe({
      next: (value: T) => {
        this.subject.next(this);
      }
    });
    return result;
  }

  unshift(e: T): number {
    const result = super.unshift(e);
    this.subject.next(this);
    // we should subscribe to e. in order to propagete the event.

    return result;
  }

  // override removing objects
  // unsubscribe the object being removed.
}

// export class OrderViewModel


