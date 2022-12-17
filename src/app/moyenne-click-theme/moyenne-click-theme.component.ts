import { Component, OnInit } from '@angular/core';
import { MemeService } from "../meme.service";
import { Router } from '@angular/router';
import { Moyenne  } from "../meme";

@Component({
  selector: 'app-moyenne-click-theme',
  templateUrl: './moyenne-click-theme.component.html',
  styleUrls: ['./moyenne-click-theme.component.css']
})
export class MoyenneClickThemeComponent implements OnInit {
  moyenne: Moyenne[] = [];
  constructor(private memeService : MemeService, private router: Router) { }
  displayedColumns: String[] = ["theme","moyennes"];
  ngOnInit(): void {
     this.getMoyClick(); 
     
  }
  getMoyClick() : void{
    this.memeService.getMoyenne().subscribe(resultat => {this.moyenne = resultat; }); 
  }

}
