// pour le fichier contact.js

// ajouter un formulaire
// input class="nom"
// textarea class="commentaire"
// input type submit avec une class envoyer


//si tous les champs sont remplis ajouter APRES le formulaire le texte suivant
//<p>merci pour votre email</p>


let contenu = "<form>";
    contenu += "<input type=\"text\" class=\"nom\">";
    contenu += "<textarea class=\"commentaire\"></textarea>";
    contenu += "<input type=\"submit\" class=\"envoyer\">";
    contenu += "</form>";

$("section").html(contenu);

$(".envoyer").click(function(e){
    e.preventDefault();
    let nom = $(".nom").val();
    let commentaire = $(".commentaire").val();

    if(nom != "" && commentaire != ""){
        $("section").append("<p>Merci pour votre email</p>")
    }else{
        alert("veuillez compléter les deux champs");
    }
})