/********************************************/
/*** Fonctions Evenements De La Vie ***/
/********************************************/

function evenementsDeLaVie()
{
	ajoutTexte("EVENEMENTS DE LA VIE", 0, 1, 1, 0);
	
	var i;
	var inputAge = document.getElementById("inputAge").value;
	var texte = "";
	inputAge = inputAge - 16;
	
	for (i = 0; i <= inputAge; i++)
	{
		texte = (16 + i) + "ans";
		ajoutTexte(texte, 0, 1, 1);	
		lanceDe(10);
		if (aleatoire <= 3)
			grosEnnuisGrandesReussites();
		else if (aleatoire <= 6)
			amisEtEnnemis();
		else if (aleatoire <= 8)
			vieRomantique();
		else
			ajoutTexte("Rien ne vous est arrivé", 0, 0, 1, 0);	
	}
}

/********************************************/

function grosEnnuisGrandesReussites()
{
	ajoutTexte("Gros ennuis, grandes réussites", 0, 0, 1, 1);
	lanceDe(10);
	
	if(aleatoire % 2 == 0) //si c'est pair
		grandeReussite();
	//si c'est impair ou autre
	else
	{
		grosEnnuis();
		tirage(10, quAllezVousYFaire, "Qu'allez vous y faires?");
	}
}

/********************************************/

function amisEtEnnemis()
{
	ajoutTexte("Amis et ennemis", 0, 0, 1, 1);
	lanceDe(10);
	
	if(aleatoire <= 5)
		tirage(10, vousVousFaitesUnAmi, "Vous vous faîtes un ami");
	else
	{
		tirage(10, vousVousFaitesUnEnnemi, "Vous vous faîtes un ennemi");
		lanceDe(10);
		if (aleatoire == 5)
		{
			cause();
		}
		tirage(10, quiEstLOffense, "Qui est l'offensé?");
		tirage(10, quAllezVousYFaire, "Qu'allez vous y faire?");
		tirage(10, quePeutIlContreVousOuCommentVeutILVousAvoir, "Que peut-il contre vous ou comment veut-il vous avoir?");
	}
}

/********************************************/

function vieRomantique()
{
	ajoutTexte("Vie Romantique", 0, 0, 1, 1);
	lanceDe(10);
	
	if (aleatoire <= 4)
		ajoutTexte("Histoire d'amour heureuse", 0, 0, 1, 0);
	else if(aleatoire == 5)
	{
		tirage(10, histoireDAmourTragique, "Histoire d'amour tragique");
		tirage(10, sentimentsMutuels, "Sentiments mutuels");
	}
	else if(aleatoire <= 7)
		tirage(10, histoireAmoureuseProblematique, "Histoire amoureuse problématique");
	else
		ajoutTexte("Histoire rapide et rendez-vous brûlants", 0, 0, 1, 0);
}

/********************************************/
/********************************************/
/********************************************/

function grandeReussite()
{
	lanceDe(10);
	texteCase = "";
	switch(aleatoire)
	{
		case 1:
			lanceDe(10);
			if (aleatoire <= 4)
				ajoutTexte("Vous faîtes une rencontre très utile parmi le gouvernement de la cité : C'est le chef de la police", 0, 0, 1, 0);
			else if(aleatoire <= 7)
				ajoutTexte("Vous faîtes une rencontre très utile parmi le gouvernement de la cité : C'est le procureur général", 0, 0, 1, 0);
			else
				ajoutTexte("Vous faîtes une rencontre très utile parmi le gouvernement de la cité : quelqu'un au bureau du maire", 0, 0, 1, 0);
			break;
		case 2:
			lanceDe(10);
			texteCase = "Rentrée financière : vous gagnez " + (lanceDe(10) * 100)+ " en Eurodollars";
			ajoutTexte(texteCase, 0, 0, 1, 0);
			break;
		case 3:
			lanceDe(10);
			texteCase = "Vous faites une grosse affaire : vous gagnez " + (lanceDe(10) * 100)+ " en Eurodollars";
			ajoutTexte(texteCase, 0, 0, 1, 0);
			break;
		case 4:
			ajoutTexte("Vous rencontrez un Sensei (professeur). Commencez un art martial à +2 ou ajoutez +1 à celui que vous pratiquez (au choix)", 0, 0, 1, 0);
			break;
		case 5:
			ajoutTexte("Vous rencontrez un professeur : ajoutez +1 à une compétence d'INT ou commancez-en une nouvelle à +2", 0, 0, 1, 0);
			break;
		case 6:
			ajoutTexte("Un dirigeant puissant de Corporation vous doit une faveur", 0, 0, 1, 0);
			break;
		case 7:
			ajoutTexte("Une Horde Nomade locale vous trouve sympathique. Vous pouvez faire appel à eux pour une faveur par mois, avec l'équivalent d'une Aptitude Spéciale de la Famille à +2", 0, 0, 1, 0);
			break;
		case 8:
			ajoutTexte("Vous vous faites un ami chez la police. Vous pouvez lui demander des renseignements sur toute affaire en cour avec une compétence Connaissance de la rue à +2", 0, 0, 1, 0);
			break;
		case 9:
			ajoutTexte("Un boostergang vous aime bien (allez savoir pourquoi, après tout ce sont des Déglingués, non ?). Vous pouvez obtenir d'eux une faveur Spéciale de la Famille de +2. Mais ne les brusquez pas", 0, 0, 1, 0);
			break;
		case 10:
			ajoutTexte("Vous rencontrez un instructeur de combat. Ajoutez +1 à toute compétence de combat sauf Art martial et lutte ou commencez-en une nouvelle à +2", 0, 0, 1, 0);
			break;
		default:
			ajoutTexte("Résultat non reconnu", 0, 0, 1, 0);
			break;
	}
}

