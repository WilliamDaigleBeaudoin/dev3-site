import { Component, OnInit } from '@angular/core';
import { Memes, MemesAjout } from "../meme";
import { MemeService } from "../meme.service";
import { Router } from '@angular/router';
import { NgForm } from "@angular/forms";


@Component({
  selector: 'app-liste-meme',
  templateUrl: './liste-meme.component.html',
  styleUrls: ['./liste-meme.component.css']
})
export class ListeMemeComponent implements OnInit {

  editing : Boolean = false;
  tag : String = "";
  listeMemes: Memes[] = [];
  memeSelect: Memes[] =[];
  newMeme: MemesAjout = {
    nom: '',
    annee_de_creation: '',
    nombre_de_click: 0,
    favorie: false,
    tags: [''],
    meme_similare: [{ _id: '', image: '' }],
    template: '',
    image: '',
    like: 0,
    dislike: 0,
    theme: ''
  };
  constructor(private memeService : MemeService) { }

  ngOnInit(): void {
    this.getMemes();
  }
  
  getMemes() : void {
    this.memeService.getAllMemes().subscribe(resultat => this.listeMemes = resultat); 
  }
  getFavoriteMeme() :void{
    this.memeService.getFavMemes().subscribe(resultat => this.listeMemes = resultat); 
  }
  
  
  
  getMemesId(id: String) : void {
    
    this.memeService.getMemesWithId(id).subscribe(resultat => this.memeSelect = resultat); 
  }
  editMeme(meme: Memes): void{
    this.getMemesId(meme._id);
    this.editing=true;
    window.scrollTo(0,document.body.scrollHeight);
 }

 edit(editMemeForm:NgForm){
  if (editMemeForm.valid) {
    this.memeService.updateMeme(this.memeSelect[0]).subscribe(tache => {this.getMemes(); editMemeForm.resetForm();})
    this.editing = false;
  }
}
add(addMemeForm:NgForm){
 if (addMemeForm.valid) {
   this.memeService.addMeme(this.newMeme).subscribe(tache => {this.getMemes(); addMemeForm.resetForm();})
 }
}

delete(meme:Memes){
    this.memeService.deleteMeme(meme).subscribe(tache => {this.getMemes();})
    this.editing = false;
 }

}
