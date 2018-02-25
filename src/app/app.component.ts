import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {Location} from '@angular/common'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  back:boolean=false;
constructor(private router: Router,private loc:Location) { }
login(){
this.back=true;
  }

  backClicked() {
    this.back=false;
    this.loc.back();
}

}
