import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  invalid:string="";
  user:string="";
  pass:string="";
  constructor(private router:Router,private loc:Location,public snackBar: MatSnackBar) { 

  }

  ngOnInit() {
  }

  login(){
    if(this.user=="abc" && this.pass=="abc")
    {
      this.router.navigateByUrl("/vehicleprep");
      this.openSnackBar("Welcome","Successfully Logged In");
    }
    else{
    this.invalid="Invalid Username or Password"
    this.openSnackBar("Sorry","Invalid Credentials");
  }
  }

  backClicked() {
    this.loc.back();
}

openSnackBar(message: string, action: string) {
  this.snackBar.open(message, action, {
    duration: 2000,
  });
}
}