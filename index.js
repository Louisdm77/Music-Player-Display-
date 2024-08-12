const container = document.querySelector(".cont");
const columns = document.querySelectorAll(".col");
const msg = document.querySelector(".greet");
let colorIndex = 0;
let color = [`black`, `orange`, `yellow`, `green`, `blue`, "gray"];
columns.forEach((column, index) => {
  column.addEventListener("mouseover", () => {
    container.style.transition = "1s ease-in-out";
    column.style.transition = "1s ease-in-out";
    container.style.backgroundColor = color[index];
    column.style.backgroundColor = color[(index + 1) % color.length];
  });
  column.addEventListener("mouseout", () => {
    container.style.background = `rgb(148, 148, 241)`;
    column.style.backgroundColor = `rgba(139, 133, 133, 0.5)`;
    container.style.transition = "1s ease-out";
    column.style.transition = "1s ease-out";
  });
});

let code = setInterval(() => {
  msg.style.color = color[colorIndex];
  colorIndex = (colorIndex + 1) % color.length;
  msg.style.transition = "1s ease-in";
}, 1000);
