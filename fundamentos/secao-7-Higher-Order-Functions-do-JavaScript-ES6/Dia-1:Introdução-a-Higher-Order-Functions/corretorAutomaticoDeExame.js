const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const calculateScore = (correctAnswers, studentAnswers, scoreFunction) => {
  const score = correctAnswers.reduce((accumulator, correctAnswer, index) => {
    const studentAnswer = studentAnswers[index];
    return accumulator + scoreFunction(correctAnswer, studentAnswer);
  }, 0);
  return `Resultado final: ${score} pontos`;
};

const scoreFunction = (correctAnswer, studentAnswer) => {
  if (studentAnswer === 'N.A') {
    return 0;
  } else if (studentAnswer === correctAnswer) {
    return 1;
  } else {
    return -0.5;
  }
};

const totalScore = calculateScore(RIGHT_ANSWERS, STUDENT_ANSWERS, scoreFunction);
console.log(totalScore);
