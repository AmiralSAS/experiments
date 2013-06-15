/********************************************/
/*** Fonctions Background-Falilial ***/
/********************************************/

function famille()
{
	cyberTirage(10, niveauFamilial, "niveauFamilial");
	lanceDe(10);
	//Si parent en vie
	if(aleatoire <= 6)
	{
		texte = "Vos parents sont en vie";
		affichage(texte, "parents")
	}
	//Si quelque chose est arrivé aux parents
	else
		cyberTirage(10, quelqueChoseEstArriveAVosParents, "parents");
	
	statutFamilial();
	frereSoeur();
}

/********************************************/

function statutFamilial()
{
	lanceDe(10)
	if(aleatoire <= 6)
	{
		tirage(10, tragedieFamiliale);
		affichage(contenu, "tragedieFamiliale");
	}
	else
		affichage("Pas de tragédie familiale", "tragedieFamiliale");
	cyberTirage(10, environnementDEnfance, "environnementDEnfance");
}

/********************************************/

function frereSoeur()
{
	texte = "";
	lanceDe(10);
	aleatoireFrereSoeur = aleatoire;
	
	if(aleatoireFrereSoeur <= 7)
	{
		contenu = "Vous avez " + aleatoireFrereSoeur + " frère(s) et/ou soeur(s) <br />";
		i=0;
		for (i ; i < aleatoireFrereSoeur ; i++)
		{
			contenu += "- - - - - - - -";
			contenu += "<br />";
			contenu += "C'est un(e) ";
			tirage(10, frereOuSoeur);
			contenu += "<br /> Qui est ";
			tirage(10, ageFrereEtSoeur);
			contenu += "<br />";
			tirage(10, sentimentsPourLePerso);
			contenu += "<br />";
		}
		affichage(contenu, "freresEtSoeurs");
	}
	else
		affichage("Fils ou fille unique", "freresEtSoeurs");
}