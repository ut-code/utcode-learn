import { format } from "date-fns";

document.getElementById("app").textContent = format(
  new Date("2022-01-10"),
  "yyyy 年 MM 月 dd 日",
);
