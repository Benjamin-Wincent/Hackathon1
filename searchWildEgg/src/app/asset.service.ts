import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AssetService {

  public assets = [
    { name: 'void', url: 'url("../../assets/void.png")' },
    { name: 'oeuf1', url: 'url("../../assets/oeuf1.png")' },
    { name: 'oeuf2', url: 'url("../../assets/oeuf2.png")' },
    { name: 'oeuf3', url: 'url("../../assets/oeuf3.png")' },
    { name: 'oeuf4', url: 'url("../../assets/oeuf4.png")' },
    { name: 'oeuf5', url: 'url("../../assets/oeuf5.png")' },
    { name: 'oeuf6', url: 'url("../../assets/oeuf6.png")' },
    { name: 'oeuf7', url: 'url("../../assets/oeuf7.png")' },
    { name: 'oeuf8', url: 'url("../../assets/oeuf8.png")' },
    { name: 'oeuf9', url: 'url("../../assets/oeuf9.png")' },

  ];

  constructor() { }

  getAsset() {
    return this.assets;
  }

}