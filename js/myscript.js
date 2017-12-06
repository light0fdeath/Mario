// JavaScript Document
//create canvas
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

//color palette
var red = "rgb(212,0,0)";
var yellow = "rgb(237,202,0)";
var brown = "rgb(137,128,0)";
var i = 0;
var j = 0;
var k = 0;

document.addEventListener("keyup", keyUpHandler, false);
function keyUpHandler(e){
	
	if(e.keyCode == 38){
		j=200;
	}
}

function marioImage(){

	//rectangle spam
	ctx.fillStyle = brown;
	ctx.fillRect (i+510, 102+400-j, 5, 5);
	ctx.fillRect (i+516, 102+400-j, 5, 5);
	ctx.fillRect (i+522, 102+400-j, 5, 5);
	ctx.fillRect (i+528, 102+400-j, 5, 5);

	ctx.fillRect (i+558, 102+400-j, 5, 5);
	ctx.fillRect (i+564, 102+400-j, 5, 5);
	ctx.fillRect (i+570, 102+400-j, 5, 5);
	ctx.fillRect (i+576, 102+400-j, 5, 5);

	ctx.fillRect (i+516, 96+400-j, 5, 5);
	ctx.fillRect (i+522, 96+400-j, 5, 5);
	ctx.fillRect (i+528, 96+400-j, 5, 5);

	ctx.fillRect (i+558, 96+400-j, 5, 5);
	ctx.fillRect (i+564, 96+400-j, 5, 5);
	ctx.fillRect (i+570, 96+400-j, 5, 5);

	ctx.fillStyle = red;
	ctx.fillRect (i+522, 90+400-j, 5, 5);
	ctx.fillRect (i+528, 90+400-j, 5, 5);
	ctx.fillRect (i+534, 90+400-j, 5, 5);

	ctx.fillRect (i+552, 90+400-j, 5, 5);
	ctx.fillRect (i+558, 90+400-j, 5, 5);
	ctx.fillRect (i+564, 90+400-j, 5, 5);

	ctx.fillStyle = yellow;
	ctx.fillRect (i+510, 84+400-j, 5, 5);
	ctx.fillRect (i+516, 84+400-j, 5, 5);
	ctx.fillStyle = red;
	ctx.fillRect (i+522, 84+400-j, 5, 5);
	ctx.fillRect (i+528, 84+400-j, 5, 5);
	ctx.fillRect (i+534, 84+400-j, 5, 5);
	ctx.fillRect (i+540, 84+400-j, 5, 5);
	ctx.fillRect (i+546, 84+400-j, 5, 5);
	ctx.fillRect (i+552, 84+400-j, 5, 5);
	ctx.fillRect (i+558, 84+400-j, 5, 5);
	ctx.fillRect (i+564, 84+400-j, 5, 5);
	ctx.fillStyle = yellow;
	ctx.fillRect (i+570, 84+400-j, 5, 5);
	ctx.fillRect (i+576, 84+400-j, 5, 5);

	ctx.fillRect (i+510, 78+400-j, 5, 5);
	ctx.fillRect (i+516, 78+400-j, 5, 5);
	ctx.fillRect (i+522, 78+400-j, 5, 5);
	ctx.fillStyle = red;
	ctx.fillRect (i+528, 78+400-j, 5, 5);
	ctx.fillRect (i+534, 78+400-j, 5, 5);
	ctx.fillRect (i+540, 78+400-j, 5, 5);
	ctx.fillRect (i+546, 78+400-j, 5, 5);
	ctx.fillRect (i+552, 78+400-j, 5, 5);
	ctx.fillRect (i+558, 78+400-j, 5, 5);
	ctx.fillStyle = yellow;
	ctx.fillRect (i+564, 78+400-j, 5, 5);
	ctx.fillRect (i+570, 78+400-j, 5, 5);
	ctx.fillRect (i+576, 78+400-j, 5, 5);

	ctx.fillRect (i+510, 72+400-j, 5, 5);
	ctx.fillRect (i+516, 72+400-j, 5, 5);
	ctx.fillStyle = brown;
	ctx.fillRect (i+522, 72+400-j, 5, 5);
	ctx.fillStyle = red;
	ctx.fillRect (i+528, 72+400-j, 5, 5);
	ctx.fillStyle = yellow;
	ctx.fillRect (i+534, 72+400-j, 5, 5);
	ctx.fillStyle = red;
	ctx.fillRect (i+540, 72+400-j, 5, 5);
	ctx.fillRect (i+546, 72+400-j, 5, 5);
	ctx.fillStyle = yellow;
	ctx.fillRect (i+552, 72+400-j, 5, 5);
	ctx.fillStyle = red;
	ctx.fillRect (i+558, 72+400-j, 5, 5);
	ctx.fillStyle = brown;
	ctx.fillRect (i+564, 72+400-j, 5, 5);
	ctx.fillStyle = yellow;
	ctx.fillRect (i+570, 72+400-j, 5, 5);
	ctx.fillRect (i+576, 72+400-j, 5, 5);

	ctx.fillStyle = brown;
	ctx.fillRect (i+510, 66+400-j, 5, 5);
	ctx.fillRect (i+516, 66+400-j, 5, 5);
	ctx.fillRect (i+522, 66+400-j, 5, 5);
	ctx.fillRect (i+528, 66+400-j, 5, 5);
	ctx.fillStyle = red;
	ctx.fillRect (i+534, 66+400-j, 5, 5);
	ctx.fillRect (i+540, 66+400-j, 5, 5);
	ctx.fillRect (i+546, 66+400-j, 5, 5);
	ctx.fillRect (i+552, 66+400-j, 5, 5);
	ctx.fillStyle = brown;
	ctx.fillRect (i+558, 66+400-j, 5, 5);
	ctx.fillRect (i+564, 66+400-j, 5, 5);
	ctx.fillRect (i+570, 66+400-j, 5, 5);
	ctx.fillRect (i+576, 66+400-j, 5, 5);

	ctx.fillStyle = brown;
	ctx.fillRect (i+516, 60+400-j, 5, 5);
	ctx.fillRect (i+522, 60+400-j, 5, 5);
	ctx.fillRect (i+528, 60+400-j, 5, 5);
	ctx.fillStyle = red;
	ctx.fillRect (i+534, 60+400-j, 5, 5);

	ctx.fillStyle = brown;
	ctx.fillRect (i+540, 60+400-j, 5, 5);
	ctx.fillRect (i+546, 60+400-j, 5, 5);
	ctx.fillStyle = red;
	ctx.fillRect (i+552, 60+400-j, 5, 5);
	ctx.fillStyle = brown;
	ctx.fillRect (i+558, 60+400-j, 5, 5);
	ctx.fillRect (i+564, 60+400-j, 5, 5);
	ctx.fillRect (i+570, 60+400-j, 5, 5);

	ctx.fillRect (i+522, 54+400-j, 5, 5);
	ctx.fillRect (i+528, 54+400-j, 5, 5);
	ctx.fillStyle = red;
	ctx.fillRect (i+534, 54+400-j, 5, 5);
	ctx.fillStyle = brown;
	ctx.fillRect (i+540, 54+400-j, 5, 5);
	ctx.fillRect (i+546, 54+400-j, 5, 5);
	ctx.fillRect (i+552, 54+400-j, 5, 5);

	ctx.fillStyle = yellow;
	ctx.fillRect (i+528, 48+400-j, 5, 5);
	ctx.fillRect (i+534, 48+400-j, 5, 5);
	ctx.fillRect (i+540, 48+400-j, 5, 5);
	ctx.fillRect (i+546, 48+400-j, 5, 5);
	ctx.fillRect (i+552, 48+400-j, 5, 5);
	ctx.fillRect (i+558, 48+400-j, 5, 5);
	ctx.fillRect (i+564, 48+400-j, 5, 5);

	ctx.fillStyle = brown;
	ctx.fillRect (i+516, 42+400-j, 5, 5);
	ctx.fillRect (i+522, 42+400-j, 5, 5);
	ctx.fillStyle = yellow;
	ctx.fillRect (i+528, 42+400-j, 5, 5);
	ctx.fillRect (i+534, 42+400-j, 5, 5);
	ctx.fillRect (i+540, 42+400-j, 5, 5);
	ctx.fillRect (i+546, 42+400-j, 5, 5);
	ctx.fillStyle = brown;
	ctx.fillRect (i+552, 42+400-j, 5, 5);
	ctx.fillRect (i+558, 42+400-j, 5, 5);
	ctx.fillRect (i+564, 42+400-j, 5, 5);
	ctx.fillRect (i+570, 42+400-j, 5, 5);

	ctx.fillRect (i+516, 36+400-j, 5, 5);
	ctx.fillStyle = yellow;
	ctx.fillRect (i+522, 36+400-j, 5, 5);
	ctx.fillStyle = brown;
	ctx.fillRect (i+528, 36+400-j, 5, 5);
	ctx.fillRect (i+534, 36+400-j, 5, 5);
	ctx.fillStyle = yellow;
	ctx.fillRect (i+540, 36+400-j, 5, 5);
	ctx.fillRect (i+546, 36+400-j, 5, 5);
	ctx.fillRect (i+552, 36+400-j, 5, 5);
	ctx.fillStyle = brown;
	ctx.fillRect (i+558, 36+400-j, 5, 5);
	ctx.fillStyle = yellow;
	ctx.fillRect (i+564, 36+400-j, 5, 5);
	ctx.fillRect (i+570, 36+400-j, 5, 5);
	ctx.fillRect (i+576, 36+400-j, 5, 5);

	ctx.fillStyle = brown;
	ctx.fillRect (i+516, 30+400-j, 5, 5);
	ctx.fillStyle = yellow;
	ctx.fillRect (i+522, 30+400-j, 5, 5);
	ctx.fillStyle = brown;
	ctx.fillRect (i+528, 30+400-j, 5, 5);
	ctx.fillStyle = yellow;
	ctx.fillRect (i+534, 30+400-j, 5, 5);
	ctx.fillRect (i+540, 30+400-j, 5, 5);
	ctx.fillRect (i+546, 30+400-j, 5, 5);
	ctx.fillStyle = brown;
	ctx.fillRect (i+552, 30+400-j, 5, 5);
	ctx.fillStyle = yellow;
	ctx.fillRect (i+558, 30+400-j, 5, 5);
	ctx.fillRect (i+564, 30+400-j, 5, 5);
	ctx.fillRect (i+570, 30+400-j, 5, 5);

	ctx.fillStyle = brown;
	ctx.fillRect (i+522, 24+400-j, 5, 5);
	ctx.fillRect (i+528, 24+400-j, 5, 5);
	ctx.fillRect (i+534, 24+400-j, 5, 5);
	ctx.fillStyle = yellow;
	ctx.fillRect (i+540, 24+400-j, 5, 5);
	ctx.fillRect (i+546, 24+400-j, 5, 5);
	ctx.fillStyle = brown;
	ctx.fillRect (i+552, 24+400-j, 5, 5);
	ctx.fillStyle = yellow;
	ctx.fillRect (i+558, 24+400-j, 5, 5);

	ctx.fillStyle = red;
	ctx.fillRect (i+522, 18+400-j, 5, 5);
	ctx.fillRect (i+528, 18+400-j, 5, 5);
	ctx.fillRect (i+534, 18+400-j, 5, 5);
	ctx.fillRect (i+540, 18+400-j, 5, 5);
	ctx.fillRect (i+546, 18+400-j, 5, 5);
	ctx.fillRect (i+552, 18+400-j, 5, 5);
	ctx.fillRect (i+558, 18+400-j, 5, 5);
	ctx.fillRect (i+564, 18+400-j, 5, 5);
	ctx.fillRect (i+570, 18+400-j, 5, 5);

	ctx.fillRect (i+528, 12+400-j, 5, 5);
	ctx.fillRect (i+534, 12+400-j, 5, 5);
	ctx.fillRect (i+540, 12+400-j, 5, 5);
	ctx.fillRect (i+546, 12+400-j, 5, 5);
	ctx.fillRect (i+552, 12+400-j, 5, 5);
	ctx.fillRect (i+558, 12+400-j, 5, 5);

}
function draw(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	marioImage();

	k++;
		if (k = 200){
			j = 0;
		}
	}

setInterval(draw, 20);