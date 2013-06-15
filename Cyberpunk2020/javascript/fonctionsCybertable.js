function cybertable()
{
	contenu = "";
	originesEtStylePersonnel();
	motivations();
	annees();
	famille();
}

/*************************************/
/* Ne fonctionne pas encore
function classeEtRole()
{
	tirage(10,tabCible,role);
	tirage(10,tabCible,nom);
}*/

function originesEtStylePersonnel()
{
	cyberTirage(10,vetements,"vetements");
	cyberTirage(10,coiffure,"coiffure");
	cyberTirage(10,signesParticuliers,"signesParticuliers");
	cyberTirage(10,originesEthniques,"originesEthniques");
}

function motivations()
{
	cyberTirage(10,traitsDeCaractere,"caractere");
	cyberTirage(10,personneQueVousAimezLePlus,"personneAimée");
	cyberTirage(10,ceQueVousTrouvezLePlusImportant,"important");
	cyberTirage(10,votrePossessionLaPlusImportante,"possession");
}

function annees()
{
	evenementsDeLaVie();
	affichage(contenu, "annees");
}

/*************************************/

function cyberTirage(dMax,tabCible,nomId)
{
	var contenu = "";
	lanceDe(dMax);
	contenu = tabCible[aleatoire-1];
	affichage(contenu, nomId);
}