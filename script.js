// -------------------------------------body tag class which is todos-------------------------------------------------
var todos = document.getElementById("todolist");

// ----------------------------------------------to blur when i call add() function ---------------------------------
let blur = document.getElementById("maim-container");

// ----------------------------------pop up when a add function call ------------------------------
// ---------------------------parent container of add function----------------------------
var newTodo = document.createElement("div");

// ------------------------------heading  newTodo parnet class ka------------------------------------
var todoHeading = document.createElement("h1");

// ----------------------button 1 ha new praent container ka ----------------------------------
var button1 = document.createElement("button");

// ----------------------button 2 ha new praent container ka ----------------------------------
var button2 = document.createElement("button");

// ----------------------input filled ha new praent container ka ----------------------------------

var todoDes = document.createElement("input");

// ------------------------------set attribute newTodo class ="popup"---------------------------------------------
newTodo.setAttribute("class", "popup");

// ---------------------------count is inittial true -------------------------
var count = true;

// ----------------------------------------------add function first time --------------------------------
function add() {
  if (count) {
    todos.appendChild(newTodo);
    newTodo.appendChild(todoHeading);
    newTodo.appendChild(todoDes);
    newTodo.appendChild(button1);
    newTodo.appendChild(button2);
    button1.setAttribute("class", "button button1");
    button1.setAttribute("onclick", "magic()");
    button2.setAttribute("class", "button button2");
    button2.setAttribute("class", "button button2");
    todoHeading.innerHTML = "Add new list";
    todoDes.setAttribute("type", "text");
    todoDes.setAttribute("id", "text");
    button1.innerHTML = "ADD";
    button2.innerHTML = "Close";
    // -------------------------------------now count is false ---------------------------------------

    count = false;
    blur.style.opacity = 0.2;
  }
}

// ------------------------now add function is  not work until the count is true------------------------------------

button2.addEventListener("click", () => {
  // -----------------------------to remove a child syntax is parent.removeChild(childname)  so body is parent in this case ----------------------------------
  todos.removeChild(newTodo);
  blur.style.opacity = 1;
  // --------------------------------now count value is true now we can call again add function------------------------------------

  count = true;
});

// ----------------------------------------------no item is p tag where we write a message------------------------------------------
var noitem = document.querySelector(".noitem");
let i = 0;

function magic() {


  var inputText = todoDes.value.trim(); // Trim the input to remove leading/trailing spaces

  // Check if the input field is empty
  if (!inputText) {
    // If the input is empty or contains only spaces, return without doing anything
    return;
  }
  // -------------------------------div praent  container for box then we will use diplay flex property in css--------------------
  var containers = document.getElementById("container2");

  // ---------------------------we create a horizonatl line-----------------------------
  var hr = document.createElement("hr");

  // -------------we create a Heading3 ---------------------------
  var h3 = document.createElement("h3");

  h3.setAttribute("id", "h3");

  // -------------------------------we create a button for deleting the box ------------------
  var button3 = document.createElement("button");
  button3.setAttribute("class", "buttons button3");
  var button4 = document.createElement("button");
  // -------------------------------we create a button for mark  the box content  ------------------

  button4.setAttribute("class", "buttons button4");

  // --------------------------------------------set a add_new_item  function with parameter i-----------------------------
  button4.setAttribute("onclick", `add_new_item(${i})`);

  // -----------------------------------------------create a boxes we can say its a child container of containers2------------------------------
  var box1 = document.createElement("div");
  box1.setAttribute("class", `box box${i++}`);

  var Heading1 = document.createElement("h4");
  Heading1.setAttribute("onclick", "newpage(this)");

  // --------------------------------to take input from the input field -----------------------------------------
  var input = todoDes.value;
  Heading1.innerHTML = `${input}`;
  containers.appendChild(box1);
  box1.appendChild(Heading1);
  box1.appendChild(hr);
  // box1.appendChild(h3);
  box1.appendChild(button3);
  box1.appendChild(button4);
  button3.innerHTML =
    "<i class='fa-solid fa-bucket' onclick='deletenod(this)'></i>";
  ("<i class='fa-solid fa-trash-can newTaskDelete' onclick='deletenod(this)'></i>");
  button4.innerHTML = " <i class='fa-solid fa-circle-plus'></i>";

  noitem.style.display = "none"; // Hide the "No item in the list" message
  todos.removeChild(newTodo);
  blur.style.opacity = 1;
  count = true;
}



