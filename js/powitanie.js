console.log('powitanie.js: start');
if (userName) { // pomiń, gdy kliknięto Anuluj
    const powitanie = document.createElement('p');
    powitanie.textContent = 'Ćw. 1. Witaj, ' + userName;
    document.getElementById('skrypty').append(powitanie);
}