/********************************************/
/********************************************/
/********************************************/

function grosEnnuis()
{
	lanceDe(10);
	texteCase = "";
	switch(aleatoire)
	{
		case 1:
			lanceDe(10);
			texteCase = "Perte financière ou dette : Vous avez perdu " + (aleatoire * 100)+ " en Eurodollars. Si vous ne pouvez payer tout de suite, vous avez une dette à payer en argent ou de votre sang.";
			ajoutTexte(texteCase, 0, 0, 1, 0);
			break;
		case 2:
			lanceDe(10);
			texteCase = "Emprisonnement : vous avez été incarcéré ou peut-être envelevé. Votre période de captivité a duré " + aleatoire + " mois";
			ajoutTexte(texteCase, 0, 0, 1, 0);
			break;
		case 3:
			ajoutTexte("Maladie ou dépendance : vous avez contracté une maladie ou êtes devenu accro à une drogue. Vous perdez un point de REF permanent", 0, 0, 1, 0);
			break;		
		case 4:
			lanceDe(10);
			if (aleatoire <= 3)
				ajoutTexte("Trahison : quelqu'un vous a poignardé dans le dos d'une façon ou d'une autre. On vous fait chanter.", 0, 0, 1, 0);
			else if(aleatoire <= 7)
				ajoutTexte("Trahison : quelqu'un vous a poignardé dans le dos d'une façon ou d'une autre. Un secret a été dévoilé. ", 0, 0, 1, 0);
			else
				ajoutTexte("Trahison : quelqu'un vous a poignardé dans le dos d'une façon ou d'une autre. Vous avez été trahi par un ami très proche soit dans le travail, soit en amour (choisissez).", 0, 0, 1, 0);
			break;
		case 5:
			lanceDe(10);
			if (aleatoire <= 4)
				ajoutTexte("Accident : vous avez été défiguré et perdez 5 à votre BT. ", 0, 0, 1, 0);
			else if(aleatoire <= 6)
			{
				lanceDe(10);
				texteCase = "Accident : vous avez eu un accident terrible. Vous avez été hospitalisé durant " + aleatoire + " mois cette année.";
				ajoutTexte(texteCase, 0, 0, 1, 0);
			}
			else if(aleatoire <= 8)
			{
				lanceDe(10);
				texteCase = "Accident : vous avez eu un accident terrible. Vous avez perdu " + aleatoire + " mois de mémoire cette année.";
				ajoutTexte(texteCase, 0, 0, 1, 0);
			}
			else
				ajoutTexte("Accident : vous avez eu un accident terrible. Vous avez constamment des cauchemards (8 chances sur 10 chaque nuit) rappellant l'accident et vous vous réveillez en hurlant.", 0, 0, 1, 0);
			break;
		case 6:
			lanceDe(10);
			if (aleatoire <= 5)
				ajoutTexte("Un amant, une maîtresse ou un proche a été tué : vous avez perdu quelqu'un à qui vous teniez réellement. La mort est accidentelle.", 0, 0, 1, 0);
			else if(aleatoire <= 8)
				ajoutTexte("Un amant, une maîtresse ou un proche a été tué : vous avez perdu quelqu'un à qui vous teniez réellement. La personne a été victime d'assassins inconnus.", 0, 0, 1, 0);
			else
				ajoutTexte("Un amant, une maîtresse ou un proche a été tué : vous avez perdu quelqu'un à qui vous teniez réellement. Vous connaissez les assassins, il ne vous manque que des preuves.", 0, 0, 1, 0);
			break;
		case 7:
			lanceDe(10);
			if (aleatoire <= 3)
				ajoutTexte("Fausse accusation : on vous a tendu un piège. Vous êtes accusé de vol.", 0, 0, 1, 0);
			else if(aleatoire <= 5)
				ajoutTexte("Fausse accusation : on vous a tendu un piège. Vous êtes accusé de lâcheté.", 0, 0, 1, 0);
			else if(aleatoire <= 7)
				ajoutTexte("Fausse accusation : on vous a tendu un piège. Vous êtes accusé de meurtre.", 0, 0, 1, 0);
			else if(aleatoire <= 9)
				ajoutTexte("Fausse accusation : on vous a tendu un piège. Vous êtes accusé de viol.", 0, 0, 1, 0);
			else
				ajoutTexte("Fausse accusation : on vous a tendu un piège. Vous êtes accusé de mensonge ou traitrise.", 0, 0, 1, 0);
			break;
		case 8:
			lanceDe(10);
			if (aleatoire <= 3)
				ajoutTexte("Poursuivi par la loi : vous êtes poursuivi pour des crimes que vous avez ou n'avez peut-être pas commis (choisissez). Seuls quelque flics de quartier sont après vous.", 0, 0, 1, 0);
			else if(aleatoire <= 6)
				ajoutTexte("Poursuivi par la loi : vous êtes poursuivi pour des crimes que vous avez ou n'avez peut-être pas commis (choisissez). Le commissariat entier est après vous.", 0, 0, 1, 0);
			else if(aleatoire <= 8)
				ajoutTexte("Poursuivi par la loi : vous êtes poursuivi pour des crimes que vous avez ou n'avez peut-être pas commis (choisissez). C'est la police d'état ou la milice qui est après vous.", 0, 0, 1, 0);
			else
				ajoutTexte("Poursuivi par la loi : vous êtes poursuivi pour des crimes que vous avez ou n'avez peut-être pas commis (choisissez). C'est le F.B.I. ou une force de police nationale équivalente qui est après vous.", 0, 0, 1, 0);
			break;
		case 9:
			lanceDe(10);
			if (aleatoire <= 3)
				ajoutTexte("Poursuivi par une Corporation : vous avez rendu fou de rage un dirigeant de corporation. C'est une petite firme locale.", 0, 0, 1, 0);
			else if(aleatoire <= 6)
				ajoutTexte("Poursuivi par une Corporation : vous avez rendu fou de rage un dirigeant de corporation. C'est une corporation avec des bureaux dans tous les états.", 0, 0, 1, 0);
			else if(aleatoire <= 8)
				ajoutTexte("Poursuivi par une Corporation : vous avez rendu fou de rage un dirigeant de corporation. C'est une grosse cororation nationnale avec des agents dans les grandes villes du pays.", 0, 0, 1, 0);
			else
				ajoutTexte("Poursuivi par une Corporation : vous avez rendu fou de rage un dirigeant de corporation. C'est une multinationale tentaculaire avec une armée secrète, des ninjas et des espions partout", 0, 0, 1, 0);
			break;
		case 10:
			lanceDe(10);
			if (aleatoire <= 3)
				ajoutTexte("Handicap physique ou mental : vous avez subi un effondrement mental ou physique. Type de désordre nerveux, probablement dû à une biopeste. Vous perdez un point de SF permanent.", 0, 0, 1, 0);
			else if(aleatoire <= 7)
				ajoutTexte("Handicap physique ou mental : vous avez subi un effondrement mental ou physique. Vous avez manifestement un problème mental, vous avez des montées d'angoisse et des phobies. Vous perdez un point de SA permanent", 0, 0, 1, 0);
			else
				ajoutTexte("Handicap physique ou mental : vous avez subi un effondrement mental ou physique. C'est une psychose majeure. Vous entendez des voix, êtes violent, irrationnel et dépressif. Vous perdez un point de REF et de SF permanent", 0, 0, 1, 0);
			break;
		default:
			ajoutTexte("Résultat non reconnu", 0, 0, 1, 0);
			break;
	}
}

/********************************************/
/********************************************/
/********************************************/

function cause()
{
	lanceDe(6);
	if (aleatoire <= 2)
		ajoutTexte("La cause : 5 - A causé à l'autre un handicap physique : La perte d'un oeil.", 0, 0, 1, 0);
	else if(aleatoire <= 4)
		ajoutTexte("La cause : 5 - A causé à l'autre un handicap physique : La perte d'un bras.", 0, 0, 1, 0);
	else
		ajoutTexte("La cause : 5 - A causé à l'autre un handicap physique : Une affreuse cicatrice.", 0, 0, 1, 0);
}