function add_new_item(boxNumber) {


  
  todos.appendChild(newTodo);
  newTodo.appendChild(todoHeading);
  newTodo.appendChild(todoDes);
  newTodo.appendChild(button1);
  newTodo.appendChild(button2);
  button1.setAttribute("class", "button button1");
  button1.setAttribute("onclick", `magic_item(${boxNumber})`);
  button2.setAttribute("class", "button button2");
  button2.setAttribute("class", "button button2");
  todoHeading.innerHTML = "Add new item";
  todoDes.setAttribute("type", "text");
  button1.innerHTML = "ADD";
  button2.innerHTML = "Close";
  count = false;
  blur.style.opacity = 0.2;
}

function magic_item(boxNumber) {
  var inputText = todoDes.value.trim(); // Trim the input to remove leading/trailing spaces

  // Check if the input field is empty
  if (!inputText) {
    // If the input is empty or contains only spaces, return without doing anything
    return;
  }
  var container5 = document.querySelector(`.box${boxNumber}`);
  var h3 = document.createElement("h3");
  var text = document.getElementById("text").value;
  h3.innerHTML = `${text}   <button id='done' onclick='underline(this)'>DONE</button>`;

  container5.appendChild(h3);
  container5.style.minHeight = "300px"; // Set a minimum height
  // or
  container5.style.height = "auto";
  todos.removeChild(newTodo);
  blur.style.opacity = 1;
  count = true;
}

function deletenod(button) {
  var box = button.parentNode.parentNode;
  box.parentNode.removeChild(box);

  checkNoItem(); // Check if there are any remaining boxes
}

function checkNoItem() {
  var boxes = document.getElementsByClassName("box");

  if (boxes.length === 0) {
    displayNoItemMessage(); // Call the function to display the "No item in the list" message
  }
}

function displayNoItemMessage() {
  noitem.style.display = "block"; // Show the "No item in the list" message
}

function underline(button) {
  var h3 = button.parentNode;
  h3.style.textDecoration = "line-through";
}

// ------------------------------------------------------------------new function-------------------------
function goBack() {
  var list = document.getElementsByClassName("list")[0];
  var backButtonClicked = list.innerHTML === "BACK";

  if (backButtonClicked) {
    var boxes = document.getElementsByClassName("box");
    for (var i = 0; i < boxes.length; i++) {
      boxes[i].style.display = "inline-block"; // Change display property to inline-block
    }

    var container2 = document.getElementById("container2");
    container2.style.display = "flex"; // Set display property to flex
    container2.style.justifyContent = "space-around"; // Add justify-content property

    var container3 = document.getElementById("container3");
    container3.style.display = "none"; // Hide the container for individual tasks

    list.innerHTML = "Tasks List";

    var blank = document.getElementsByClassName("blank")[0];
    blank.innerHTML = "";

    var add = document.getElementsByClassName("add")[0];
    add.innerHTML =
      "<i class='fa-solid fa-circle-plus' onclick='add()'></i>Add Item";
  }
}

function newpage(h4) {
  var list = document.getElementsByClassName("list")[0];
  var backButtonClicked = list.innerHTML === "BACK";

  if (!backButtonClicked) {
    list.innerHTML = "BACK";
    list.setAttribute("onclick", "goBack()"); // Add an onclick event handler to the "BACK" button

    var blank = document.getElementsByClassName("blank")[0];
    blank.innerHTML = h4.innerText;

    var add = document.getElementsByClassName("add")[0];
    add.innerHTML = "<i class='fa-solid fa-circle-plus' onclick='add()'></i>";

    var box = h4.parentNode;
    var boxes = document.getElementsByClassName("box");
    for (var i = 0; i < boxes.length; i++) {
      if (boxes[i] === box) {
        boxes[i].style.display = "block"; // Display the selected box
      } else {
        boxes[i].style.display = "none"; // Hide other boxes
      }
    }
  }
}

// Call the checkNoItem function initially to handle the initial state
checkNoItem();
