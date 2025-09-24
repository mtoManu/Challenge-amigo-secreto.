const inputAmigo = document.getElementById("amigo");
const btnAdd = document.getElementById("btnAdd");
const btnDraw = document.getElementById("btnDraw");

const amigos = [];
const ulListaAmigos = document.getElementById("listaAmigos");
const ulResultados = document.getElementById("resultado");

btnAdd.addEventListener("click", agregarAmigo);
btnDraw.addEventListener("click", sortearAmigo);

// Agregar amigos a la lista
function agregarAmigo() {
  const nombre = inputAmigo.value.trim();
  if (!nombre) {
    alert("Ingrese un nombre válido.");
    inputAmigo.focus();
    return;
  }
  if (amigos.includes(nombre)) {
    alert("Ese nombre ya fue agregado.");
    inputAmigo.value = "";
    inputAmigo.focus();
    return;
  }

  amigos.push(nombre);

  const li = document.createElement("li");
  li.textContent = nombre;
  ulListaAmigos.appendChild(li);

  inputAmigo.value = "";
  inputAmigo.focus();
}

// Sortear un amigo secreto y mostrarlo en pantalla
function sortearAmigo() {
  ulResultados.innerHTML = "";

  if (amigos.length < 2) {
    ulResultados.innerHTML = "<li>Debe haber al menos 2 personas para sortear.</li>";
    return;
  }

  const randomIndex = Math.floor(Math.random() * amigos.length);
  const amigoSecreto = amigos[randomIndex];

  ulResultados.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigoSecreto}</strong></li>`;
}
