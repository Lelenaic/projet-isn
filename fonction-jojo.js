function random() {
    var random1 = Math.floor((Math.random() * 9) + 1);
    var random2 = Math.floor((Math.random() * 9) + 1);
    var random3 = Math.floor((Math.random() * 9) + 1);
    var random4 = Math.floor((Math.random() * 9) + 1);
    var reference = [random1, random2, random3, random4];
    return reference;
}
function gagner(reference, chiffre) {
    if (reference == chiffre) {
        return true;
    }
    return false;
}
function terminer(reference, chiffre, tentativemax, tentative) {
    if (gagner(reference, chiffre) == true) {
        return true;
}
    if (tentative >= tentativemax) {
        return true;
}
    return false;
}
function jeu() {
    var reference=random();
    document.getElementById("nombrerandom").innerHTML = reference;
	var tentative = 0;
	var tentativemaxc = prompt('Entrez le nombre de tentatives maximum souhaitées :');
	var tentativemax = parseInt(tentativemaxc);
	var chiffre = [0,0,0,0];
	while (terminer(reference, chiffre, tentativemax, tentative) == false) {
	    var chiffre = prompt('Entrez 4 chiffres avec des virgules :');
	    if (reference[0] == chiffre[0]) {
	        document.getElementById("chiffre1").innerHTML = "Premier chiffre : Bien placé";
	    }
	    else if (reference[0] == chiffre[2] || reference[0] == chiffre[4] || reference[0] == chiffre[6]) {
	         document.getElementById("chiffre1").innerHTML = "Premier chiffre : Juste mais mal placé";
	    }
	    else {
	         document.getElementById("chiffre1").innerHTML = "Premier chiffre : Faux";
	    }
	}
    tentative++;
   if (gagner(reference, chiffre) == true) {
        alert('Vous avez gagné !');
        alert('Le jeu est fini.');
	    location.reload();
}
    else {
        alert ('Vous avez perdu !');
        alert('Le jeu est fini.');
	    location.reload();
}
}
