class rect{
	constructor(x,y){
		this.x = x;
		this.y = y;
	}
}
class Image{
	constructor(x,y,src){
		this.x = x;
		this.y = y;
		this.src = src;
	}
}


//定義當被滑鼠選取的狀態
var SELECTED;
var MouseOriginX, MouseOriginY;

var rect1 = new rect(0,0);
var rect2 = new rect(0,50);
var rect3 = new rect(0,100);
var rect4 = new rect(50,0);
var rect5 = new rect(50,50);
var rect6 = new rect(50,100);
var rect7 = new rect(100,0);
var rect8 = new rect(100,50);
var rect9 = new rect(100,100);
var rects = [rect1, rect2, rect3, rect4, rect5, rect6, rect7, rect8, rect9];

var img1 = document.getElementById('img1');
var img2 = document.getElementById('img2');
var img3 = document.getElementById('img3');
var img4 = document.getElementById('img4');
var img5 = document.getElementById('img5');
var img6 = document.getElementById('img6');
var img7 = document.getElementById('img7');
var img8 = document.getElementById('img8');
var img9 = document.getElementById('img9');
var imgs = [img1,img2,img3,img4,img5,img6,img7,img8,img9];
var mymusic;
var mypoint = 0;
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
shuffle(imgs);

var canvas = document.createElement("canvas");
canvas.width = 1000;
canvas.height =150;
document.body.appendChild(canvas);
var ctx = canvas.getContext("2d");

function starttt(){
	//定義監聽事件
	canvas.addEventListener('mousedown', canvasMouseDownHandler, false);
	canvas.addEventListener('mousemove', canvasMouseMoveHandler, false);
	canvas.addEventListener('mouseup', canvasMouseUpHandler, false);
	canvas.addEventListener('mouseout', canvasMouseUpHandler, false);   //特別加上 mouseout 是以防指標回來後，矩形會黏著它
	//定義 mousedown 事件處理函數  ===============================================
	function canvasMouseDownHandler(evt){
		evt.preventDefault(); //取消預設行為

		//取得滑鼠點擊位置
		var coord = getMousePointerCoord(evt);		

		//記錄滑鼠點擊位置，作為一個原始位置
		MouseOriginX = coord.x;
		MouseOriginY = coord.y;
		for(let i = 0; i < rects.length; i++){
			if(Math.floor(MouseOriginX/50)*50==rects[i].x && Math.floor(MouseOriginY/50)*50==rects[i].y){
				rects[i].SELECTED = true;
				imgs[i].SELECTED = true;
				canvas.style.cursor = 'move';
			}
		}
	}
	//定義 mousemove 事件處理函數  ===============================================
	function canvasMouseMoveHandler(evt){
		evt.preventDefault(); //取消預設行為
		for(let i = 0; i < rects.length; i++){
			//檢測是否有選取到的物體，然後移動物體到 x、y 座標到滑鼠位置
			if(rects[i].SELECTED){
				var coord = getMousePointerCoord(evt);	//取得滑鼠點擊位置

				//使用起始的座標繪製一個矩形
				rects[i].x = rects[i].x + coord.x - MouseOriginX;
				rects[i].y = rects[i].y + coord.y - MouseOriginY;
				//更新滑鼠原始位置
				MouseOriginX = coord.x;
				MouseOriginY = coord.y;
				
				console.log(rects[1].x);
			}
		}
	}
	function canvasMouseUpHandler(evt){
		evt.preventDefault(); //取消預設行為
		for(let i = 0; i < rects.length; i++){
			if(rects[i].SELECTED){
				rects[i].SELECTED = false;							//為變數設定值為 false 表示沒有選取矩形
				rects[i].x = Math.floor(rects[i].x/50)*50;
				rects[i].y = Math.floor(rects[i].y/50)*50;
			}
		}
		
		canvas.style.cursor = 'auto';				//還原鼠標
	}
	var getMousePointerCoord = function(e){
		var evt = e || window.event;							//取得相容性 event 物件
		var supportLayer = typeof evt.clientX == 'number';		//確定目前瀏覽器是否支援 layerX
		var target = evt.target ? evt.target : evt.srcElement;	//取得事件物件的 HTML 元素
		var rect = canvas.getBoundingClientRect();              //取得 canvas 實際在網頁上的位置和寬高
		var img = canvas.getBoundingClientRect(); 

		//計算 x 座標，首先確定使用 layerX 還是 x，然後減去目前元素的邊距、邊框、留白
		var x = (supportLayer ? evt.clientX : evt.x) - rect.left;
		

		//計算 y 座標，首先確定使用 layerY 還是 y，然後減去目前元素的邊框、留白
		var y = (supportLayer ? evt.clientY : evt.y) - rect.top;

		//回傳一個 Object，包含座標屬性
		return {x: x, y: y};				
	};
}

		 
		  
