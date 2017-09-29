import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
<<<<<<< HEAD
import { FormsModule} from '@angular/forms';
=======
import { FormsModule } from '@angular/forms';
>>>>>>> 79fd4e4e4ac11134e8a923bc99b88231a8d05946

import { AppComponent } from './app.component';
import { JeopardyService } from './jeopardy.service';
import { InputAndButtonComponent } from './input-and-button/input-and-button.component';


@NgModule({
  declarations: [
    AppComponent,
    InputAndButtonComponent
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
