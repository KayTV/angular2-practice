import {Component} from 'angular2/core';
import {CoursesComponent} from './course.component';
import {AuthorsComponent} from './author.component';

@Component({
    selector: 'my-app',
    template: `
      <h1>Hello Angular</h1>
      <courses></courses>
      <authors></authors>`,
    directives: [CoursesComponent, AuthorsComponent]
})
export class AppComponent { }
