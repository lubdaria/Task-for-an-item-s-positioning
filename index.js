function positionAt(anchor, position, elem) {
  const coordsAnchor = anchor.getBoundingClientRect();
  const coordsElem = elem.getBoundingClientRect();

  if(position === "top"){
    elem.style.top = coordsAnchor.top - coordsElem.height + "px"; 
    elem.style.left = coordsAnchor.left + "px";
  }
  else if(position === "right"){
    elem.style.left = coordsAnchor.right + "px";
    elem.style.top = coordsAnchor.top + "px";
  }
  else if(position === "bottom"){
    elem.style.left = coordsAnchor.right - coordsElem.width + "px";
    elem.style.top = coordsAnchor.bottom + "px";
  }
}

function showNote(anchor, position, html) {
  let note = document.createElement('div');
  note.className = "note";
  note.innerHTML = html;
  document.body.append(note);

  positionAt(anchor, position, note);
}

let blockquote = document.querySelector('blockquote');

showNote(blockquote, "top", "note above");
showNote(blockquote, "right", "note at the right");
showNote(blockquote, "bottom", "note below");