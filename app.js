const input = document.getElementById("todo-input");
const addButton = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

addButton.addEventListener("click", () => {

	<!-- create an li with the value of the input -->
	const todoText = input.value;
	const todoItem = document.createElement("li");
	const todoItemText = document.createTextNode(todoText);
	todoItem.appendChild(todoItemText);
	
	<!-- create a div inside the li -->
	const btnSection = document.createElement("div");
	btnSection.className = "btn-section";
	todoItem.appendChild(btnSection);
	
	<!-- create the image button inside the div-->
	const checkBtn = document.createElement("img");
	checkBtn.src = "./imgs/checked.png";
	checkBtn.alt = "Complete";
	checkBtn.className = "complete";
	btnSection.appendChild(checkBtn);
	
	const deleteBtn = document.createElement("img");
	deleteBtn.src = "./imgs/delete.png";
	deleteBtn.alt = "delete";
	deleteBtn.className = "delete";
	btnSection.appendChild(deleteBtn);
	
	<!-- append the li with div and images into the ul -->
	todoList.appendChild(todoItem);
	input.value = "";
	
	checkBtn.addEventListener("click", () => {

		todoItem.style = `
		text-decoration: line-through;
		color: green;
		font-style: italic;
		`;
	})
	
	deleteBtn.addEventListener("click", () => {

		todoList.removeChild(todoItem);
	})
});