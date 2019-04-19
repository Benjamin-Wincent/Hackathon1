import { Component, OnInit } from '@angular/core';
import { EasterApiService } from '../easter-api.service';
import { GameService } from '../game.service';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.scss']
})
export class ChoiceComponent implements OnInit {
  
  public eggs : any;
  public characters : any;

  constructor(private easterService : EasterApiService, public game: GameService) { }

  ngOnInit() {
    this.easterService.getEgg().subscribe(data => this.eggs = data);
    this.easterService.getcharacter().subscribe(data => this.characters = data);
  }
  
}
