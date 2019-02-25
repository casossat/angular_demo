import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TravelDestinyComponent } from './travel-destiny/travel-destiny.component';
import { ListDestinyComponent } from './list-destiny/list-destiny.component';

@NgModule({
  declarations: [
    AppComponent,
    TravelDestinyComponent,
    ListDestinyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
