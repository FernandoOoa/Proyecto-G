document.addEventListener('DOMContentLoaded', () => {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const container = document.querySelector('.container');

    // Mover el botón "No" al pasar el mouse sobre él
    noBtn.addEventListener('mouseover', () => {
        const containerRect = container.getBoundingClientRect();
        const noBtnRect = noBtn.getBoundingClientRect();

        let newTop, newLeft;

        // Generar nuevas posiciones hasta que no se superponga con el botón "Sí"
        do {
            newTop = Math.random() * (containerRect.height - noBtnRect.height);
            newLeft = Math.random() * (containerRect.width - noBtnRect.width);
        } while (
            newLeft > yesBtn.offsetLeft - noBtnRect.width &&
            newLeft < yesBtn.offsetLeft + yesBtn.offsetWidth &&
            newTop > yesBtn.offsetTop - noBtnRect.height &&
            newTop < yesBtn.offsetTop + yesBtn.offsetHeight
        );
        
        noBtn.style.position = 'absolute'; // Cambiar a absoluto para moverlo libremente
        noBtn.style.top = `${newTop}px`;
        noBtn.style.left = `${newLeft}px`;
    });

    // Acción al hacer clic en "Sí"
    yesBtn.addEventListener('click', () => {
        const content = document.querySelector('.content');
        content.innerHTML = `
            <h1>¡Sabía que dirías que sí!</h1>
            <p class="final-message">¡Me haces el hombre más feliz del mundo! 💑</p>
            <img src="https://i.ibb.co/3kC6C1f/celebration.gif" alt="Celebración" class="celebration-gif">
        `;
    });
});

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

const container = document.querySelector('.container');

function createFloatingPhrase() {
    const phraseElement = document.createElement('div');
    phraseElement.classList.add('floating-phrase');
    phraseElement.textContent = phrases[Math.floor(Math.random() * phrases.length)];

    // Posición inicial horizontal aleatoria
    const startPosition = Math.random() * 100;
    // Posición final horizontal aleatoria (ligeramente diferente para que no caigan recto)
    const endPosition = startPosition + (Math.random() * 60 - 30); // +/- 30%
    phraseElement.style.setProperty('--randomX-start', `${startPosition}vw`);
    phraseElement.style.setProperty('--randomX-end', `${endPosition}vw`);

    // Velocidad de animación ligeramente aleatoria
    const animationDuration = 10 + Math.random() * 10; // Entre 10 y 20 segundos
    phraseElement.style.animationDuration = `${animationDuration}s, 3s`; // Mantiene el fadeInOut en 3s

    // Retardo aleatorio para que no aparezcan todas al mismo tiempo
    const delay = Math.random() * 5;
    phraseElement.style.animationDelay = `${delay}s`;

    container.appendChild(phraseElement);

    // Eliminar la frase después de que termine la animación para no sobrecargar el DOM
    phraseElement.addEventListener('animationend', () => {
        phraseElement.remove();
    });
}

// Crear frases flotantes cada cierto tiempo
setInterval(createFloatingPhrase, 1500); // Crea una nueva frase cada 1.5 segundos