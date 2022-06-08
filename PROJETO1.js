>>>
var myQuestions = [
    {
        question: "É correto afirmar que:",
        answers: {
            A: 'Apresentou diferentes fases, desembocando em um contexto monárquico, antirrevolucionário e reacionário, representado pelo Congresso de Viena.',
            B: 'Foi longamente preparada pelo ciclo revolucionário ocorrido na Inglaterra no século XVII, o que explica o apoio que esse país prestou aos revoltosos franceses.',
            C: 'Tratou-se, principalmente, de uma revolução cultural, ápice do desenvolvimento do chamado iluminismo.'
        },
        correctAnswer: 'A'
    },
    {
        question: "Qual foi o episódio, ocorrido em agosto de 1791, que provocou várias mudanças no Haiti?",
        answers: {
            A: 'Morte do rei Luís XVI pela guilhotina.',
            B: 'Queda da Bastilha, em Paris.',
            C: 'Promulgação da Declaração dos Direitos do Homem e do Cidadão.'
        },
        correctAnswer: 'C'
    },
    {
        question: "Assinale o tópico que melhor expressa características do Período do Terror da França:",
        answers: {
            A: 'Qualquer pessoa suspeita de contrarrevolucionária poderia ser presa e até mesmo guilhotinada.',
            B: 'Os anos do terror não foram tão rigorosos, foi apenas propaganda dos contrarrevolucionários.',
            C: 'Garantias constitucionais de julgamento foram mantidas.'
        },
        correctAnswer: 'A'
    }
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);
function generateQuiz(questions, quizContainer, resultsContainer, submitButton){
    function showQuestions(questions, quizContainer) {
        var output = [];
        var answers;
        for(var i = 0; i < questions.length; i++) {
            answers = [];
            for(letter in questions[i].answers) {
                answers.push(
                    '<label>'
                        + '<input type = "radio" name = "question' + i + '"value ="' +letter+ '">'
                        + letter + ': '
                        + questions[i].answers[letter]
                    + '<label>'
                );
            }
            output.push(
                '<div class = "question">' + questions[i].question + '</div>'
                + '<div class = "answers">' + answers.join('') + '</div>'
            );
        }
        quizContainer.innerHTML = output.join('');
    }
    function showResults(questions, quizContainer, resultsContainer) {
        var answerContainers = quizContainer.querySelectorAll('.answers');
        var userAnswer = '';
        var numCorrect = 0;
        for(var i = 0; i < questions.length; i++) {
            userAnswer = (answerContainers[i].querySelector('input[name = question'+ i +']:checked')||{}).value;
            if(userAnswer === questions[i].correctAnswer) {
                numCorrect++;
                answerContainers[i].style.color = 'lightgreen';
            }
            else{
                answerContainers[i].style.color = 'red';
            }
        }
        resultsContainer.innerHTML = numCorrect + 'out of' + questions.length;
    }
    showQuestions(questions, quizContainer);
    submitButton.onclick = function() {
        showResults(questions, quizContainer, resultsContainer);
    }
}
>>>
