function init() {

	// Grab the 'game' element and store it in the variable 'canvas'

var canvas = document.getElementById('game');

var ctx = canvas.getContext('2d');

var button = document.getElementById('button');

// middle starting positions
const startX = 400;
const startY = 200;



	// Fill the screen with a white background
	ctx.fillStyle = '#ffffff';
	ctx.fillRect (0, 0, canvas.width, canvas.height);
	

	//button.addEventListener('click', function() {

    var testfig = "U100"; //test input
    var letter = testfig.substring(0,1);
    var number = testfig.replace(/[^0-9]/g,'');

    var curY = 0;
    var curX = 0;

	switch(letter){
		case 'U': //up
		case 'u':
			ctx.beginPath();
        	ctx.moveTo(startX + curX, startY + curY);
        		curY = curY - number;
        	ctx.lineTo(startX + curX, startY + curY);
        	ctx.stroke();
			break;
        case 'D': //down
        case 'd':
        	ctx.beginPath();
        	ctx.moveTo(startX + curX, startY + curY);
        		curY = curY + number;
        	ctx.lineTo(startX + curX, startY + curY);
        	ctx.stroke();
			break;
		case 'L': //left
		case 'l':
        	ctx.beginPath();
        	ctx.moveTo(startX + curX, startY + curY);
        		curX = curX - number;
        	ctx.lineTo(startX + curX, startY + curY);
        	ctx.stroke();
			break;
		case 'R': //right
		case 'r':
        	ctx.beginPath();
        	ctx.moveTo(startX + curX, startY + curY);
        		curX = curX + number;
        	ctx.lineTo(startX + curX, startY + curY);
        	ctx.stroke();
			break;
		};
	//};
};

function clickHandler() {
	ctx.clearRect (0, 0, canvas.width, canvas.height);
};