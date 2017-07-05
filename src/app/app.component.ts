import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}

const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];
// heroes = HEROES;

@Component({
                // selector: 'angular-tour-of-heroes',
              selector: 'my-app',
              // template: `<h1>Hello {{name}}</h1>`,
              // template: `<h1>{{title}}</h1><h2>{{hero}} details!</h2>`
              // template: `<h1>{{title}}</h1><h2>{{hero.name}} details!</h2>`
              // <div><label>name: </label>{{hero.name}}</div>
              template: `
                      <h1>{{title}}</h1>
                      <h2>                                                       {{hero.name}}                      details!</h2>
                      <div><label>      id: </label>              {{hero.id}}</div>
                      <div>
                        <label> THIS IS LABEL ... name: </label>
                                                                <input [(ngModel)]="hero.name"   placeholder="name">
                      </div>
              `
            })  // export class AppComponent  { name = 'Angular'; }

export class AppComponent {
        title = 'Tour of Heroes';
  // hero = 'Windstorm';
        hero: Hero = {    id: 1,  name: 'Windstorm' };
}
