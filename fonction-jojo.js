function random() { //Fonction qui définit la combinaison à trouver, il la stocke dans un tableau reference
    var random1 = Math.floor((Math.random() * 4) + 1);
    var random2 = Math.floor((Math.random() * 4) + 1);
    var random3 = Math.floor((Math.random() * 4) + 1);
    var random4 = Math.floor((Math.random() * 4) + 1);
    var reference = [random1, random2, random3, random4];
    return reference;
}
function gagner(reference, chiffre) { //Fonction qui vérifie si l'utilisateur a gagné
    if (reference == chiffre) {
        return true;
    }
    return false;
}
function terminer(reference, chiffre, tentativemax, tentative) { //Si cette fonction ressort true, le jeu s'arrête et est terminé, sinon ca sort false et la boucle while dans la fonction jeu continue
    if (gagner(reference, chiffre) == true) { //Si la fonction gagner sort true, l'utilisateur a trouvé la bonne réponse
        return true;
}
    if (tentative > tentativemax) { //Nombre de tentatives maximum dépassé
        return true;
}
    return false;
}
function jeu() { //Fonction globale du jeu
    var reference=random(); //Reprend reference depuis la fonction random
    //document.getElementById("nombrerandom").innerHTML = reference; //Permettait d'afficher la réponse pour les tests dans une division nombrerandom
	var tentative = 1; //Tentative de départ
	var tentativemaxc = prompt('Entrez le nombre de tentatives maximum souhaitées (Le nombre maximal est 10 attention) :'); //Demande à l'utilisateur le nombre de tentatives maximum
	if (tentativemaxc > 10) { //Définit le maximum de tentatives sur 10
		tentativemaxc = 10;
	}
	var tentativemax = parseInt(tentativemaxc); //Transforme la chaine tentativemaxc en entier tentativemax
	var chiffre = [0,0,0,0]; //Chaine de départ pour éviter de faire buguer le jeu
	while (terminer(reference, chiffre, tentativemax, tentative) == false) { //Fonction qui se relance à chaque "tour" du jeu
	    var chiffre = prompt('Entrez votre combinaison de 4 chiffres (1 à 9) avec des virgules :'); //On demande à l'utilisateur sa proposition
	    var chiffretempo = chiffre.split(','); //Enlève les virgules comme part de la chaine
	    var reference1 = reference.slice(0);//Crée un nouveau tableau reference1 qui est la copie de reference avec les mêmes valeurs
	    var chiffretest = chiffretempo.slice(0); //Crée un tableau avec les valeurs de chifftempo
	    	var v = tentative; //Utilisé avec m pour marquer "Combinaison proposée : X,X,X,X" dans la page > <p id="X"></p>
	    	var m = "Combinaison proposée : " + chiffre;
	    	var w = tentative + 0.1; //Utilisé pour atteindre la division qui correspond au premier chiffre de chaque combinaison -> <p id="X.1"></p>
	    	var x = tentative + 0.2; //Utilisé pour atteindre la division qui correspond au second chiffre de chaque combinaison ->	<p id="X.2"></p>
	        var y = tentative + 0.3; //Utilisé pour atteindre la division qui correspond au troisième chiffre de chaque combinaison -> <p id="X.3"></p>
	        var z = tentative + 0.4; //Utilisé pour atteindre la division qui correspond au quatrième chiffre de chaque combinaison -> <p id="X.4"></p>
	        var o = "Combinaison " + v; //Avec p, sert à marquer le numéro de chaque combinaison en titre dans les X.5 divisions ->	<h3><p id="X.5"></p></h3>
	        var p = tentative + 0.5;
	        document.getElementById(p).innerHTML = o; //Utilise o et p pour marquer les titres
	        document.getElementById(v).innerHTML = m; //Utilise v et m pour marquer les combinaison essayées
	    	if (chiffretest[0] == reference[0]) { //Permet de définir si le premier chiffre est bien placé
	       		document.getElementById(w).innerHTML = "Premier chiffre : Bien placé"; //Si c'est bien placé, ca l'affiche
	       		chiffretest.splice(0,1,"42"); //Remplace le premier chiffre par 45 pour éviter les problèmes de mal placé après
	       		reference1.splice(0,1,"42"); //Remplace le premier chiffre par 45 pour éviter les problèmes de mal placé après
	    	}
	        if (chiffretest[1] == reference[1]) { //Permet de définir si le second chiffre est bien placé
	       		document.getElementById(x).innerHTML = "Deuxième chiffre : Bien placé"; //Si c'est bien placé, ca l'affiche
	       		chiffretest.splice(1,1,"43"); //Remplace le second chiffre par 45 pour éviter les problèmes de mal placé après
	       		reference1.splice(1,1,"43"); //Remplace le second chiffre par 45 pour éviter les problèmes de mal placé après
	        } 
	        if (chiffretest[2] == reference[2]) { //Permet de définir si le troisième chiffre est bien placé
	       		document.getElementById(y).innerHTML = "Troisième chiffre : Bien placé"; //Si c'est bien placé, ca l'affiche
	       		chiffretest.splice(2,1,"44"); //Remplace le troisème chiffre par 45 pour éviter les problèmes de mal placé après
	       		reference1.splice(2,1,"44"); //Remplace le troisième chiffre par 45 pour éviter les problèmes de mal placé après
	        }
	        if (chiffretest[3] == reference[3]) { //Permet de définir si le quatrième chiffre est bien placé
	       		document.getElementById(z).innerHTML = "Quatrième chiffre : Bien placé"; //Si c'est bien placé, ca l'affiche
	       		chiffretest.splice(3,1,"45"); //Remplace le quatrième chiffre par 45 pour éviter les problèmes de mal placé après
	       		reference1.splice(3,1,"45"); //Remplace le quatrième chiffre par 45 pour éviter les problèmes de mal placé après
	        }
			if (chiffretest[0] == reference1[1] || chiffretest[0] == reference1[2] || chiffretest[0] == reference1[3]) { //Permet de définir si le premier chiffre est bien placé
	        		document.getElementById(w).innerHTML = "Premier chiffre : Juste mais mal placé"; //Si c'est juste mais mal placé, ca l'affiche
	    	}
	    	if (chiffretest[1] == reference1[0] || chiffretest[1] == reference1[2] || chiffretest[2] == reference1[3]) { //Permet de définir si le premier chiffre est bien placé
	        		document.getElementById(x).innerHTML = "Deuxième chiffre : Juste mais mal placé"; //Si c'est juste mais mal placé, ca l'affiche
	    	}
	        if (chiffretest[2] == reference1[0] || chiffretest[2] == reference1[1] || chiffretest[4] == reference1[3]) { //Permet de définir si le premier chiffre est bien placé
	        		document.getElementById(y).innerHTML = "Troisième chiffre : Juste mais mal placé"; //Si c'est juste mais mal placé, ca l'affiche
	    	}
	        if (chiffretest[3] == reference1[0] || chiffretest[3] == reference1[1] || chiffretest[6] == reference1[2]) { //Permet de définir si le premier chiffre est bien placé
	        		document.getElementById(z).innerHTML = "Quatrième chiffre : Juste mais mal placé"; //Si c'est juste mais mal placé, ca l'affiche
	    	}
    	tentative++;//On inécrémente la variable tentative, pour passer à l'essai suivant
	}
	if (gagner(reference, chiffre) == true) { //Le if, else permet de finir le jeu, suivant si c'est gagné ou perdu
        	alert('Vous avez gagné ! Le jeu est fini, la page va se recharger.'); //Affiche le message de fin
	    	location.reload(); //Recharge la page
	}
    else { //Si on gagne pas, on perd !
        	alert ('Vous avez perdu ! Le jeu est fini, la page va se recharger.'); //Affiche le message de fin
	    	location.reload(); //Recharge la page
	}
}
function ChangeImage(url) { //Fonction en dehors du reste du code permettant de faire fonctionner l’interface graphique, elle remplace les images vides par les couleurs sur lesquelles l’utilisateur clique
	var i=1;
	var trouve=false;
	while (i <= 16 && trouve==false) { //on lance une fonction while avec les 16 cases de l’interface graphique
		var img=document.getElementById("vide"+i); //on récupère l’image qui a pour id « videX » (x étant un entier compris entre 1 et 16)
		if (img.src.substring(img.src.lastIndexOf("/")+1)=="rien.gif") { //Si la source de l’image est une image vide (sans couleur)
			img.src=url; //alors on remplace cette image vide par la couleur sur laquelle on vient de cliquer
			trouve=true; //l’image étant changée on sort du while avec « trouver=true ; »
		}
		i++; //on rajoute +1 au i pour passer à la case suivante
	}
}
