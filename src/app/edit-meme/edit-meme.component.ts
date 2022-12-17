import { Component, OnInit } from '@angular/core';
import { Memes } from "../meme";
import { MemeService } from "../meme.service";
import { NgForm } from "@angular/forms";
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-meme',
  templateUrl: './edit-meme.component.html',
  styleUrls: ['./edit-meme.component.css']
})
export class EditMemeComponent implements OnInit {
  meme: Memes ={
    _id: '',
    nom: '',
    annee_de_creation: '',
    nombre_de_click: 0,
    favorie: false,
    tags: [''],
    meme_similare: [{_id:'',image:''}],
    template: '',
    image: '',
    like: 0,
    dislike: 0,
    theme: ''
  };
 
  constructor(private memeService : MemeService,private route: ActivatedRoute, private routeSub: Subscription) { }
  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
          //this.memeService.getMemesWithId(params['id']).subscribe(resultat=>this.meme=resultat);
    });
  }
  edit(editMemeForm:NgForm){
    if (editMemeForm.valid) {
      //this.memeService.updateMeme(this.meme).subscribe(tache => {this.temperature.push(tache); temperatureFormAjout.resetForm();})
    }
  }
  
ngOnDestroy() {
  this.routeSub.unsubscribe();
}
}