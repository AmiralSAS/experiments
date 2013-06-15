var vide=new Array(
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"");

// Variables globale
var contenu = "";
var aleatoire = 0;

//
// TABLEAUX DE DONNES
//
// 1) ORIGINES ET STYLE PERSONNEL
//
// HABILLEMENT ET STYLE PERSONNEL
//

var vetements=new Array(
	"Cuir de motard",
	"Blue jeans",
	"Costume corpo",
	"Treillis para",
	"Minijupe",
	"Armure",
	"Cammoufflé",
	"Normaux",
	"Totalement nu",
	"Haillons Hippie");

var coiffure=new Array(
	"Mohawk",
	"Long, ébouriffé",
	"Court, brosse",
	"Hirsute, abondant",
	"Chauve",
	"Rasé en bandes",
	"Teints",
	"Soigné, court",
	"Court, bouclé",
	"Long, raide");

var signesParticuliers=new Array(
	"Tatouages",
	"Lunettes miroir",
	"Cicatrices rituelles",
	"Gants cloutés",
	"Anneau nasal",
	"Boucles d'oreilles",
	"Ongles longs",
	"Bottes talon aiguille",
	"Lentilles étranges",
	"Mitaines");

//
// ORIGINES ETHNIQUES
//

var originesEthniques=new Array(
	"Anglo-américain (Anglais)",
	"Africain (Bantou, Fante, Congo, Ashanti, Zoulou, Swahili",
	"Japonais/Coréen (Japonais ou Coréen)",
	"Europe centrale/URSS (Bulgare, Russe, Tchèque, Polonais, Ukrainien, Slovaque)",
	"Iles pacifique (Micronésien, Tagalog, Polynésien, Malais, Indonésien, Hawaïen)",
	"Chine/Asie Sud Est (Birman, Contonnais, Mandarin, Thai, Tibétain, Vietnamien)",
	"Américain Noir (Anglais, Blackfolk)",
	"Hispano-américain (Espagnol, Anglais)",
	"Amérique centrale/du sud (Espagnol, Portugais)",
	"Européen (Français, Allemand, Anglais, Espagnol, Italien, Grec, Danois, Néerlandais, Suédois, Finnois)");
	
//
// 2 BACKGROUND FAMILIAL
//

var niveauFamilial=new Array(
	"Président de Corporation",
	"Directeur de Corporation",
	"Technicien de Corporation",
	"Horde Nomade",
	"Flotte pirate",
	"Gang familial",
	"Caïd de la pègre",
	"Pauvre de la Zone de Combat",
	"Déshérité urbain",
	"Famille de Bloc-Hommes");
/*
var parents=new Array(
	"Les deux sont vivants. Allez à STATUT FAMILIAL",
	"Les deux sont vivants. Allez à STATUT FAMILIAL",
	"Les deux sont vivants. Allez à STATUT FAMILIAL",
	"Les deux sont vivants. Allez à STATUT FAMILIAL",
	"Les deux sont vivants. Allez à STATUT FAMILIAL",
	"Les deux sont vivants. Allez à STATUT FAMILIAL",
	"Quelque chose est arrivé à l'un ou aux deux. Allez à QUELQUE EST ARRIVE A VOS PARENTS",
	"Quelque chose est arrivé à l'un ou aux deux. Allez à QUELQUE EST ARRIVE A VOS PARENTS",
	"Quelque chose est arrivé à l'un ou aux deux. Allez à QUELQUE EST ARRIVE A VOS PARENTS",
	"Quelque chose est arrivé à l'un ou aux deux. Allez à QUELQUE EST ARRIVE A VOS PARENTS");
*/
var quelqueChoseEstArriveAVosParents=new Array(
	"Votre ou vos parent(s) décédé(s) lors d'une guerre",
	"Décès lors d'un accident",
	"Votre ou vos parent(s) a (ont) été assassiné(s)",
	"Votre ou vos parent(s) souffre(ent) d'amnésie et ne se souvient(iennent) plus de vous",
	"Vous n'avez jamais connu votre ou vos parent(s)",
	"Votre ou vos parent(s) se cache(ent) pour vous protéger",
	"Vous avez été confié à des amis pour votre salut",
	"Vous êtes né dans la rue et n'avez jamais eu de parents",
	"Votre ou vos parent(s) vous a (ont) abandonné à l'adoption",
	"Votre ou vos parent(s) vous a (ont) vendu à la naissance");
