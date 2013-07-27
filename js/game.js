function init() {

	// Grab the 'game' element and store it in the variable 'canvas'

var canvas = document.getElementById('game');

var ctx = canvas.getContext('2d');

var button = document.getElementById('button')



	// set the context of the canvas to 2d and store it in the variable ctx


	// Fill the screen with a white background
	ctx.fillStyle = '#ffffff';
	ctx.fillRect (0, 0, canvas.width, canvas.height);
	
	// draw a line
	//ctx.beginPath();
	//ctx.moveTo(100, 100);
	//ctx.lineTo(300,450);
	//ctx.stroke();

	//ctx.beginPath();
	//ctx.moveTo(200, 400);
	//ctx.lineTo(400, 150);
	//ctx.stroke();

	//Display the text 'Hello World!'
	//var phrase = 'Hello World!';
	//var mt = ctx.measureText(phrase);
	//var xcoord = (canvas.width / 2) - (mt.width / 2);

	//ctx.font = 'bold 16px Arial, sans-serif';
	//ctx.fillStyle = '#000000';
	//ctx.fillText (phrase, xcoord, 200);
	//ctx.textAlign = 'center';
	
	button.addEventListener('click', function() {
		ctx.beginPath();
        ctx.moveTo(x1.value, y1.value);
        ctx.lineTo(x2.value, y2.value);
        ctx.stroke();}, false);
        };

function clickHandler() {
	ctx.clearRect (0, 0, canvas.width, canvas.height);
};