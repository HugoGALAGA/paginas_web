// Ejercicio 1: Saludo Dinámico
const saludoElemento = document.getElementById('saludo-dinamico');
const horaActual = new Date().getHours();

if (horaActual >= 5 && horaActual < 12) {
    saludoElemento.textContent = 'Buenos días, soy Hugo Galina';
} else if (horaActual >= 12 && horaActual < 19) {
    saludoElemento.textContent = 'Buenas tardes, soy Hugo Galina';
} else {
    saludoElemento.textContent = 'Buenas noches, soy Hugo Galina';
}

// Ejercicio 2: Botón para mostrar/ocultar experiencia
const toggleExperienciaBtn = document.getElementById('toggle-experiencia-btn');
const experienciaContainer = document.getElementById('experiencia-container');

toggleExperienciaBtn.addEventListener('click', () => {
    // Toggle (añade/quita) la clase 'd-none' de Bootstrap
    experienciaContainer.classList.toggle('d-none');

    // Cambia el texto del botón
    const isHidden = experienciaContainer.classList.contains('d-none');
    toggleExperienciaBtn.textContent = isHidden ? 'Mostrar Experiencia' : 'Ocultar Experiencia';
});

// Ejercicio 3: Implementar modo oscuro/claro
const toggleThemeBtn = document.getElementById('toggle-theme-btn');

toggleThemeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    const isDarkMode = document.body.classList.contains('dark-mode');
    toggleThemeBtn.textContent = isDarkMode ? 'Modo Claro' : 'Modo Oscuro';
});

// Ejercicio 4: Botón para mostrar/ocultar información de contacto
const toggleContactBtn = document.getElementById('toggle-contact-btn');
const contactInfo = document.getElementById('contact-info');

toggleContactBtn.addEventListener('click', () => {
    contactInfo.classList.toggle('d-none');
    const isHidden = contactInfo.classList.contains('d-none');
    toggleContactBtn.textContent = isHidden ? 'Mostrar Contacto' : 'Ocultar Contacto';
});

// Ejercicio 5: Buscador de habilidades
const skillSearchInput = document.getElementById('skill-search');
const skillsList = document.getElementById('skills-list').getElementsByTagName('li');

skillSearchInput.addEventListener('input', (event) => {
    const searchTerm = event.target.value.toLowerCase();

    // Itera sobre cada elemento <li> de la lista
    for (let i = 0; i < skillsList.length; i++) {
        const skill = skillsList[i];
        const skillText = skill.textContent.toLowerCase();

        if (skillText.includes(searchTerm)) {
            skill.style.display = ''; // Muestra el elemento si coincide
        } else {
            skill.style.display = 'none'; // Oculta el elemento si no coincide
        }
    }
});