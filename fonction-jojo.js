	var tentative = 0;
	var tentativemaxc = prompt('Entrez le nombre de tentatives maximum souhaitées');
	var tentativemax = parseInt(tentativemaxc);
	while (tentative <= tentativemax) {
	    var chiffre = prompt('Entrez votre combinaison :');
	    tentative++;
		alert('Mauvaise combinaison);
}
	function random() {
	var random1 = Math.floor((Math.random() * 9) + 1);
    var random2 = Math.floor((Math.random() * 9) + 1);
    var random3 = Math.floor((Math.random() * 9) + 1);
    var random4 = Math.floor((Math.random() * 9) + 1);
    var reference = [random1, random2, random3, random4];
    document.getElementById("demo").innerHTML = reference;
    if (reference == chiffre) {
    alert("Vous avez gagné !");
    location.reload() ;
}
}
