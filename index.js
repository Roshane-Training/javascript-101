document.getElementById('calcBtn').onclick = () => {
	const num1 = document.getElementById('num1').value
	const num2 = document.getElementById('num2').value
	const operand = document.getElementById('operand').value

	const calculations = `${parseInt(num1)} ${operand} ${parseInt(num2)}`

	document.getElementById('result').innerHTML = eval(calculations)
}
