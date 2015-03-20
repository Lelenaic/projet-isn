var chiffre = prompt('Entrez un chiffre :');
var random1 = Math.floor((Math.random() * 9) + 1);
var random2 = Math.floor((Math.random() * 9) + 1);
var random3 = Math.floor((Math.random() * 9) + 1);
var random4 = Math.floor((Math.random() * 9) + 1);
var reference = [random1, random2, random3, random4];
document.getElementById("demo").innerHTML = reference;
if (reference == chiffre) {
    alert("Vous avez gagné !");
}
else {
    alert("C'est faux !");
}
