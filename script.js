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