/*	
var statutFamilial=new Array(
	"Votre statut familial est menacé, et vous risquez de tout perdre (si ce n'est pas déjà fait). Allez à TRAGEDIE FAMILIALE.",
	"Votre statut familial est menacé, et vous risquez de tout perdre (si ce n'est pas déjà fait). Allez à TRAGEDIE FAMILIALE.",
	"Votre statut familial est menacé, et vous risquez de tout perdre (si ce n'est pas déjà fait). Allez à TRAGEDIE FAMILIALE.",
	"Votre statut familial est menacé, et vous risquez de tout perdre (si ce n'est pas déjà fait). Allez à TRAGEDIE FAMILIALE.",
	"Votre statut familial est menacé, et vous risquez de tout perdre (si ce n'est pas déjà fait). Allez à TRAGEDIE FAMILIALE.",
	"Votre statut familial est menacé, et vous risquez de tout perdre (si ce n'est pas déjà fait). Allez à TRAGEDIE FAMILIALE.",
	"Votre statut familial est convenable, même si vos parents ont disparu ou sont morts. Allez à ENVIRONNEMENT D'ENFANCE",
	"Votre statut familial est convenable, même si vos parents ont disparu ou sont morts. Allez à ENVIRONNEMENT D'ENFANCE",
	"Votre statut familial est convenable, même si vos parents ont disparu ou sont morts. Allez à ENVIRONNEMENT D'ENFANCE",
	"Votre statut familial est convenable, même si vos parents ont disparu ou sont morts. Allez à ENVIRONNEMENT D'ENFANCE");
*/	
var tragedieFamiliale=new Array(
	"Votre famille a tout perdu à la suite d'une trahison",
	"Votre famille a tout perdu à cause d'une mauvaise gestion",
	"Votre famille s'est exilée ou a été écartée de ses attaches",
	"Votre famille est en prison et vous seul vous êtes échappé",
	"Votre famille s'est éteinte et vous en êtes le dernier représentant",
	"Votre famille a été tuée ou assassinée et vous êtes le seul survivant",
	"Votre famille est impliquée dans un complot à longue échéance au sein d'une association, d'une association, d'une organisation comme un gang familial ou un groupe révolutionnaire",
	"Votre famille s'est dispersée aux quatre vents à la suite d'un destin funeste",
	"Votre famille perpétue une vendetta qui dure depuis des générations",
	"Vous êtes l'héritier d'une dette de famille et devez vous en acquitter avant de vous lancer dans la vie");

var environnementDEnfance=new Array(
	"Dans la rue, sans la surveillance d'un adulte",
	"Dans un quartier sûr des Corporations",
	"Au sein d'une Horde Nomade allant de ville en ville",
	"Dans un quartier en ruine, autrefois huppé",
	"Dans une zone protégée des Corporations du centre-ville",
	"En plein coeur d'une zone de combat",
	"Dans un petit village ou une petite ville loin de la Cité",
	"Dans une grande arcologie",
	"Au sein d'une bande de pirates des mers",
	"Dans une ferme expérimentale d'une Corporation");
	
// Freres et soeurs
// Age par rapport à vous-même :

var nombreDeFrereEtSoeur=new Array(
	"1 frère ou soeur",
	"2 frère ou soeur",
	"3 frère ou soeur",
	"4 frère ou soeur",
	"5 frère ou soeur",
	"6 frère ou soeur",
	"7 frère ou soeur",
	"Fils ou fille unique",
	"Fils ou fille unique",
	"Fils ou fille unique");

var frereOuSoeur=new Array(
	"Soeur",
	"Frère",
	"Soeur",
	"Frère",
	"Soeur",
	"Frère",
	"Soeur",
	"Frère",
	"Soeur",
	"Frère");
	
var ageFrereEtSoeur=new Array(
	"Plus âgé",
	"Plus âgé",
	"Plus âgé",
	"Plus âgé",
	"Plus âgé",
	"Plus jeune",
	"Plus jeune",
	"Plus jeune",
	"Plus jeune",
	"Jumeaux");
	
var sentimentsPourLePerso=new Array(
	"Ne vous aime pas",
	"Ne vous aime pas",
	"Vous aime bien",
	"Vous aime bien",
	"Vous est indifférent",
	"Vous est indifférent",
	"Vous considèrent comme un véritable héros",
	"Vous considèrent comme un véritable héros",
	"Vous haïssent de tout leur coeur",
	"Vous haïssent de tout leur coeur");

