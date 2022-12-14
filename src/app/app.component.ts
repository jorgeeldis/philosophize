import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/folder/Home', icon: 'home' },
    { title: 'Quotes', url: '/folder/Quotes', icon: 'chatbox' },
    { title: 'Meditations', url: '/folder/Meditations', icon: 'reader' },
    { title: 'To-Do', url: '/folder/To-Do', icon: 'create' },
    { title: 'Lessons', url: '/folder/Lessons', icon: 'checkbox' },
    { title: 'About', url: '/folder/About', icon: 'information-circle' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
