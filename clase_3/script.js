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