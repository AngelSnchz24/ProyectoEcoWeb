const questions = [
    {
        question: "¿Cuál de las siguientes acciones ayuda a reducir la contaminación?",
        options: ["Reciclar materiales", "Usar plásticos de un solo uso", "Dejar las luces encendidas", "Tirar basura en la calle"],
        correct: 0
    },
    {
        question: "¿Qué significa la primera R en las 3R?",
        options: ["Reutilizar", "Reciclar", "Reducir", "Reparar"],
        correct: 2
    },
    {
        question: "¿Qué recurso natural es renovable?",
        options: ["Petróleo", "Agua", "Carbón", "Gas natural"],
        correct: 1
    },
    {
        question: "¿Qué es el cambio climático?",
        options: ["Un cambio temporal en el clima", "Un cambio a largo plazo en los patrones climáticos", "Un fenómeno natural sin intervención humana", "Un mito"],
        correct: 1
    },
    {
        question: "¿Qué gas contribuye más al efecto invernadero?",
        options: ["Oxígeno", "Dióxido de carbono", "Nitrógeno", "Helio"],
        correct: 1
    },
    {
        question: "¿Qué es la biodiversidad?",
        options: ["La variedad de especies en un ecosistema", "La cantidad de oxígeno en el aire", "El número de árboles en un bosque", "La cantidad de agua en un río"],
        correct: 0
    },
    {
        question: "¿Qué es la energía renovable?",
        options: ["Energía que se agota rápidamente", "Energía que proviene de recursos naturales inagotables", "Energía generada por combustibles fósiles", "Energía nuclear"],
        correct: 1
    },
    {
        question: "¿Qué acción reduce el desperdicio de agua?",
        options: ["Dejar el grifo abierto", "Reparar fugas", "Lavar el coche todos los días", "Regar el jardín al mediodía"],
        correct: 1
    },
    {
        question: "¿Qué es el reciclaje?",
        options: ["Quemar residuos", "Reutilizar materiales para crear nuevos productos", "Enterrar residuos en vertederos", "Desechar residuos en el océano"],
        correct: 1
    },
    {
        question: "¿Qué podemos hacer para proteger los océanos?",
        options: ["Tirar basura en las playas", "Reducir el uso de plásticos", "Pescar en exceso", "Usar productos químicos en el agua"],
        correct: 1
    }
];

let currentQuestion = 0;
let correctAnswers = 0;

function loadQuestion() {
    const quiz = document.getElementById("quiz");
    const question = questions[currentQuestion];
    quiz.innerHTML = `
        <div class="question">${question.question}</div>
        <ul class="options">
            ${question.options.map((option, index) => `
                <li><button onclick="checkAnswer(this, ${index === question.correct})">${option}</button></li>
            `).join("")}
        </ul>
    `;
}

function checkAnswer(button, isCorrect) {
    const result = document.getElementById("result");
    if (isCorrect) {
        result.textContent = "¡Correcto!";
        result.style.color = "green";
        correctAnswers++;
    } else {
        result.textContent = "Incorrecto.";
        result.style.color = "red";
    }
    const buttons = document.querySelectorAll(".options button");
    buttons.forEach(btn => btn.disabled = true);

    setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < questions.length) {
            loadQuestion();
            result.textContent = "";
        } else {
            result.textContent = `¡Has completado el quiz! Respuestas correctas: ${correctAnswers} de ${questions.length}`;
        }
    }, 2000);
}

loadQuestion();