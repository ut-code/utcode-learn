function clicked(e) {
  console.log(e.target.tagName);
}

const div = document.getElementById("div");

div.onclick = clicked;
