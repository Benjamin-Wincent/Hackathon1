import { Injectable } from '@angular/core';
import { MapService } from './map.service';
import { AssetService } from './asset.service';

// const createEggs = (img, number) =>
// {
// map
  // return // <button id="eggNumber"><img /></button>
// }
// tu veut créer une methode qui va créer des eggs button avec une ID différentes, en params tu peut lui 
// donner une img, un numéros.
// const createEggs1 = ( img ) => {
  // let egg = img
  // egg.map()
// }

@Injectable({
  providedIn: 'root'
})

export class GameService {


  constructor(public map : MapService, public assetService: AssetService) { }

//onEggClick() {
//  this.assetService.getAsset() = this.map.;
//    return console.log("yes");
//}
}
