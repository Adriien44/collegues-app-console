import jsdom from 'jsdom';
import request from 'request-promise-native';
import Collegue from './domains';

export default class Service  {

   
// *** RECHERCHE PAR NOM ***
rechercherColleguesParNom (nomRecherche:string){

    return request(`https://chauvin-collegues-api.herokuapp.com/collegues?nom=${nomRecherche.trim()}`, { json : true})
}


// *** RECHERCHE PAR MATRICULE ***
rechercherParMatricule (matricule:string){

    return request(`https://chauvin-collegues-api.herokuapp.com/collegues/${matricule.trim()}`, { json : true})  
}


// *** AJOUTER UN COLLÈGUE ***
creerCollegue (collegue:Collegue) {
    request.post(`https://chauvin-collegues-api.herokuapp.com/collegues`, {json : true, body: {

    "nom" : collegue.nom,
    "prenom" : collegue.prenom,
    "email" : collegue.email,
    "dateDeNaissance" : collegue.dateDeNaissance,
    "photoUrl" : collegue.photoUrl
    }
})
}

// *** MODIFIER EMAIL D'UN COLLEGUE ***

modifierEmail (collegue:Collegue){
    request.patch(`https://chauvin-collegues-api.herokuapp.com/collegues/ ` + collegue.matricule, { json : true, body: {
        
    "email" : collegue.email

    }    
})
}

// *** MODIFIER PHOTOURL D'UN COLLEGUE ***

modifierPhotoUrl (collegue:Collegue){
    request.patch(`https://chauvin-collegues-api.herokuapp.com/collegues/` + collegue.matricule, {json : true, body : {
        "photoUrl" : collegue.photoUrl
    }})
}

}
