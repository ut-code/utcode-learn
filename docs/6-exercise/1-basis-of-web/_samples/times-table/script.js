//表の一列(横のヘッダー含む)を描画
function writeRow(x) {
  let row = "<tr>";
  row += getSideHeader(x);
  for (i = 1; i <= 9; i++) {
    row += `<td> ${x * i} </td>`;
  }
  row += "</tr>";
  document.write(row);
}
function getSideHeader(x) {
  return `<th> ${x} </th>`;
}

//表のヘッダー(上の列)を描画
function writeHeaderRow() {
  let header = "";
  header += "<th> × </th>";
  for (i = 1; i <= 9; i++) {
    header += `<th> ${i} </th>`;
  }
  document.write(header);
}

//表のbodyと横のヘッダーを描画
function writeBody() {
  for (x = 1; x <= 9; x++) {
    writeRow(x);
  }
}

function main() {
  document.write("<table>");
  writeHeaderRow();
  writeBody();
  document.write("</table>");
}

main();
