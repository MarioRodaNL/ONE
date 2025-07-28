// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Lista para almacenar los nombres
const listaNombres = [];

// Función para agregar un nombre a la lista
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim(); //Elimina espacios en blanco al inicio y al final

    if (nombre === '') {
        alert('Por favor, escribe un nombre válido.');
        return;
    }

    // Agregar nombre a la lista y al HTML
    listaNombres.push(nombre);
    actualizarLista();

    // Limpiar el campo de entrada
    input.value = '';
    input.focus();
}

// Actualiza la lista de nombres en pantalla
function actualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Limpiar lista actual

    listaNombres.forEach(nombre => {
        const li = document.createElement('li');
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    if (listaNombres.length === 0) {
        alert('Agrega al menos un nombre antes de sortear.');
        return;
    }

    const indice = Math.floor(Math.random() * listaNombres.length);
    const nombreSorteado = listaNombres[indice];

    // Mostrar resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li> El amigo secreto es: <strong>${nombreSorteado}</strong></li>`;
}
