import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { AmogusComponent } from './amogus/amogus.component';
@NgModule({
  declarations: [AppComponent, AmogusComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatProgressBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
