import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MarvelAPIService {


  constructor(private http:HttpClient) { }


  BASE_URL = `http://gateway.marvel.com/v1/public/events?limit=4&ts=1&apikey=4fc8c4f6d63d9226fc6f51719478d523&hash=ee026b7f3268f97d5756e670c265d297`
  BASE_URL_Characters = `http://gateway.marvel.com/v1/public/characters?limit=10&ts=1&apikey=4fc8c4f6d63d9226fc6f51719478d523&hash=ee026b7f3268f97d5756e670c265d297`

  allCharacters():Observable<any>{
    return this.http.get(this.BASE_URL_Characters);
  }
  allEvents():Observable<any>{
    return this.http.get(this.BASE_URL);
  }

  getCharactersById(characterId: number): Observable<any>{
    const url = `${this.BASE_URL_Characters}&id=${characterId}`
    return this.http.get(url);
  }
  getComicsByCharacter(characterId:string):Observable<any>
  {
    const comicByCharacterUrl = `http://gateway.marvel.com/v1/public/characters/${characterId}/comics?limit=10&ts=1&apikey=4fc8c4f6d63d9226fc6f51719478d523&hash=ee026b7f3268f97d5756e670c265d297`
    return this.http.get(comicByCharacterUrl);
  }
  getSeriesByCharacter(characterId:string):Observable<any>
  {
    const seriesByCharacterUrl = `http://gateway.marvel.com/v1/public/characters/${characterId}/series?limit=10&ts=1&apikey=4fc8c4f6d63d9226fc6f51719478d523&hash=ee026b7f3268f97d5756e670c265d297`
    return this.http.get(seriesByCharacterUrl);
  }
}
