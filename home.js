const overlay = document.getElementById("overlay");
const expandedNote = document.getElementById("expandedNote");

const noteTitle = document.getElementById("noteTitle");
const noteContent = document.getElementById("noteContent");

function openNote(title, content) {

  noteTitle.innerHTML = title;
  noteContent.innerHTML = content;

  overlay.classList.add("active");
  expandedNote.classList.add("active");
}

function closeNote() {
  overlay.classList.remove("active");
  expandedNote.classList.remove("active");
}

overlay.addEventListener("click", closeNote);