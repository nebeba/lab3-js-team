const formsCount = document.forms.length;
const imagesCount = document.images.length;
const linksCount = document.links.length;
const paragraphsCount = document.querySelectorAll("#projekt1 p").length;

console.log("Formularze na całej stronie:", formsCount);
console.log("Obrazki na całej stronie:", imagesCount);
console.log("Odnośniki na całej stronie:", linksCount);
console.log("Akapity w sekcji projekt1:", paragraphsCount);

const licznik = document.getElementById("licznik");
licznik.innerHTML = `
  Formularze na całej stronie: ${formsCount}<br>
  Obrazki na całej stronie: ${imagesCount}<br>
  Odnośniki na całej stronie: ${linksCount}<br>
  Akapity w sekcji projekt1: ${paragraphsCount}
`;

const naglowek = document.querySelector("#dom h3");
naglowek.textContent = "Zadanie 4 – DOM – wykonane";
naglowek.classList.add("text-success");

const lista = document.getElementById("lista");
[
  `Formularze: ${formsCount}`,
  `Obrazki: ${imagesCount}`,
  `Odnośniki: ${linksCount}`,
].forEach((wartosc) => {
  const elementListy = document.createElement("li");
  elementListy.textContent = wartosc;
  lista.append(elementListy);
});
