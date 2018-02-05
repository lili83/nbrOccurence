let str="aabaabbbabbbaa";
let ch=["ab", "ba", "abba"];
let data= { string: str, chaine: ch};

let isString= function(data, callback){
    let tabCompteur=[];
    for (j=0; j<data.chaine.length; j++){      
            let compteur = 0;
            for (let i = 0; i<data.string.length; i++){
               if (str.substr(i, data.chaine[j].length)== data.chaine[j]) {
                   tabCompteur[j] = ++compteur;
               }
            }              
    }    
    if (tabCompteur.length == 0){
        return callback("les éléments ne se trouvent pas dans la chaine")
    } else {
        return callback(null, tabCompteur);
    }
}

isString(data, function(err, result){    
    if(err){
        console.log("erreur : "+err);
    } else {           
        for(i=0; i<data.chaine.length; i++){            
            if (result[i]) {
                console.log("l'élément "+data.chaine[i]+ " est présent "+result[i]+" fois dans le tableau//");
            } else {
            console.log("l'élément "+data.chaine[i]+" n'est pas présent dans le tableau//") 
            }
        }
    }
});