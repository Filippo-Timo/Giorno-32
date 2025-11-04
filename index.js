const KEY = "Nome";

const saveButton = document.getElementById("saveButton");
const deleteButton = document.getElementById("deleteButton");

const textArea = document.getElementById("textArea");

const form = document.getElementById("form");

const previous = document.getElementById("previous");

const f = function (e) {
  if (!isNaN(parseInt(e.data))) {
    e.preventDefault();
  }
};

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

// FUNZIONE TIMER
let seconds = parseInt(sessionStorage.getItem("timer")) || 0;
const timer = document.getElementById("timer");

setInterval(() => {
  seconds++;
  timer.textContent = seconds;
  sessionStorage.setItem("timer", seconds);
}, 1000);
