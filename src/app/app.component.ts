import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '';
  links : Array<any> = [
    {name: "about", route: "/"},
    {name: "project", route: "/projects"}
  ];
}
