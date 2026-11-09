const questions = [
  ['Na którym semestrze studiów jest przedmiot Full Stack Development?', 5],
  ['Na którym roku jest przedmiot Full Stack Development?', 3],
  ['W którym roku powstał ANS?', 1998]
];

function startQuiz() {
  let score = 0;

  for (let i = 0; i < questions.length; i++) {
    const question = questions[i];
    const answer = prompt(question[0], '');

    if (Number(answer) === question[1]) {
      alert('Prawidłowa odpowiedź!');
      score++;
    } else {
      alert('Błąd. Prawidłowa odpowiedź to ' + question[1]);
    }
  }
}

document.getElementById('startQuiz').addEventListener('click', startQuiz);