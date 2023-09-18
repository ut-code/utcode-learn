function clicked(e) {
  document.write(e.target.tagName);
}

const div = document.getElementById("button");

div.onclick = clicked;
