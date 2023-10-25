document.write("<table>");
for (let i = 1; i <= 9; i++) {
  document.write("<tr>");
  for (let j = 1; j <= 9; j++) {
    document.write(`<td> ${i * j} </td>`);
  }
  document.write("</tr>");
}
document.write("</table>");
