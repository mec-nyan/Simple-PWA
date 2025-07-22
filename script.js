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

todoList.innerHTML = "<p>Nothing to do.</p>"

const STORAGE_KEY = "shit-to-do";

function addSomeShit(someShit) {
	const shitToDo = getAllTheShit();

	shitToDo.push(someShit);

	window.localStorage.setItem(STORAGE_KEY, JSON.stringify(shitToDo));
}

function clearTheShit() {
	window.localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
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
		todoList.innerHTML = "<p>Nothing to do.</p>";
	} else {
		const newList = document.createElement("ul");
		shitToDo.forEach((std) => {
			const newEl = document.createElement("li");
			newEl.innerText = `${std}`;
			newList.appendChild(newEl);
		})
		todoList.innerHTML = "";
		todoList.appendChild(newList);
	}
}

const clearBtn = document.getElementById("btn3");
clearBtn.onclick = () => {
	clearTheShit();
	todoList.innerText = "All cleared.";
}
