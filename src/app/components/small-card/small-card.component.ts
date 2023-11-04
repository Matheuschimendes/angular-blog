import { Component, Input } from '@angular/core';
import { MarvelAPIService } from 'src/app/Service/marvel-api.service';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent {
  @Input()
  smallphotoCover:string = ""
  @Input()
  smallCardTitle:string = ""
  @Input()
  smallCardDescription:string = ""
  @Input()
  Id:string= "0"

  allEvents: any =[];

  constructor(private service:MarvelAPIService){}


  ngOnInit(): void {
    this.service.allEvents().subscribe((result) =>{
      console.log(result.data.results);
      this.allEvents = result.data.results;
    });

  }
}
