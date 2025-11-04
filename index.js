const KEY = "Nome";

const saveButton = document.getElementById("saveButton");
const deleteButton = document.getElementById("deleteButton");

const textArea = document.getElementById("textArea");

const form = document.getElementById("form");

const previous = document.getElementById("previous");

// FUNZIONE DEL BUTTON SALVA
saveButton.addEventListener("click", function () {
  const textAreaContent = textArea.value;
  localStorage.setItem(KEY, textAreaContent);
  form.reset();
});

// FUNZIONE DEL BUTTON CANCELLA
deleteButton.addEventListener("click", function () {
  localStorage.removeItem(KEY);
});

// FUNZIONE PER MOSTRARE IL NOME SALVATO
if (localStorage.getItem(KEY)) {
  previous.innerText = localStorage.getItem(KEY);
} else {
  previous.innerText = " nessun nome è stato salvato precedentemente ";
}
