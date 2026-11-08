const zespol = [
  ["Gorczyca", "Dariusz", "1", "21462@student.ans-elblag.pl", "21472"], // Osoba A
  ["???", "???", "?", "???", "???"], // Osoba B
];
const nazwiska = zespol[0][0] + ", " + zespol[1][0];
document.getElementById("nazwisko").textContent = nazwiska;

const pola = ["nazwisko", "imie", "grupa", "email", "indeks"];
for (let i = 0; i < pola.length; i++) {
  document.getElementById(pola[i]).textContent =
    zespol[0][i] + ", " + zespol[1][i];
}

const srodekTablicy = Math.floor(tablica.length / 2);
const whileElement = document.getElementById("while");
let k = 0;
const pierwszaPolowa = [];
while (k < srodekTablicy) {
  pierwszaPolowa.push(tablica[k]);
  k++;
}
whileElement.textContent = "Pierwsza połowa tablicy: " + pierwszaPolowa.join(", ");

const drugaPolowa = [];
for (let i = srodekTablicy; i < tablica.length; i++) {
  drugaPolowa.push(tablica[i]);
}
document.getElementById("for").textContent =
  "Druga połowa tablicy: " + drugaPolowa.join(", ");

function policzZnaki(tekst) {
  return tekst.length;
}

const elementForOf = document.getElementById("forOf");
const dlugosciElementow = [];
for (const element of tablica) {
  dlugosciElementow.push(`${element} (${policzZnaki(element)} znaków)`);
}
elementForOf.textContent = dlugosciElementow.join(", ");

function pokazDane() {
  const dane = pola.map((pole) => document.getElementById(pole).textContent);
  alert(dane.join("\n"));
}

document.getElementById("pokazDane").addEventListener("click", pokazDane);

let liczbaKlikniec = 0;
document
  .getElementById("dodajKlikniecie")
  .addEventListener("click", () => {
    liczbaKlikniec++;
    const elementListy = document.createElement("li");
    elementListy.textContent = `Kliknięcie numer ${liczbaKlikniec}`;
    document.getElementById("lista").append(elementListy);
  });
