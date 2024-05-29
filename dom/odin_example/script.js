// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("p");
content.classList.add("content");
content.style.color = "red";
content.textContent = "Hey I'm red!";

const header = document.createElement("h3");
header.classList.add("header");
header.style.color = "blue";
header.textContent = "I'm a blue h3!";

const border = document.createElement("div");
border.classList.add("border");
border.style.cssText = "border: 1px solid black; background: pink;";

const headingInDiv = document.createElement("h1");
headingInDiv.classList.add("headingInDiv");
headingInDiv.textContent = "I'm in a div";

const pInDiv = document.createElement("p");
pInDiv.classList.add("pInDiv");
pInDiv.textContent = "ME TOO!";

border.append(headingInDiv, pInDiv);

container.append(content, header, border);
