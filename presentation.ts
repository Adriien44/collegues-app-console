
const lg = console.log;
import readline from "readline";
import Service from "./service";
import Collegue from "./domains";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const collo = new Service(); 

// *** MENU ***
const start =  () => {
     lg(`1. Rechercher un collègue par nom 
     2. Rechercher collègue par matricule
     3. Créer un collègue
     4. Modifier email d'un collègue
     5. Modifier photoUrl d'un collègue
     99. Sortir
     \n`)

     rl.question('Saisissez votre choix : ', (saisie:string) => {
        lg("\n"); 
     
        switch(saisie) {

            // *** RECHERCHE PAR NOM ***
            case "1" : 
                rl.question('Saisissez le nom du collègue : ', (nomCollegue:string) => {
                    lg(`>>> Recherche en cours du nom \ ${nomCollegue} \ ...`);
                    collo.rechercherColleguesParNom(nomCollegue)
                    .then ((colleguesTrouves) => {
                        colleguesTrouves.forEach((collegue:Collegue) => {
                            console.log (`Matricule : ${collegue.matricule} // Nom : ${collegue.nom} // Prénom : ${collegue.prenom} // Date de Naissance : ${collegue.dateDeNaissance}`)                              
                        })
                    })
                    .catch((error:any) => console.log(error));
                    lg("\n");
                    start();
                    lg("\n");
                })  ;
                break; 

            // *** RECHERCHE PAR MATRICULE ***    
            case "2" : 
                rl.question('Saisissez le matricule : ', (numMatricule:string) => {
                        lg(`Recherche en cours du collègue correspond au matricule \ ${numMatricule} \ ...`);
                        collo.rechercherParMatricule(numMatricule)
                        .then ((collegue:Collegue) => console.log(`Nom : ${collegue.nom} // Prénom : ${collegue.prenom} // Date de Naissance : ${collegue.dateDeNaissance}`))
                        ,(error:any) => console.log (error); 
                        lg("\n");
                        start(); 
                        lg("\n");
                    });
                break;

            // *** AJOUTER UN COLLÈGUE ***
            case "3" : 
                let collegue = new Collegue(); 
                rl.question('Saisissez un nom : ', (nom:string) => {
                    collegue.nom = nom; 
                    rl.question ('Saisissez un prénom : ', (prenom:string) => {
                        collegue.prenom = prenom;
                        rl.question('Saisissez email : ', (email:string) => {
                            collegue.email = email; rl.question ('Saisissez une date de naissance : ', (dateDeNaissance:string) => {
                                collegue.dateDeNaissance = dateDeNaissance; 
                                rl.question ('Saisissez url photo : ', (photoUrl:string) => {
                                    collegue.photoUrl = photoUrl;
                                    collo.creerCollegue(collegue); 
                                    start(); 
                                })
                            })                        
                        })
                    })
                })
            break; 

            // *** MODIFIER EMAIL ***
            case "4" : 
            break; 

            // *** MODIFIER PHOTOURL ***
            case "5" : 
            break; 

            case "99" : 
                lg("Au revoir"); 
                rl.close(); 
           }
     });   
}

export {start}; 
