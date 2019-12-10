import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatModuleModule } from './chat-module/chat-module.module';
import { ChatLModule } from 'chat-l';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChatModuleModule
    // ChatLModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
