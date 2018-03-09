import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { List1Component } from './list/list1.component';

@NgModule({
  declarations: [
      AppComponent,
      List1Component
  ],
  imports: [
      BrowserModule,
      RouterModule.forRoot([
          { path: 'list', component: List1Component },
          { path: '', redirectTo: 'home', pathMatch: 'full' }
      ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
