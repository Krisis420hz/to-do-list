"strict mode";
const inputField = document.getElementById("input-field");
const listContainer = document.getElementById("list-container");

function addTask() {
  // Checking if the textfield is empty
  if (inputField.value === "") {
    alert("You should write something");
  } else {
    // Creating a new list element
    let li = document.createElement("li");
    // Setting value of input field
    li.innerHTML = inputField.value;
    // Appending the new li element to the ul element
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  // Clearing the input field after a task is added
  inputField.value = "";
  saveData();
}

inputField.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addTask();
});

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
