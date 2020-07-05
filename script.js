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
function initgrid(){
	mouse = 0;
	for ( let step = 0; step < 16*16; step++){
		const gridelement = document.createElement('div');
		gridelement.ondragstart = function() {return false;}
		gridelement.addEventListener('mouseenter', active =>{
			draw(gridelement);
			//gridelement.className = "active";
			//console.log("activated");
		});
		gridelement.addEventListener('mouseout', inactive =>{
			//gridelement.className = "inactive";
			//console.log("deactivated");mouse = 0;
		});
		grid.appendChild(gridelement);
	}
}
function draw(elem){
	if(mouse==1)elem.style.backgroundColor = color;
	console.log("mouse is " + mouse);
}
initgrid();