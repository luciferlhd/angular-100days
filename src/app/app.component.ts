import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  public name1: string = '';
  user = {
    name: 'lê huỳnh đức',
    age: '20',
    dev: 'c#'
  };
  hanrd() {
    alert('hihihihihihih');
  }
}
