const grid = document.getElementById('grid');
isClicked = 0;
color = "red";
rainbow = ["rgba(238,130,238,1)","rgba(75,0,130,1)","rgba(0,0,255,1)","rgba(0,128,0,1)","rgba(255,255,0,1)","rgba(255,165,0,1)","rgba(255,0,0,1)"];
grid.addEventListener('mousedown', e =>{
	isClicked = 1;
	} );
grid.addEventListener('mouseup', e=>{
	isClicked = 0;
});
grid.addEventListener('mouseleave', e=>{
	isClicked = 0;
});
function initgrid(x){
	for ( let step = 0; step < x*x; step++){
		const gridelement = document.createElement('div');
		gridelement.ondragstart = function() {return false;}
		gridelement.addEventListener('mouseenter', active =>{
			draw(gridelement);
		});
		gridelement.addEventListener('mousedown', todraw =>{
			isClicked = 1;
			draw(gridelement);
		});
		grid.appendChild(gridelement);
	}
}
// function cleargrid(){
// 	document.getElementById("grid").innerHTML = '';
// 	setsize();
// }
function draw(elem){
	if(isClicked==1){
		if(color=='rainbow')
			elem.style.backgroundColor = rainbow[Math.floor(Math.random()*7)];
		else
			elem.style.backgroundColor = color;
		if(color=='sketch'){
			const style = getComputedStyle(elem);
			if(style.opacity > 0 ) elem.style.opacity = style.opacity - 0.1;
		}
			
	}
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