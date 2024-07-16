const dis = document.getElementById("dis");

function appendDisplay(input){
	dis.value += input;
}

const calculate = () => {
	dis.value = eval(dis.value);	
}

const clearDisplay = ()=> {
	dis.value = "";
}