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
});
// css (demain) et effet // jquery apparition / disparition zoom .... (15min et 20 min)

// 1 mettre en forme le site ?? => style.css
// 2 dans la page contact comment éviter d'avoir un p qui s'ajoute à chaque fois
// 3 fini de remplir le formulaire vider les champs
// 4 lorsque l'on clique sur le logo afficher / masquer le menu
// 5 page d'accueil , lorsque vous cliquer sur une image => masquer / afficher le paragraphe qui suit 

// 6 JSON parcourir dans la page d'accueil pour éviter d'avoir article1 et lorem 

let articles = [
    {
        titre : "Premier article",
        contenu : "fezhfoiezhoihzeoihoiz",
        url: "http...."
    },
    {
        titre : "Deuxième article",
        contenu : "fezhfoiezhoihzeoihoiz",
        url: "http...."
    }
]

// boucle qui parourait le variable articles 

articles[i].titre