// remplir la balise section du fichier index.html
let contenu = "";
for(let i = 0 ; i < 10 ; i++){
    contenu += "<div>";
    contenu += "<h2>Article "+ (i+1) +"</h2>";
    contenu += "<img src=\"https://via.placeholder.com/300x200\" alt=\"\">";
    contenu += " <p>lorem</p>";
    contenu += "</div>";
};

$("section").html(contenu);


// pour le fichier contact.js

// ajouter un formulaire
// input class="nom"
// textarea class="commentaire"
// input type submit avec une class envoyer


//si tous les champs sont remplis ajouter APRES le formulaire le texte suivant
//<p>merci pour votre email</p>