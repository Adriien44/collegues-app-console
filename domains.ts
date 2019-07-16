export default class Collegue {
    private _matricule:string;
	private _nom:string;
	private _prenom:string;
	private _email:string;
	private _dateDeNaissance : string;
    private _photoUrl: string;
    
    constructor(){
        this._matricule = ''; 
        this._nom = '';
        this._prenom = '';
        this._email = '';
        this._dateDeNaissance = '';
        this._photoUrl = ''; 
    }

    get matricule (){
        return this._matricule;
    }

    get nom (){
        return this._nom; 
    }
    set nom(newNom) {
        this._nom = newNom;
    }

    get prenom(){
        return this._prenom;
    }

    set prenom (newPrenom) {
        this._prenom = newPrenom; 
    }

    get email(){
        return this._email; 
    }

    set email(newEmail){
        this._email= newEmail; 
    }

    get dateDeNaissance (){
        return this._dateDeNaissance;
    }

    set dateDeNaissance (newDate){
        this._dateDeNaissance = newDate; 
    }

    get photoUrl (){
        return this._photoUrl;
    }

    set photoUrl (newPhotoUrl){
        this._photoUrl = newPhotoUrl; 
    }
    

}