//
// 3 MOTIVATIONS
//
	
var traitsDeCaractere=new Array(
	"Timide et secret",
	"Rebelle, antisocial et violent",
	"Arrogant, fier et orgueilleux",
	"Instable, désagréable et forte-tête",
	"Susceptible, difficile et nerveux",
	"Stable et sérieux",
	"Stupide et tête en l'air",
	"Mauvais et déloyal",
	"Intellectuel et détaché",
	"Amical et entreprenant");

var personneQueVousAimezLePlus=new Array(
	"un parent",
	"un frère ou une soeur",
	"un amant ou une autre maîtresse",
	"un(e) ami(e)",
	"vous-même",
	"un animal familier",
	"un professeur ou un instructeur",
	"un personnage public",
	"un héros personnel",
	"personne");
	
var ceQueVousTrouvezLePlusImportant=new Array(
	"L'argent",
	"L'honneur",
	"Votre parole",
	"L'honnêteté",
	"Le savoir",
	"La vengeance",
	"L'amour",
	"Le pouvoir",
	"S'amuser",
	"L'amitié");

var votrePossessionLaPlusImportante=new Array(
	"Une arme",
	"Un outil",
	"Un vêtement",
	"Une photo",
	"Un livre ou un journal personnel",
	"Un enregistrement",
	"Un instrument de musique",
	"Un bijou",
	"Un jouet",
	"Une lettre");

var queRessentezVousALEgardDesGens=new Array(
	"Indifférent",
	"Indifférent",
	"Vous aimez presque tout le monde",
	"Vous haïssez presque le monde entier",
	"Les gens sont des marionnettes. Servez-vous deux pour atteindre votre but, puis laissez-les tomber",
	"Chaque individu a sa valeur",
	"Les gens sont des obstacles à abattre s'ils se mettent en travers de votre chemin",
	"On ne peut compter sur personne. Il ne faut dépendre de quiconque",
	"Balayez-les tous et laissez la place aux cafards",
	"Les gens sont merveilleux");

// 4 EVENEMENTS DE LA VIE
//
// 4a) Gros ennuis, grandes réussites
//

var leDesastreFrappe=new Array(
	"Perte financière ou dette : lancez 1D10x100. Vous avez perdu cette somme eu Eurodollars. Si vous ne pouvez payer tout de suite, vous avez une dette à payer en argent ou de votre sang.",
	"Emprisonnement : vous avez été incarcéré ou peut-être enlevé. Lancez un D10 pour la longueur en mois de votre captivité",
	"Maladie ou dépendance : vous avez contracté une maladie ou êtes devenu accro à une drogue. Vous perdez point de REF permanent.",
	"Trahison : quelqu'un vous a poignardé dans le dos d'une façon ou d'une autre. Relancez un D10. 1-3 on vous fait changer. 4-7 un secret a été dévoilé. 8-10 vous avez été trahi par un ami très proche soit dans le travail, soit en amour (choisissez)",
	"Accident : vous avez eu un accident terrible. Lancez 1D10. 1-4 vous avez été défiguré et perdez 5 à votre BT. 5-6 viys avez été hospitalisé durant 1D10 mois cette année. 7-8 vous avez perdu 1D10 mois de mémoire cette année. 9-10 vous avez constament des cauchemards (8 chances sur 10 chaque nuit) rappellant l'accident et vous vous réveillez en hurlant",
	"Un amant, une maîtresse ou un proche a été tué : vous avez perdu quelqu'un à qui vous teniez réellement. 1-5 la mort est accidentelle. 6-8 la personne a été victime d'assassins inconnus. 9-10 vous connaissez les assassins, il ne vous manque que des preuves",
	"Fausse accusation : on vous a tendu un piège. Lancez 1D10. 1-3 vous êtes accusé de vol. 4-5 lâcheté. 6-7 meurtre. 8-9 viol. 10 mensonge ou traitrise",
	"Poursuivi par la loi : vous êtes poursuivi pour des crimes que vous avez ou n'avez peut-être pas commis (choisissez). Lancez 1D10. 1-3 seuls quelques flics de quartier sont après vous. 4-6 il s'agit du commissariat entier. 7-8 c'est la police d'état ou la milice. 9-10 c'est le F.B.I ou une force de police nationale équivalente",
	"Poursuivi par une Corporation : vous avez rendu fou de rage un dirigeant de corporation. Lancez 1D10. 1-3 c'est une petite firme locale. 4-6 c'est une corporation avec des bureaux dans tous les états. 7-8 c'est une grosse corporation nationale avec des agents dans les grandes villes du pays. 9-10 c'est une multinationale tentaculaire avec une armée secrète, des ninjas et des espions partout",
	"Handicap physique ou mental : vous avez subi un effondrement mental ou physique. Lancez 1D10. 1-3 type de désordre nerveux, probablement dû à une biopeste. Vous perdez un point de SF permanent. 4-7 vous avez manifestement un problème mental, vous avez des montées d'angoisse et des phobies. Vous perdez un point de SA permanent. 8-10 c'est une psychose majeure. Vous entendez des voix, êtes violent, irrationnel et dépressif. Vous perdez un point de REF et de permanent.");

