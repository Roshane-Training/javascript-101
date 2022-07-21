const category = document.getElementById('category')
const secondNumber = document.getElementById('secondField')

category.onblur = (e) => {
	switch (e.target.value) {
		case 'circ':
		case 'radius':
		case 'diameter':
			hideElement(secondNumber, 'hidden')
			break
		default:
			showElement(secondNumber, 'hidden')
			break
	}
}

document.getElementById('calcBtn').onclick = () => {
	const num1 = document.getElementById('num1').value
	const num2 = document.getElementById('num2').value
	const category = document.getElementById('category').value
	const result = document.getElementById('result')

	let calculations = ''

	switch (category) {
		case '+':
		case '-':
		case '*':
		case '/':
			calculations = `${parseInt(num1)} ${category} ${parseInt(num2)}`
			result.innerHTML = eval(calculations)
			break
		case 'circ':
			result.innerHTML = (Math.pow(parseInt(num1), 2) / (4 * Math.PI)).toFixed(3)
			break
		case 'radius':
			result.innerHTML = (Math.PI * Math.pow(parseInt(num1), 2)).toFixed(3)
			break
		case 'diameter':
			result.innerHTML = ((1 / 4) * Math.PI * Math.pow(parseInt(num1), 2)).toFixed(3)
			break
		case 'rect':
			result.innerHTML = (parseInt(num1) * parseInt(num2)).toFixed(3)
			break
	}
}

function hideElement(element, hideClass) {
	element.classList.add(hideClass)
}

function showElement(element, hideClass) {
	element.classList.remove(hideClass)
}
