import { Component, Input } from '@angular/core';
import { MarvelAPIService } from 'src/app/Service/marvel-api.service';

@Component({
  selector: 'app-card-section2',
  templateUrl: './card-section2.component.html',
  styleUrls: ['./card-section2.component.css']
})
export class CardSection2Component {
  @Input()
  cardSection2_photoCover:string = ""
  @Input()
  cardSection2_Title:string = ""
  @Input()
  cardSection2_Description:string = ""
  @Input()
  Id:string= "0"

  allCharacters: any=[];

  constructor(private service:MarvelAPIService){}

  ngOnInit(): void {
    this.service.allCharacters().subscribe((result) =>{
      console.log(result);
      this.allCharacters = result.data.results;
    })

    const characterId = 4;
    this.service.getCharactersById(characterId).subscribe((result) => {
      this.allCharacters = result.data.result[0]
    })
  }
}
