/********************************************/
/*** Fonctions principale ***/
/********************************************/
var contenu = "";
var tour=1;
var j=0;
var libelleTour="";

function main()
{
	libelleTour = "Tour " + tour;
	affichage(libelleTour, "tour");
	
	passeTour();
	tour=tour+1;
}

function passeTour()
{
	j=0;
	while (j<20)
	{
		switch(cercle[j])
		{
			case "Fermé":
				cercle[j]="Ouvert";
				contenu = "<span class='rouge'>" + cercle[j] + "</span>";
				break;
			case "Ouvert":
				cercle[j]="Fermé";
				contenu = "<span class='bleu'>" + cercle[j] + "</span>";
				break;
			default:
				contenu = "erreur";
				break;
		}
		affichage(contenu, j);
		j = j + tour;
	}
}

function efface()
{
	tour=0;
	libelleTour = "Tour " + tour;
	affichage(libelleTour, "tour");
	
	j=0;
	contenu = "";
	for (j;j<20;j++)
	{
		cercle[j]="Fermé";
		contenu = "<span class='bleu'>Fermé</span>";
		affichage(contenu, j);
	}
	contenu = "";
	tour=1;
	j=0;
	libelleTour="";
}