// définition d'une api
let endpoint = "https://v2.jokeapi.dev/joke/Any?lang=fr&blacklistFlags=nsfw,religious,political,racist,sexist,explicit";



// générer blague  
function generateBlague(){
    return fetch(endpoint)
    .then(
        // Fonction de callback anonyme
        function (response) {
            // Affichage de la réponse
            // console.log(response);

            // Affichage du code de status de la reponse
            if (response.status == 200) {
                // interpréter le contenu
                response.json()
                    .then(
                        function (datas) {
                            // Affichage des données
                            let blague_en_cours = datas;
                            let tab_line = document.getElementById("table_body");
                            tab_line.appendChild(generateBlagueLine(blague_en_cours));                            
                        }
                    )
            }

    
        }
    )
}


//appel de la fonction pour générer une blague
document.getElementById("form_blague").addEventListener("submit", function(event){
    
    // empeche le rechargement du formulaire
    event.preventDefault();
    
    for (let i=0; i<document.getElementById("nbr_blague").value; i++){
        generateBlague()
        
        
        //generateBlagueLine(datas);

        //affilier un tableau se référer a gitub
    }
}
);
//fonction qui crée une ligne de blague
function generateBlagueLine(blague){
    
    //on créer la balise tr
    let generateBlagueLine = document.createElement("tr");

    //catégorie
    let categorie = document.createElement("td");

    //blague
    let blagueTexte = document.createElement("td");

    //réponse
    let reponseTexte = document.createElement("td");

    //bouton_supprimer
    let btnSupprimer = document.createElement("td");

    //affiliation des valeurs aux colonnes

    //colonne catégorie
    categorie.innerText = blague.category;

    //colonne blague
    blagueTexte.innerText = blague.setup;

    //colonne réponse
    reponseTexte.innerText = blague.delivery;

    //colonne bouton supprimer
    btnSupprimer.innerHTML = '<button class="btn_suppr">supprimer la blague</button>';
    btnSupprimer.addEventListener("click", function(){
        generateBlagueLine.remove();
    });



    //filiation des colonnes à la ligne
    generateBlagueLine.appendChild(categorie);
    generateBlagueLine.appendChild(blagueTexte);
    generateBlagueLine.appendChild(reponseTexte);
    generateBlagueLine.appendChild(btnSupprimer);

    // renvoit de la ligne générée
    return generateBlagueLine;
}

//bouton supprimer tout
let bouton_supprimer_tout = document.getElementById("supprimer_tout");

bouton_supprimer_tout.addEventListener("click", function(event){
    event.preventDefault();
    let lignes = document.getElementById("table_body").querySelectorAll("tr");
    for(let ligne of lignes)(
        ligne.remove()
    )
    
});