import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-chatL',
  template: '<Chat-toogle-button [cssG]="css" [cssIcone]="cssIcone" [cssBody]="cssBody"></Chat-toogle-button>',
  styleUrls: ['./toogle-button/toogle-button.component.scss']
})
export class ChatLComponent implements OnInit {
	@Input() css:any={};
	@Input() cssIcone:any={};
	@Input() cssBody:any={};
	@Input() cssbottom:any={};
	public toogleShow = false;
  constructor() { 
  }

  ngOnInit() {
  }

}
