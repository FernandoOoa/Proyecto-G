document.addEventListener('DOMContentLoaded', () => {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const container = document.querySelector('.container');
    const content = document.querySelector('.content');

    // 🔹 Contenedor exclusivo para frases en el fondo
    const backgroundContainer = document.createElement('div');
    backgroundContainer.classList.add('background-container');
    document.body.appendChild(backgroundContainer);

    // Frases románticas
    const phrases = [
        "Eres mi todo",
        "Te amo",
        "Mi corazón late por ti",
        "Eres mi princesa",
        "Siempre juntos",
        "Yo soy tuyo",
        "Eres la luz de mi vida",
        "Un sí para siempre",
        "Mi amor por ti crece cada día",
        "Eres mi sueño hecho realidad"
    ];

    // Función para mover el botón "No"
    const moveNoButton = () => {
        const containerRect = container.getBoundingClientRect();
        const noBtnRect = noBtn.getBoundingClientRect();
        const yesBtnRect = yesBtn.getBoundingClientRect();

        let newTop, newLeft;

        do {
            newTop = Math.random() * (containerRect.height - noBtnRect.height);
            newLeft = Math.random() * (containerRect.width - noBtnRect.width);
        } while (
            newLeft > yesBtnRect.left - noBtnRect.width &&
            newLeft < yesBtnRect.right &&
            newTop > yesBtnRect.top - noBtnRect.height &&
            newTop < yesBtnRect.bottom
        );

        Object.assign(noBtn.style, {
            position: 'absolute',
            top: `${newTop}px`,
            left: `${newLeft}px`
        });
    };

    // Función para mostrar mensaje final
    const showYesMessage = () => {
        content.innerHTML = `
            <h1>¡Sabía que dirías que sí!</h1>
            <p class="final-message">¡Me haces el hombre más feliz del mundo! 💑</p>
            <img src="https://i.ibb.co/3kC6C1f/celebration.gif" alt="Celebración" class="celebration-gif">
        `;
    };

    // Función para crear frases flotantes
    const createFloatingPhrase = () => {
        const phraseElement = document.createElement('div');
        phraseElement.classList.add('floating-phrase');
        phraseElement.textContent = phrases[Math.floor(Math.random() * phrases.length)];

        // Posición aleatoria en toda la pantalla
        const posX = Math.random() * window.innerWidth;
        const posY = Math.random() * window.innerHeight;

        // Configuración aleatoria de animación
        const duration = 8 + Math.random() * 8; // 8-16s
        const delay = Math.random() * 5;

        Object.assign(phraseElement.style, {
            position: "fixed",
            left: `${posX}px`,
            top: `${posY}px`,
            animation: `floatUp ${duration}s ease-in-out ${delay}s forwards, fadeInOut 3s`
        });

        backgroundContainer.appendChild(phraseElement);

        phraseElement.addEventListener('animationend', () => phraseElement.remove());
    };

    // Eventos
    noBtn.addEventListener('mouseover', moveNoButton);
    yesBtn.addEventListener('click', showYesMessage);

    // Frases flotantes periódicas
    setInterval(createFloatingPhrase, 1500);
});