const d = document.querySelectorAll("strong");
function highlight() {

	d.forEach((element)=>{
		element.style.color="green";
	})
}

function return_normal() {
	d.forEach((element)=>{
		element.style.color="black";
	})
}
