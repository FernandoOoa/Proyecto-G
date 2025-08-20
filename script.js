document.addEventListener('DOMContentLoaded', () => {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const container = document.querySelector('.container');
    const content = document.querySelector('.content');

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

        const startX = Math.random() * 100;
        const endX = startX + (Math.random() * 60 - 30);
        const duration = 10 + Math.random() * 10;
        const delay = Math.random() * 5;

        phraseElement.style.setProperty('--randomX-start', `${startX}vw`);
        phraseElement.style.setProperty('--randomX-end', `${endX}vw`);
        phraseElement.style.animationDuration = `${duration}s, 3s`;
        phraseElement.style.animationDelay = `${delay}s`;

        container.appendChild(phraseElement);

        phraseElement.addEventListener('animationend', () => phraseElement.remove());
    };

    // Eventos
    noBtn.addEventListener('mouseover', moveNoButton);
    yesBtn.addEventListener('click', showYesMessage);

    // Frases flotantes periódicas
    setInterval(createFloatingPhrase, 1500);
});
