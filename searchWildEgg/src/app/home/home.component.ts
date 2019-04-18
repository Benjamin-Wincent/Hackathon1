import { Component, OnInit } from '@angular/core';
import { EasterApiService } from '../easter-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

characterImg: string;
characterName: string;  

  constructor(private easterService : EasterApiService) { }

  ngOnInit() {
  }

  getCharacter() {
  this.easterService.getcharacter().subscribe(data => {
      this.characterImg = data.image
      this.characterName = data.name});
  }
}
