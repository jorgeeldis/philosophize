import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Quotes', url: '/quotes', icon: 'chatbox' },
    { title: 'Meditations', url: '/meditations', icon: 'reader' },
    { title: 'To-Do', url: '/to-do', icon: 'create' },
    { title: 'Lessons', url: '/lessons', icon: 'checkbox' },
    { title: 'About', url: '/about', icon: 'information-circle' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
