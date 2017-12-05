var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");


var br = 13;
var cw = canvas.width;
var ch = canvas.height;
	
function drawcloudone(){
	ctx.beginPath();
    ctx.moveTo(170, 80);
    ctx.bezierCurveTo(130, 100, 130, 150, 230, 150);
    ctx.bezierCurveTo(250, 180, 320, 180, 340, 150);
    ctx.bezierCurveTo(420, 150, 420, 120, 390, 100);
    ctx.bezierCurveTo(430, 40, 370, 30, 340, 50);
    ctx.bezierCurveTo(320, 5, 250, 20, 250, 50);
    ctx.bezierCurveTo(200, 5, 150, 20, 170, 80);
    ctx.closePath();
    ctx.lineWidth = 5;
    ctx.fillStyle = '#ffffff';
    ctx.fill();
    ctx.strokeStyle = '#f0f00f';
    ctx.stroke();
}

drawcloudone();