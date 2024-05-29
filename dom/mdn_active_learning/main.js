const unList = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", clickFunction);

function clickFunction() {
  let inputValue = input.value;
  input.value = "";
  const listItem = document.createElement("li");
  const spanItem = document.createElement("span");
  const buttonItem = document.createElement("button");

  spanItem.textContent = inputValue;
  buttonItem.textContent = "Delete";

  buttonItem.addEventListener("click", function (e) {
    listItem.remove();
  });

  listItem.append(spanItem, buttonItem);

  unList.append(listItem);

  document.querySelector("input").focus();
}
