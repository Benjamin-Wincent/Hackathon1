import { Component, OnInit } from '@angular/core';
import { EasterApiService } from '../easter-api.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {

  public eggs : any;
  public characters : any;

  constructor(private easterService : EasterApiService) { }

  ngOnInit() {
    this.easterService.getEgg().subscribe(data => this.eggs = data);
    this.easterService.getcharacter().subscribe(data => this.characters = data);
  }
  
}
