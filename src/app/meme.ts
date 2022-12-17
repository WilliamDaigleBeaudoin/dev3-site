export interface Memes {
    _id:string,
    nom: string,
    annee_de_creation: string,
    nombre_de_click:Number,
    favorie:Boolean,
    tags:[String], 
           
    meme_similare:[{
          _id : String,
          image : String
        }],
              
    template:String, 
    image:String, 
    like:Number,
    dislike:Number,
    theme:String 
}

export interface MemesAjout {
    nom: string,
    annee_de_creation: string,
    nombre_de_click:Number,
    favorie:Boolean,
    tags:[String], 
           
    meme_similare:[{
          _id : String,
          image : String
        }],
              
    template:String, 
    image:String, 
    like:Number,
    dislike:Number,
    theme:String 
}

export interface TagsTotal {
    _id:String,
    count:Number 
}
export interface Moyenne {
    theme:String,
    moyennes:Number 
}