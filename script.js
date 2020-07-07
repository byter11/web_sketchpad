const grid = document.getElementById('grid');
mouse = 0;
color = "red";
grid.addEventListener('mousedown', e =>{
	mouse = 1;
	console.log('mouse is'+ mouse);
	} );
grid.addEventListener('mouseup', e=>{
	mouse = 0;
});
grid.addEventListener('mouseleave', e=>{
	mouse = 0;
});
function initgrid(x){
	for ( let step = 0; step < x*x; step++){
		const gridelement = document.createElement('div');
		gridelement.ondragstart = function() {return false;}
		gridelement.addEventListener('mouseenter', active =>{
			draw(gridelement);
		});
		grid.appendChild(gridelement);
		console.log('yo');
	}
}
// function cleargrid(){
// 	document.getElementById("grid").innerHTML = '';
// 	setsize();
// }
function draw(elem){
	if(mouse==1)elem.style.backgroundColor = color;
	console.log("mouse is " + mouse);
}
function set_color(button, newcolor){
	color = newcolor;
	document.getElementsByClassName("but-active")[0].className = "";
	button.className = "but-active";
	
}
function setsize(){
	size = document.getElementById('size-input');
	if( size.value>1){
		document.getElementById("grid").innerHTML = '';
		document.body.style.setProperty('--size',size.value)
		initgrid(size.value);
	}
}
function mimicsize(){
	sizevalue = document.getElementById('mimic');
	size = document.getElementById('size-input');
	sizevalue.innerHTML = size.value;
}
initgrid(16);
document.getElementById('size-input').value = '16';