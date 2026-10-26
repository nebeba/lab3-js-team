
const tablica = ['Transformers', 'Planeta Małp', 'Interstellar', 'STALKER', 'Faceci w Czerni'];

// Krok 1 – wypisanie tablicy
console.log(tablica);
console.table(tablica);
// alert(tablica[0]); // test

// Krok 2 – zmiana ostatniego elementu
tablica[tablica.length - 1] = 'Nowa wartość';
console.log('Ostatni element:', tablica[tablica.length - 1]);

// Krok 3 – dodawanie elementów na trzy sposoby
tablica[5] = 'nowy6';
console.log('Długość:', tablica.length);

tablica[tablica.length] = 'nowy7';
console.log('Długość:', tablica.length);

tablica.push('nowy8', 'nowy9', 'nowy10', 'nowy11');
console.log('Długość:', tablica.length);

// Krok 4 – sprawdzenie dziury w tablicy
console.log('Długość:', tablica.length);
console.log('Element pod indeksem 15:', tablica[15]);
// Długość wynosi 21, a tablica[15] to undefined,
// ponieważ pod indeksami 12–19 są puste miejsca.

// Krok 5 – dodawanie na początek
delete tablica[20]; // usuwamy testowy element
const nowaDlugosc = tablica.unshift('nowy12', 'nowy13');
console.log('Nowa długość:', nowaDlugosc);

// Krok 6 – wyświetlanie na stronie
document.write('<p>Tablica: ' + tablica.join(', '));
document.write(' (elementów: ' + tablica.length + ')</p>');

const szukanyElement = 'Avatar';
document.write('<p>Czy tablica zawiera "' + szukanyElement + '"? ');
document.write(tablica.includes(szukanyElement) ? 'Tak' : 'Nie');
document.write('. Pozycja elementu: ' + tablica.indexOf(szukanyElement) + '</p>');
