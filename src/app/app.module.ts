import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import { LogoutComponent } from './logout/logout.component';
import { AboutComponent } from './about/about.component';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StartpageComponent } from './startpage/startpage.component';
import { LoginSuccessComponent } from './login-success/login-success.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule }  from '@angular/material/input';
import { VehiclePrepComponent } from './vehicle-prep/vehicle-prep.component'
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import { FaqComponent } from './faq/faq.component';
import {MatMenuModule} from '@angular/material/menu';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    AboutComponent,
    StartpageComponent,
    LoginSuccessComponent,
    VehiclePrepComponent,
    FaqComponent,
    
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path:'login', component: LoginComponent },
      { path:'home', component: AppComponent },
      { path:'logout', component: StartpageComponent },
      { path:'about', component: AboutComponent },
      { path:'loginsuccess', component: LoginSuccessComponent },
      { path:'vehicleprep', component: VehiclePrepComponent },
      { path:'faq', component: FaqComponent },
      { path:'', component: StartpageComponent }
      
    ], // <-- debugging purposes only
    ),
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatExpansionModule,
    MatInputModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatGridListModule,
    MatSnackBarModule,
    MatDialogModule,
    MatMenuModule
  
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }