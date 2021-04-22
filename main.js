var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
ctx.beginPath();
ctx.fillStyle = 'olive';
ctx.moveTo(70, 60); 
ctx.lineTo(100, 20); 
ctx.lineTo(135, 60); 
ctx.lineTo(70, 60);
ctx.closePath();
ctx.fill(); //background function

// Text style
ctx.font = '20px serif';
ctx.textBaseline = 'hanging';
ctx.strokeStyle = 'green'
ctx.strokeText('Welcome to Meryem\'s House', 20, 1); // 20px left and 0px top


// Second part of the house
ctx.fillStyle = 'red';
ctx.fillRect(70, 60, 65, 70); //left top width and height

// Window1
ctx.fillStyle = 'white'; // fill / add the background color 
ctx.fillRect(75, 65, 20, 20);

// Window2
ctx.fillStyle = '';
ctx.fillRect(110, 65, 20, 20);

// Door
ctx.fillStyle = 'white'; // fill / add the background color
ctx.fillRect(90, 100, 25, 30); 







