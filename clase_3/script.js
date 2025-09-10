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