import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent,
         HeaderComponent,
         NavigationComponent,
         MainComponent,
         MovieListComponent  
       } from "./index";

import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { MovieItemComponent } from './movie-item/movie-item.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    MainComponent,
    MovieListComponent,
    FooterComponent,
    MovieItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
