import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteInputComponent } from './quote-input/quote-input.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { DatePipe } from './date.pipe';
import { HighlightQouteDirective } from './highlight.directive';



@NgModule({
  declarations: [
    DatePipe,
    AppComponent,
    QuoteInputComponent,
    HomeComponentComponent,
    HighlightQouteDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
