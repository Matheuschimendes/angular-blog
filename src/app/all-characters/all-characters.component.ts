import { Component, OnInit } from '@angular/core';
import { MarvelAPIService } from '../Service/marvel-api.service';

@Component({
  selector: 'app-all-characters',
  templateUrl: './all-characters.component.html',
  styleUrls: ['./all-characters.component.css']
})
export class AllCharactersComponent {

allCharacters: any=[];
Id: any|string;

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
