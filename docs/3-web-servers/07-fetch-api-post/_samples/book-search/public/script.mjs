document.getElementById("search-button").onclick = async () => {
  const author = document.getElementById("author-input").value;

  const response = await fetch("/search", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ author: author }),
  });
  const books = await response.json();

  const bookList = document.getElementById("book-list");
  bookList.innerHTML = "";

  for (const book of books) {
    const li = document.createElement("li");
    li.textContent = book.title;
    bookList.appendChild(li);
  }
};
