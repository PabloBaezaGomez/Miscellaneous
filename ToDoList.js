// Función para permitir el drop
function allowDrop(event) {
  event.preventDefault();
}

// Función que maneja el drag
function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}

// Función que maneja el drop
function drop(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("text");
  var draggedElement = document.getElementById(data);
  
  // Verifica si se está soltando en la lista 1 o en la lista 2
  var dropTarget = event.target.closest('ul');

  if (dropTarget) {
    dropTarget.appendChild(draggedElement);
  } else if (event.target.tagName === 'LI') {
    event.target.parentNode.insertBefore(draggedElement, event.target);
  }
}

// Función para agregar un nuevo elemento a la lista
function addElement() {
  var inputValue = document.getElementById("myInput").value;
  if (inputValue === '') {
    alert("You must write something!");
    return;
  }

  var newItem = document.createElement("li");
  newItem.textContent = inputValue;
  newItem.className = 'listItem';
  newItem.id = 'item' + (document.querySelectorAll('li').length + 1);
  newItem.draggable = true;
  newItem.ondragstart = function(event) {
    drag(event);
  };

  document.getElementById("lista1").appendChild(newItem);
  document.getElementById("myInput").value = '';
}

// Asigna eventos de arrastrar y soltar a las listas incluso si están vacías
document.addEventListener('DOMContentLoaded', (event) => {
  const listas = document.querySelectorAll('ul');
  listas.forEach(lista => {
    lista.ondrop = drop;
    lista.ondragover = allowDrop;
  });
});
