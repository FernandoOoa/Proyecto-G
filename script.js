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
        <div class="yes-message">
            <h1>💖 ¡Sabía que dirías que sí! 💖</h1>
            <p class="final-message">Me haces la persona más feliz del mundo 🌍✨
Yo sé que una relación a distancia puede ser algo complicado, pero quiero que lo nuestro sea algo bonito y duradero.</p>
            <img src="https://i.pinimg.com/originals/e1/f9/47/e1f94781a5c2fbf53fc719ec9e9e169a.gif" 
                 alt="Celebración" 
                 class="celebration-gif">
        </div>
    `;

    // Animación de entrada
    const message = document.querySelector('.yes-message');
    message.classList.add('fade-in');
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

document.addEventListener('mousemove', function(e) {
    // 1. Crear un nuevo elemento div para el corazón
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerText = '❤️';

    // 2. Posicionar el corazón en las coordenadas del cursor
    heart.style.left = e.clientX + 'px';
    heart.style.top = e.clientY + 'px';

    // 3. Agregar el corazón al cuerpo del documento
    document.body.appendChild(heart);

    // 4. Eliminar el corazón después de que termine la animación
    heart.addEventListener('animationend', function() {
        heart.remove();
    });
});