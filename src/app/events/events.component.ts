import { Component, OnInit} from '@angular/core';
import { MarvelAPIService } from '../Service/marvel-api.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
allEvents: any =[];

  constructor(private service:MarvelAPIService){}


  ngOnInit(): void {
    this.service.allEvents().subscribe((result) =>{
      console.log(result.data.results);
      this.allEvents = result.data.results;
    });

  }
}
