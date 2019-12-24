import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo1';
  Firstname = 'Aditi';
  Lastname = 'Patel';
  Address = '71,near zydus hospital';
  Phonenumber = '9845671233';

  private getdetails()
  {
    console.log(this.title);
    console.log(this.Firstname);
    console.log(this.Lastname);
    console.log(this.Address);
    console.log(this.Phonenumber);
  }
  today: number = Date.now();
  private getfulldeatils()
  {
    this.getdetails();
  }
  object: Object = {foo: 'bar', baz: 'qux', nested: {xyz: 3, numbers: [1, 2, 3, 4, 5]}};
  value !: string;
  change(value: string) { this.value = value; }
  
  greeting: Promise<string>|null = null;
  arrived: boolean = false;

  private resolve: Function|null = null;

  constructor() { this.reset(); }

  reset() {
    this.arrived = false;
    this.greeting = new Promise<string>((resolve, reject) => { this.resolve = resolve; });
  }

  clicked() {
    if (this.arrived) {
      this.reset();
    } else {
      this.resolve !('hi there!');
      this.arrived = true;
    }
  }
  num1: number = 12.638467846;
  num2: number = 0.5;
  num3: number = 2.5;
  num4: number = 0.5;
}
