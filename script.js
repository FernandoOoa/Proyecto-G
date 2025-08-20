document.addEventListener('DOMContentLoaded', () => {
    // --- Selección de Elementos ---
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const container = document.querySelector('.container');
    const content = document.querySelector('.content');

    // Es una buena práctica asegurarse de que los elementos existen antes de usarlos
    if (!yesBtn || !noBtn || !container || !content) {
        console.error("No se encontraron todos los elementos necesarios en el DOM.");
        return; // Detiene la ejecución si falta algo
    }

    // --- Contenedor para Frases ---
    const backgroundContainer = document.createElement('div');
    backgroundContainer.classList.add('background-container');
    document.body.appendChild(backgroundContainer);

    // --- Frases ---
    const phrases = [
        "Eres mi todo", "Te amo", "Mi corazón late por ti", "Eres mi princesa",
        "Siempre juntos", "Yo soy tuyo", "Eres la luz de mi vida", "Un sí para siempre",
        "Mi amor por ti crece cada día", "Eres mi sueño hecho realidad"
    ];

    // --- Lógica de la Aplicación ---
    let phraseIntervalId = null; // Variable para guardar el ID del intervalo

    // Se asegura de que el botón 'No' se mueva dentro del contenedor principal
    container.style.position = 'relative'; 
    noBtn.style.position = 'absolute'; // Se establece desde el inicio

    const moveNoButton = () => {
        const containerRect = container.getBoundingClientRect();
        const noBtnRect = noBtn.getBoundingClientRect();

        // Se resta el tamaño del botón para que no se salga del contenedor
        const newTop = Math.random() * (containerRect.height - noBtnRect.height);
        const newLeft = Math.random() * (containerRect.width - noBtnRect.width);

        noBtn.style.top = `${newTop}px`;
        noBtn.style.left = `${newLeft}px`;
    };

    const showYesMessage = () => {
        // Detiene la creación de nuevas frases para ahorrar recursos
        clearInterval(phraseIntervalId);
        
        content.innerHTML = `
            <div class="yes-message">
                <h1>💖 ¡Sabía que dirías que sí! 💖</h1>
                <p class="final-message">Me haces la persona más feliz del mundo 🌍✨</p>
                <img src="https://i.pinimg.com/originals/e1/f9/47/e1f94781a5c2fbf53fc719ec9e9e169a.gif" 
                     alt="Celebración" 
                     class="celebration-gif">
            </div>
        `;
    };

    const createFloatingPhrase = () => {
        const phraseElement = document.createElement('div');
        phraseElement.className = 'floating-phrase'; // Asignación más directa
        phraseElement.textContent = phrases[Math.floor(Math.random() * phrases.length)];

        const posX = Math.random() * window.innerWidth;
        const posY = Math.random() * window.innerHeight;
        const duration = 8 + Math.random() * 8;
        const delay = Math.random() * 5;

        phraseElement.style.left = `${posX}px`;
        phraseElement.style.top = `${posY}px`;
        // Usar `transform` para la animación es más eficiente para el navegador
        phraseElement.style.animation = `floatUp ${duration}s ease-in-out ${delay}s forwards, fadeInOut 3s`;
        
        backgroundContainer.appendChild(phraseElement);

        // Limpieza automática del DOM al terminar la animación
        phraseElement.addEventListener('animationend', () => {
            phraseElement.remove();
        }, { once: true }); // El listener se elimina solo después de ejecutarse una vez
    };

    // --- Asignación de Eventos ---

    // ❗ CORRECCIÓN CLAVE: 'pointerover' funciona tanto para mouse (PC) como para toques (móvil)
    noBtn.addEventListener('pointerover', moveNoButton);
    // Como respaldo para que se mueva si logran tocarlo en móvil
    noBtn.addEventListener('click', moveNoButton); 

    yesBtn.addEventListener('click', showYesMessage);

    // Inicia la creación de frases y guarda el ID del intervalo
    phraseIntervalId = setInterval(createFloatingPhrase, 1500);
});