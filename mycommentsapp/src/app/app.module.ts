import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommentsComponent } from './comments/comments.component';
import { SubcommentsComponent } from './subcomments/subcomments.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentsComponent,
    SubcommentsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
