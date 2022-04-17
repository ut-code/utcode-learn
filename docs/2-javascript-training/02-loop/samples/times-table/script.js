document.write("<table>");
for (let x = 1; x <= 9; x += 1) {
  document.write("<tr>");
  for (let y = 1; y <= 9; y += 1) {
    document.write(`<td>${x * y}</td>`);
  }
  document.write("</tr>");
}
document.write("</table>");
