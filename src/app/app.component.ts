import { Component } from '@angular/core';
// @ts-ignore
import { faTrash } from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  faTrash = faTrash;
}
