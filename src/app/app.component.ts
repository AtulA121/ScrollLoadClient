import { Component, OnInit } from '@angular/core';
import { EventsService } from './events.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  items = [];
  selector: string = '.main-panel';
 
  constructor(private _eventService : EventsService){
  }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this._eventService.getData().subscribe((res : any)=>{
      this.items=[...this.items, ...res.result];
      console.log(res);
    });
  }

  onScroll() {
    console.log('scrolled!!');
    this.getData();
  }

}
