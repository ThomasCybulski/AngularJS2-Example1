import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<h1>{{ title }}</h1>`
})
export class AppComponent {
  title: string;

    constructor() {
        this.title = "Hallo Welt!";
        setTimeout(() => {
            this.title = "hallo 1"
            }, 2500
        )
    }
}
