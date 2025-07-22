const btn = document.getElementById("btn");

const num = document.getElementById("big-num");

let count = 0;

num.innerText = count;

btn.onclick = () => {
	count++;
	num.innerText = count;
}

const btn2 = document.getElementById("btn2");

btn2.onclick = () => {
	count = 0;
	num.innerText = count;
}

const todoList = document.getElementById("todo");

todoList.innerText = "Nothing to do.";

const STORAGE_KEY = "shit-to-do";

function addSomeShit(someShit) {
	const shitToDo = getAllTheShit();

	shitToDo.push(someShit);

	window.localStorage.setItem(STORAGE_KEY, JSON.stringify(shitToDo));
}

function getAllTheShit() {
	const data = window.localStorage.getItem(STORAGE_KEY);

	const shitToDo = data ? JSON.parse(data) : [];

	return shitToDo;
}

const userInput = document.getElementById("user-input");

userInput.onkeydown = (e) => {
	if (e.key === "Enter" && userInput.value !== "") {
		let newItem = userInput.value;
		userInput.value = "";
		console.log(`Item: ${newItem}`);
		addSomeShit(newItem);

		shitToDo = getAllTheShit();
		refreshTodo(shitToDo);
	}
}

function refreshTodo(shitToDo) {
	if (shitToDo.lenght > 0) {
		todoList.innerText = "Nothing here.";
	} else {
		todoList.innerText = "Shit to do: ";
		shitToDo.forEach((std) => {
			todoList.innerText += `${std}, `;
		})
	}
}
