import { Component } from '@angular/core';

@Component({
  selector: 'ssw-root',
  templateUrl: './app.component.html',
  // template: '<div>test</div>', NOPE ❌
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Welcome to Sydney';
  date = new Date();

  inputChanged(event: any){
    console.log(event);

    this.title = event.target.value;
  }
}
