import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

class eggAPI {
  id: string
  name: string
  color: string
  caliber: string
  farming: number
  country: string
  validity: string
  rarity: string
  image: string
  power: string
}

class characterAPI {
  id: string
  name: string
  gender: string
  origin: string
  image: string
  skills: ["string"]
}

@Injectable({
  providedIn: 'root'
})
export class EasterApiService {

  constructor(private http: HttpClient) { }

  getEgg() : Observable<eggAPI> {
    return this.http.get<eggAPI>("http://easteregg.wildcodeschool.fr/api/eggs")
  }

  getcharacter() : Observable<characterAPI> {
    return this.http.get<characterAPI>("http://easteregg.wildcodeschool.fr/api/characters")
  }

}
