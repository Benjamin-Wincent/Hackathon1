import { Injectable } from '@angular/core';
import { MapService } from './map.service';
import { AssetService } from './asset.service';

@Injectable({
  providedIn: 'root'
})

export class GameService {

  public eggsRecolted: {name: string; url: string}[] = []
  

  constructor(public map : MapService, public assetService: AssetService) { }

  onEggClick(egg: {name: string; url: string}){
    this.eggsRecolted.push(egg)
    // console.log(this.eggsRecolted)
  }
}