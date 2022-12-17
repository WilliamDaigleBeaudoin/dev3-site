import { Component, OnInit } from '@angular/core';
import { MemeService } from "../meme.service";
import { Router } from '@angular/router';
import { TagsTotal  } from "../meme";
@Component({
  selector: 'app-total-par-tag',
  templateUrl: './total-par-tag.component.html',
  styleUrls: ['./total-par-tag.component.css']
})
export class TotalParTagComponent implements OnInit {

  tagTotal: TagsTotal[] = [];
  constructor(private memeService : MemeService, private router: Router) { }
  displayedColumns: String[] = ["_id","count"];
  ngOnInit(): void {
     this.getTagsTotal(); 
     
  }
  getTagsTotal() : void{
    this.memeService.getTagTotal().subscribe(resultat => {this.tagTotal = resultat; }); 
  }

}