function answer(){
	if (document.getElementById("demo").onclick = "true"){
		document.getElementById("img10").style.display = "inline";
		document.getElementById("try").innerHTML = "重新體驗請按f5";
		point();
		}
}
function reload(){
	window.location.reload();
}

function drawRect(ctx, color, x, y, width, height) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
	
}

function drawLine(ctx, color, start_x, start_y, end_x, end_y) {
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.moveTo(start_x, start_y);
    ctx.lineTo(end_x, end_y);
    ctx.stroke();
}

function drawtri(ctx,colar,sx,sy,mx,my,ex,ey){
	ctx.strokeStyle = colar;
	ctx.beginPath();
	ctx.moveTo(sx,sy);
	ctx.lineTo(mx,my);
	ctx.lineTo(ex,ey);
	ctx.lineTo(sx,sy);
	ctx.stroke();
}

function point(){
	console.log(rect1.x + " " + rect1.y);
	for(let i = 0; i<=8 ; i++){
		if(imgs[i].id == "img1" && rects[i].x == 300 && rects[i].y == 50){
			mypoint += 1;
			console.log(1);
		}
		if(imgs[i].id == "img2" && rects[i].x == 350 && rects[i].y == 50){
			mypoint += 1;
			console.log(2);
		}
		if(imgs[i].id == "img3" && rects[i].x == 350 && rects[i].y == 0){
			mypoint += 1;
			console.log(3);
		}		
		if(imgs[i].id == "img4" && rects[i].x == 250 && rects[i].y == 100){
			mypoint += 1;
			console.log(4);		
		}
		if(imgs[i].id == "img5" && rects[i].x == 250 && rects[i].y == 50){
			mypoint += 1;
			console.log(5);
		}
		if(imgs[i].id == "img6" && rects[i].x == 250 && rects[i].y == 0){
			mypoint += 1;
			console.log(6);
		}		
		if(imgs[i].id == "img7" && rects[i].x == 300 && rects[i].y == 0){
			mypoint += 1;
			console.log(7);		
		}
		if(imgs[i].id == "img8" && rects[i].x == 300 && rects[i].y == 100){
			mypoint += 1;
			console.log(8);
		}
		if(imgs[i].id == "img9" && rects[i].x == 350 && rects[i].y == 100){
			mypoint += 1 ;
			console.log(9);
		}
	}
	
window.alert("你答對了"+(mypoint)+"個,知道特殊學生的不方便了齁");

}

function musicstart(){
	mymusic = new sound("1.mp3");
	mymusic.play();
	
}
function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
		document.getElementById("try").style.display = "inline";
    }    
}

function draw(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	for(let i = 0; i < rects.length; i++){
		drawRect(ctx, "black", rects[i].x, rects[i].y, 50, 50);
	}
	
	for(let i = 0; i < 4; i++){
		drawLine(ctx, "yellow", 0, 50*i, 150, 50*i);
		drawLine(ctx, "yellow", 50*i, 0, 50*i, 150);
	}
	for(let i = 5; i < 9; i++){
		drawLine(ctx, "black", 250, 50*(i-5), 400, 50*(i-5));
		drawLine(ctx, "black", 50*i, 0, 50*i, 150);
	}
	drawtri(ctx,"blue",275,5,255,45,295,45);
	drawtri(ctx,"red",325,55,305,95,345,95);
	drawtri(ctx,"yellow",375,105,355,145,395,145);
	ctx.beginPath();
	ctx.strokeStyle = "red";
	ctx.arc(275, 125, 22.5, 0, 2 * Math.PI);
	ctx.stroke();
	ctx.beginPath();
	ctx.strokeStyle = "yellow";
	ctx.arc(325, 25, 22.5, 0, 2 * Math.PI);
	ctx.stroke();
	ctx.beginPath();
	ctx.strokeStyle = "blue";
	ctx.arc(375, 25, 22.5, 0, 2 * Math.PI);
	ctx.stroke();
	
	
	ctx.strokeStyle = "#FFFF37";
    ctx.strokeRect(255, 55, 40, 40);
	ctx.strokeStyle = "red";
    ctx.strokeRect(355, 55, 40, 40);
	ctx.strokeStyle = "blue";
    ctx.strokeRect(305, 105, 40, 40);
	drawLine(ctx,"black",200,0,200,150);
	for(let i = 0; i<imgs.length; i++){
		ctx.drawImage(imgs[i],0,0, 62, 63, rects[i].x, rects[i].y, 50, 50);
	}
	
}
function myFunction() {
  document.getElementById("demo").innerHTML = "體驗已開始";
  starttt();
  musicstart();
  document.getElementById("try").style.display = "inline";
}
setInterval(draw,10);