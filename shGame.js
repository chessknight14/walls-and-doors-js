const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = 600;
canvas.height = 400;

console.log('hey');
//background?
function bg(){
	
	c.fillStyle = "#000000"; // <- ah
	c.fillRect(0,0, canvas.width, canvas.height);

	//or we could do this in render next time?
}
bg();

/*this is the Programming Police, global variables are not allowed>:( */

//_________________________
class Wall{
	constructor(x, y, wd, ht){
		this.position = {x, y}
		this.width = wd;
		this.height = ht;
		
		this.movement = {x: 0, y: 0}
	}
	
	draw(){
		c.fillStyle = '#fcf9fc';
		c.fillRect(this.position.x, this.position.y, this.width, this.height);
		
	}
	
	update(){
		this.draw();
		
		const moving = 3;
		this.position.x += this.movement.x;
		this.position.y += this.movement.y;
		
		if (keys.left.pressed){
			this.movement.x = moving;
		} else if (keys.right.pressed){
			this.movement.x = -moving;
		} else{
			this.movement.x = 0;
		}
		
		if (keys.up.pressed){
			this.movement.y = moving;
		} else if (keys.down.pressed){
			this.movement.y = -moving;
		} else{
			this.movement.y = 0;
		}
	}
	
}

class Door{
	constructor(x, y){
		this.position = {x, y}
		
		this.height = 40;
		this.width = 30;
		this.movement = {x: 0, y: 0}
		
	}
	
	draw(){
		c.fillStyle = '#fcf9fc';
		c.fillRect(this.position.x, this.position.y, this.width, this.height);
		
		c.fillStyle = '#000000';
		c.fillRect(this.position.x + 20, this.position.y + 20, 5, 10);
		
	}
	
	update(){
		this.draw();
		//illusion of moving doors?
		const moving = 3;
		this.position.x += this.movement.x;
		this.position.y += this.movement.y;
		
		if (keys.left.pressed){
			this.movement.x = moving;
		} else if (keys.right.pressed){
			this.movement.x = -moving;
		} else{
			this.movement.x = 0;
		}
		
		if (keys.up.pressed){
			this.movement.y = moving;
		} else if (keys.down.pressed){
			this.movement.y = -moving;
		} else{
			this.movement.y = 0;
		}
		
		
	}
	
}



class Player{
	
	constructor(){
		
		this.position = {x: 300, y: 200}
		this.width = 9;
		this.height = 9;
		this.velocity = {x: 0, y: 0}
	}
	
	draw(){ //draw ze person guy
		c.beginPath();
		c.arc(this.position.x, this.position.y, 9, 0, 2 * Math.PI);
		c.fillStyle = '#fcf9fc';
		c.fill();
		
	}
	
	update(){ //update peron's draw and physics
		const speed = 3;
		
		this.draw();
		
		//this.position.x += this.velocity.x;
		//this.position.y += this.velocity.y;
		
		
		//player's movement moved?
		/*if (keys.left.pressed){
			this.velocity.x = -speed;
		} else if (keys.right.pressed){
			this.velocity.x = speed;
		} else{
			this.velocity.x = 0;
		}
	
		if (keys.up.pressed){
		this.velocity.y = -speed;
		} else if (keys.down.pressed){
		this.velocity.y = speed;
		} else{
		this.velocity.y = 0;
		}*/
	
	
	}  /*END OF UPDATE()*/
	
}  /*END OF PLAYER CLASS*/

const guy = new Player();
const doors = [new Door(540, 300), new Door(100, 100), new Door(250, 300), new Door(700, -10)];
const walls = [new Wall(350, 250, 10, 200), new Wall(40, 180, 200, 10), 
	new Wall(450, 210, 200, 10), new Wall(800, -30, 10, 350)];
//should do P(x: 100, y: 200)

const keys = {
	right: {
	   pressed: false
	},
	left: {
	   pressed: false
	},
	up: {
		pressed: false
	},
	down: {
		pressed: false
	}
};

guy.update();
//doors.update();


         /*             /\    FUNCTIONS AND OR CLASSES   /\*/
		 
//add font and text here possibly
		 




/*								RENDERED FUNCT					*/

function render(){
	requestAnimationFrame(render);
	c.clearRect(0,0, canvas.width, canvas.height); 
	//draw/update everything \/
	bg();
	guy.update();
	
	
	//updating ALL doors
	doors.forEach((door) => {
		door.update();
	});
	
	walls.forEach((wall) => {
		wall.update();
	});
	
	/*      Collisions?      */
	
	
	
	
} /*  IT'S POSITIONING AREA IS IN THE CENTER*/

render(); //don't forget to call it though

addEventListener('keydown', ({keyCode}) =>  {
	switch (keyCode){
		case 38:
			keys.up.pressed = true;
			break;
		case 40:
			keys.down.pressed = true;
			break;
		case 37:
			keys.left.pressed = true;
			break;
		case 39:
			keys.right.pressed = true;
			break;
	}
	
})

addEventListener('keyup', ({keyCode}) =>  {
	switch (keyCode){
		case 38:
			
			keys.up.pressed = false;
			break;
		case 40:
			
			keys.down.pressed = false;
			break;
		case 37:
			
			keys.left.pressed = false;
			break;
		
		case 39:
			
			keys.right.pressed = false;
			break;
	}
	
})
