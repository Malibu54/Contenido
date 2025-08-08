
function showAnswer(type) {
    const feedback = document.getElementById('answer-feedback');

    if (type === 'correct') {
        feedback.className = 'answer-feedback correct';
        feedback.textContent = '🎉 ¡Correcto! La IA aprende a reconocer patrones. Si ve muchas fotos de perros y gatos, aprende a distinguir entre ellos. ¡Muy bien!';
    } else {
        feedback.className = 'answer-feedback incorrect';
        feedback.textContent = '🤔 ¡Casi! La IA solo puede hacer cosas relacionadas con lo que aprende. Si aprende sobre perros y gatos, podrá reconocerlos en fotos.';
    }

    feedback.style.display = 'block';

    // Ocultar después de 5 segundos
    setTimeout(() => {
        feedback.style.display = 'none';
    }, 5000);
}
