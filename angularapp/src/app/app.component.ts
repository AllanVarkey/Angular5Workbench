import { Component } from '@angular/core'; //bringing component from angular core
//decorators related to this component
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//this is the app component core
export class AppComponent {
  title = 'Basic Application    ';
}
