import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultDecisionComponent } from './default-decision/default-decision.component';
import { NgxWheelModule } from 'ngx-wheel';
import {MatCardModule} from '@angular/material/card';
import { MatInput, MatInputModule } from '@angular/material/input';
@NgModule({
  declarations: [
    AppComponent,
    DefaultDecisionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    NgxWheelModule,
    MatCardModule,
    MatInputModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
