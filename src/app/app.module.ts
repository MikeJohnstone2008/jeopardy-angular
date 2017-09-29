import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { JeopardyService } from './jeopardy.service';
import { InputAndButtonComponent } from './input-and-button/input-and-button.component';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    InputAndButtonComponent,
    SearchComponent

  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    JeopardyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
