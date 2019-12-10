import {Component, OnInit, Input} from '@angular/core';
@Component({
  selector: 'Chat-toogle-button',
  templateUrl: './toogle-button.component.html',
  styleUrls: ['./toogle-button.component.scss']
})
export class ToogleButtonComponent implements OnInit {
	@Input() cssG:any={};
	@Input() cssIcone:any={};
	@Input() cssBody:any={};
	@Input() cssbottom:any={};
	
	public toogleShow = false;
  constructor() {
  }

  ngOnInit() {
	  this.hideChat();
  }
  
  
  showChat(){
	  this.toogleShow = true;
	  this.cssbottom={};
  }

  hideChat(){
	  this.toogleShow = false;
	  this.cssbottom={'height': '0px', 'margin-bottom' : '0px'};
  }
  
	show_hide_Chat(){
		if(this.toogleShow == false){
			this.showChat();
		}else{
			this.hideChat();
		}
	}
	
	propagation(event){
		event.stopPropagation();
		
	}
}
