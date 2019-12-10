import { NgModule } from '@angular/core';
import { ChatLComponent } from './chat-l.component';
import { CommonModule } from '@angular/common';
import { ToogleButtonComponent } from './toogle-button/toogle-button.component';
import { SearchComponent } from './search/search.component';


const CONFIGCHAT:any={ 
						
					};
@NgModule({
  declarations: [ChatLComponent, ToogleButtonComponent, SearchComponent],
  imports: [
  CommonModule
  ],
  exports: [ChatLComponent, ToogleButtonComponent, SearchComponent]
})
export class ChatLModule { }
