import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dashboard';
  sidebar:boolean=true;
  sideBarOpen(){
    console.log('sidebar opened');
    
    this.sidebar=!this.sidebar
  }
}
