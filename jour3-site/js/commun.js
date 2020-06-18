// dans ce fichier 
// générer deux parties de toutes les pages

// remplir header et footer de toutes les pages !

let entete = "<img src=\"https://via.placeholder.com/150x50\" alt=\"\" >"; 
    entete += "<ul>";
    entete += "<li><a href=\"index.html\">Accueil</a></li>";
    entete += "<li><a href=\"presentation.html\">Présentation</a></li>";
    entete += "<li><a href=\"contact.html\">Contact</a></li>";
    entete += "</ul>";

$("header").html(entete);

// 4 lorsque l'on clique sur le logo afficher / masquer le menu

$("header img")
    .mouseenter(function(e){
        $(e.target).addClass("move");
        $(e.target).next().toggle();
    })
    .mouseout(function(e){
        $(e.target).removeClass("move");
        $(e.target).next().toggle();
    });


// effet disponible disponible sur les trois pages 
// transform 

// prenom et année en cours dans le pied de page

let pied = "Malik - "+ (new Date()).getFullYear();

$("footer").html(pied);


// dans le fichier index.js 
// générer 10 articles => boucle
/*
    <div>
        <h2>Article 1</h2>
        <img src="https://via.placeholder.com/300x200" alt="">
        <p>lorem</p>
    </div>

    injecter dans la balise section via jquery 
*/

// dans le fichier presentation.js 
// générer 10 articles => boucle
/*
    <div>
        <img src="https://via.placeholder.com/400x200" alt="">
        <p>projet 1</p>
    </div>

    injecter dans la balise section via jquery 
*/