var quAllezVousYFaire=new Array(
	"Réhabiliter votre nom",
	"Réhabiliter votre nom",
	"Laisser tomber et essayer d'oublier",
	"Laisser tomber et essayer d'oublier",
	"Poursuivre les responsables et les faire payer",
	"Poursuivre les responsables et les faire payer",
	"Reprendre ce qui vous appartient de droit",
	"Reprendre ce qui vous appartient de droit",
	"Sauver, si possible, toute autre personne impliquée dans la situation",
	"Sauver, si possible, toute autre personne impliquée dans la situation");

var vousAvezDeLaChance=new Array(
	"Vous faites une rencontre très utile parmi le gouvernement de la Cité. Lancez 1D10. 1-4 c'est le chef de la police. 5-7 c'est le procureur général. 8-10 quelqu'un au bureau du Maire.",
	"Rentrée financière : Lancez 1D10x100. Vous gagnez cette somme en Eurodollars.",
	"Vous faites une grosse affaire : Lancez 1D10x100. Vous gagnez cette somme en Eurodollars.",
	"Vous rencontrez un Sensei (professeur). Commencez un art martial à +2 ou ajoutez +1 à celui que vous pratiquez (au choix)",
	"Vous rencontrez un professeur : ajoutez +1 à une compétence d'INT ou commancez-en une nouvelle à +2",
	"Un dirigeant puissant de Corporation vous doit une faveur",
	"Une Horde Nomade locale vous trouve sympathique. Vous pouvez faire appel à eux pour une faveur par mois, avec l'équivalent d'une Aptitude Spéciale de la Famille à +2",
	"Vous vous faites un ami chez la police. Vous pouvez lui demander des renseignements sur toute affaire en cour avec une compétence Connaissance de la rue à +2",
	"Un boostergang vous aime bien (allez savoir pourquoi, après tout ce sont des Déglingués, non ?). Vous pouvez obtenir d'eux une faveur Spéciale de la Famille de +2. Mais ne les brusquez pas",
	"Vous rencontrez un instructeur de combat. Ajoutez +1 à toute compétence de combat sauf Art martial et lutte ou commencez-en une nouvelle à +2");
	
//
// 4b) Amis & ennemis
//

var vousVousFaitesUnEnnemi=new Array(
	"Un ex-ami",
	"Un(e) ex-amant(maîtresse)",
	"Un membre de la famille",
	"Un ennemi d'enfance",
	"Une personne travaillant pour vous",
	"Une personne pour qui vous travaillez",
	"Un partenaire ou un collègue",
	"Un membre de gang",
	"Un dirigeant de Corporation",
	"Un personnage officiel du gouvernement");

var laCause=new Array(
	"A fait perdre la face ou son statut à l'autre",
	"A fait perdre à l'autre un amant, une maîtresse, un parent ou un ami",
	"A causé à l'autre une lourde humiliation",
	"A accusé la'utre de lâcheté ou de tout autre vice",
	"A causé à l'autre un handicap physique (lancez un D6. 1-2=perte d'un oeil, 3-4= perte d'un bras, 5-6= affreuse cicatrice)",
	"A déserté ou trahi l'autre",
	"A fait échoué une possibilité d'embauche",
	"A fait échoué un tentative amoureuse",
	"Est devenu un rival amoureux",
	"A fait échoué le plan de l'autre");
	
