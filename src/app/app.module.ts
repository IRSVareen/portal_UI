import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MachineInfoComponent } from './components/machine-info/machine-info.component';
import { BottomCardsComponent } from './components/bottom-cards/bottom-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    MachineInfoComponent,
    BottomCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
