export function changeColor() {
	const red = Math.floor(Math.random() * 256);
	const green = Math.floor(Math.random() * 256);
	const blue = Math.floor(Math.random() * 256);
	const a = Math.random().toFixed(2);
	const newColor = `rgba(${red}, ${green}, ${blue}, ${a})`;
	const invertedColor = `rgb(${255 - red}, ${255 - green}, ${255 - blue})`;

	document.body.style.backgroundColor = newColor;
	const header = document.querySelector(`header`);
	header.style.color = invertedColor;
	console.log(newColor);
}
