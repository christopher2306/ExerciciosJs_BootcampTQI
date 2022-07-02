let count = 0;

const CURRENT_NUMBER = document.getElementById('currentNumber');

document.getElementById("subtrair").addEventListener("click",decrement)
document.getElementById("adicionar").addEventListener("click",increment)

function increment() {
		if(count < 10){
			count++;
			CURRENT_NUMBER.innerHTML = count;
			document.getElementById("subtrair").style.display = "block";
		} else {
			document.getElementById("adicionar").style.display = "none";
		}
	
}

function decrement() {
	if(count > -10){
		count--;
		CURRENT_NUMBER.innerHTML = count;
		document.getElementById("adicionar").style.display = "block";
	} else {
		document.getElementById("subtrair").style.display = "none";
	}

}



