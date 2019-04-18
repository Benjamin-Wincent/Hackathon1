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
    { name: 'oeuf10', url: 'url("../../assets/oeuf10.png")' },
    { name: 'oeuf11', url: 'url("../../assets/oeuf11.png")' },
    { name: 'oeuf12', url: 'url("../../assets/oeuf12.png")' },
    { name: 'oeuf13', url: 'url("../../assets/oeuf13.png")' },
    { name: 'oeuf14', url: 'url("../../assets/oeuf14.png")' },
    { name: 'oeuf15', url: 'url("../../assets/oeuf15.png")' }
 





  ];

  constructor() { }

  getAsset() {
    return this.assets;
  }

}