var quiEstLOffense=new Array(
	"Il ou elle vous hait",
	"Il ou elle vous hait",
	"Il ou elle vous hait",
	"Il ou elle vous hait",
	"Vous le ou la haïssez",
	"Vous le ou la haïssez",
	"Vous le ou la haïssez",
	"Le sentiment est mutuel",
	"Le sentiment est mutuel",
	"Le sentiment est mutuel");

var quAllezVousYfaire=new Array(
	"Entrer dans une rage meurtrière et d'arracher le visage de l'autre",
	"Entrer dans une rage meurtrière et d'arracher le visage de l'autre",
	"Eviter l'insignifiant individu",
	"Eviter l'insignifiant individu",
	"Le poignarder indirectement",
	"Le poignarder indirectement",
	"Ignorer l'insignifiant individu",
	"Ignorer l'insignifiant individu",
	"Le crucifier verbalement",
	"Le crucifier verbalement");

var quePeutIlContreVousOuCommentVeutILVousAvoir=new Array(
	"Lui tout seul",
	"Lui tout seul",
	"Lui tout seul",
	"Lui et ses potes",
	"Lui et ses potes",
	"Avec tout un gang",
	"Avec tout un gang",
	"Par une petite corpo",
	"Par une Megacorporation",
	"Par le gouvernement");
	
var vousVousFaitesUnAmi=new Array(
	"Comme un grand frère ou une grande soeur pour vous",
	"Comme un petit frère ou une petite soeur pour vous",
	"Un partenaire",
	"Un collègue",
	"Un ex-amant ou une ex-maîtresse",
	"Un ancien ennemi (choisissez lequel)",
	"Comme un parent éloigné pour vous",
	"Un membre de votre famille, un proche",
	"Vous reliez avec un ancien ami d'enfance",
	"Vous vous rencontrez grâce à un intérêt commun");

//
// 4c) Vie romantique
//
	
var deroulement=new Array(
	"Histoire d'amour heureuse (retournez aux Evènements de la Vie)",
	"Histoire d'amour heureuse (retournez aux Evènements de la Vie)",
	"Histoire d'amour heureuse (retournez aux Evènements de la Vie)",
	"Histoire d'amour heureuse (retournez aux Evènements de la Vie)",
	"Histoire d'amour tragique",
	"Histoire d'amour problématique",
	"Histoire d'amour problématique",
	"Histoire d'amour rapide et rendez-vous brûlants (retourvez aux EVENEMENTS DE LA VIE",
	"Histoire d'amour rapide et rendez-vous brûlants (retourvez aux EVENEMENTS DE LA VIE",
	"Histoire d'amour rapide et rendez-vous brûlants (retourvez aux EVENEMENTS DE LA VIE");
	
var histoireDAmourTragique=new Array(
	"Personne aimée est morte dans un accident",
	"Personne aimée a disparu mysterieusement",
	"Cela n'a pas collé entre vous",
	"Un but personnel ou une vendetta vous a séparés",
	"Personne aimée a été kidnappée",
	"Personne aimée a perdu la raison",
	"Personne aimée s'est suicidée",
	"Personne aimée tuée lors d'un combat",
	"Un ou une rival(e) a pris votre place",
	"Personne aimée a été incarcérée ou s'est exilée");
	
var histoireAmoureuseProblematique=new Array(
	"Les amis ou la famille de la personne aimée vous haïssent",
	"Les amis ou la famille de la personne aimée utiliseraient tous les moyens possibles pour se débarasser de vous",
	"Vos amis ou votre famille haïssent la personne que vous aimez",
	"L'un de vous a un rival romantique",
	"Vous êtes séparés d'une façon ou d'une autre",
	"Vous n'arrêtez pas de vous battre",
	"Vous êtes des rivaux professionnels",
	"L'un de vous est d'une jalousie maladive",
	"L'un de vous commence à chercher ailleurs",
	"Vous avez des antécédents familliaux conflictuels");

var sentimentsMutuels=new Array(
	"Personnée aimée vous aime toujours",
	"Vous l'aimez toujours",
	"Vous vous aimez toujours",
	"Vous la haïssez",
	"Elle vous hait",
	"Vous vous haïssez mutuellement",
	"Vous êtes restés amis",
	"Plus de sentiment des deux côtés, c'est fini",
	"Vous l'aimez mais il ou elle vous hait",
	"Elle ou il vous aime mais vous le ou la haïssez");