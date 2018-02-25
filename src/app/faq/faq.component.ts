import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  faq1:boolean;
  faq2:boolean;
  faq3:boolean;
  faq4:boolean;
  faq5:boolean;
  faq6:boolean;
  faq7:boolean;
  

  constructor(private loc:Location,public snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  backClicked()
  {
    this.loc.back();
  }

  logout() {
    
    this.openSnackBar("Session Over","Logged Out");
  }
  openSnackBar(message: string, action: string){
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }


  faq1_1(){
    this.faq1=!this.faq1;
  }
  faq2_2(){
    this.faq2=!this.faq2;
  }
  faq3_3(){
    this.faq3=!this.faq3;
  }
  faq4_4(){
    this.faq4=!this.faq4;
  }
  faq5_5(){
    this.faq5=!this.faq5;
  }
  faq6_6(){
    this.faq6=!this.faq6;
  }
  faq7_7(){
    this.faq7=!this.faq7;
  }
}
