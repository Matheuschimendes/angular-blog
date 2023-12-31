import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MarvelAPIService {


  constructor(private https:HttpClient) { }


  BASE_URL = `https://gateway.marvel.com/v1/public/events?limit=4&ts=1&apikey=4fc8c4f6d63d9226fc6f51719478d523&hash=ee026b7f3268f97d5756e670c265d297`
  BASE_URL_Characters = `https://gateway.marvel.com/v1/public/characters?limit=10&ts=1&apikey=4fc8c4f6d63d9226fc6f51719478d523&hash=ee026b7f3268f97d5756e670c265d297`

  allCharacters():Observable<any>{
    return this.https.get(this.BASE_URL_Characters);
  }
  allEvents():Observable<any>{
    return this.https.get(this.BASE_URL);
  }

  getCharactersById(characterId: number): Observable<any>{
    const url = `${this.BASE_URL_Characters}&id=${characterId}`
    return this.https.get(url);
  }
  getComicsByCharacter(characterId:string):Observable<any>
  {
    const comicByCharacterUrl = `https://gateway.marvel.com/v1/public/characters/${characterId}/comics?limit=10&ts=1&apikey=4fc8c4f6d63d9226fc6f51719478d523&hash=ee026b7f3268f97d5756e670c265d297`
    return this.https.get(comicByCharacterUrl);
  }
  getSeriesByCharacter(characterId:string):Observable<any>
  {
    const seriesByCharacterUrl = `https://gateway.marvel.com/v1/public/characters/${characterId}/series?limit=10&ts=1&apikey=4fc8c4f6d63d9226fc6f51719478d523&hash=ee026b7f3268f97d5756e670c265d297`
    return this.https.get(seriesByCharacterUrl);
  }
}
