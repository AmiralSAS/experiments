/********************************************/
/*** Fonctions brique ***/
/********************************************/

function tirage(dMax,tabCible,nomTab)
{	
	lanceDe(dMax);
	contenu = contenu + "<p><span class='indent'>" + nomTab + " : ";
	contenu = contenu + aleatoire + " - " + tabCible[aleatoire-1] + "</span></p>";
}

function lanceDe(dMax)
{
	aleatoire = 0;
	aleatoire = Math.ceil( Math.random() * dMax);
}

function modulo(aleatoire)
{
	aleatoire = aleatoire % 2;
}

function ajoutTexte(texte, titreh4, titreh5, indentation, souligne)
{
	if (titreh4 == 1)
		contenu = contenu + "<h4>";
	if (titreh5 == 1)
		contenu = contenu + "<h5>";
	if (souligne == 1)
		contenu = contenu + "<span class='souligne'>";
	if (indentation == 1)
		contenu = contenu + "<span class='indent'>";
	
	contenu = contenu + texte;
	
	if (indentation == 1)
		contenu = contenu + "</span>";
	if (souligne == 1)
		contenu = contenu + "</span>";
	if (titreh5 == 1)
		contenu = contenu + "</h5>";
	if (titreh4 == 1)
		contenu = contenu + "</h4>";
}

/********************************************/
/*** Fonction d'affichage ***/
/********************************************/

function affichage(text, id)
{
	var d = document.getElementById(id);
	d.innerHTML = text;
}