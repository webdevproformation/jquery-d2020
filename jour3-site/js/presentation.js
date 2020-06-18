// dans le fichier presentation.js 
// générer 10 articles => boucle
/*
    <div>
        <img src="https://via.placeholder.com/400x200" alt="">
        <p>projet 1</p>
    </div>

    injecter dans la balise section via jquery 
*/
// remplir la balise section dans la page presentation.html

let contenu = "";
for(let i = 0 ; i < 10 ; i++){
    contenu += "<div>";
    contenu += "<img src=\"https://via.placeholder.com/400x200\" alt=\"\">";
    contenu += " <p>projet "+ (i + 1)+"</p>";
    contenu += "</div>";
};

$("section").html(contenu).addClass("presentation");


