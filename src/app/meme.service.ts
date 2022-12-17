import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Memes,MemesAjout,TagsTotal,Moyenne } from "./meme";
import { Observable } from "rxjs";

const httpOptions={
  headers: new HttpHeaders({'Content-Type':'application/json'})
}

@Injectable({
  providedIn: 'root'
})


export class MemeService {

  api = 'https://william-dev3-api.onrender.com/';


  constructor(private http: HttpClient) { }

  getAllMemes() : Observable<Memes[]> {
    return this.http.get<Memes[]>(this.api + 'memes');
  }
  getMemesWithId(id: String) : Observable<Memes[]> {
    return this.http.get<Memes[]>(this.api + 'memes/'+ id);
  }
  getTagTotal() : Observable<TagsTotal[]> {
    return this.http.get<TagsTotal[]>(this.api + 'memes/total/tags');
  }
  getMoyenne() : Observable<Moyenne[]> {
    return this.http.get<Moyenne[]>(this.api + 'memes/moyenne/click/theme');
  }
  getFavMemes() : Observable<Memes[]> {
    return this.http.get<Memes[]>(this.api + 'memes/favorie');
  }
  updateMeme(meme : Memes){
    return this.http.put<Memes>(this.api+'memes/'+meme._id,meme,httpOptions);
  }
  addMeme(meme : MemesAjout){
    return this.http.post<MemesAjout>(this.api+'memes/',meme,httpOptions);
  }

  deleteMeme(meme : Memes){
    return this.http.delete<Memes>(this.api+'memes/'+meme._id);
  }

  /*
  getMoyenne(anneeMin:Number,anneeMax:Number):Observable<Moyenne[]>{
    return this.http.get<Moyenne[]>(this.api+ 'temperatures/'+'moyennes/'+anneeMin+'/'+anneeMax,httpOptions);
  }

  addTaches(temperature:Temperature):Observable<Temperature>{
    return this.http.post<Temperature>(this.api+'temperatures',temperature,httpOptions);
  }

  delete(annee:Number){
    return this.http.delete<Number>(this.api+ 'temperatures/'+annee);
  }*/
}