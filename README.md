# SpecEdc
try
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>My test page</title>
	<style>
	.center {
	  margin: 0;
	  position: absolute;
	  top: 70%;
	  left: 50%;
	  -ms-transform: translate(-50%, -50%);
	  transform: translate(-50%, -50%);
	}
	img{
	  position: absolute;
	  width: 50px;
	  height: 50px;
	  display:none;
	}
	#img10{
	  position: absolute;
	  left:34%;
	  width: 320px;
	  height: 300px;
	  display:none;
	}
	
	html{
	/*設定網頁背景色*/
	background-color:	#FFDCB9	;
	font-family:  'Microsoft JhengHei';
	}
	button{
	position :absolute;
	top : 50%;
	left : 10%;
	color: #0099CC; 
	background: transparent;
	border: 2px solid #FFA042;
	border-radius: 6px; 
	border-radius: 6px; 
	border: none;
    	color: white;
    	padding: 10px 20px;
  	 text-align: center;
   	 display: inline-block;
   	 font-size: 25spx;
   	 margin: 3px 2px;
   	 -webkit-transition-duration: 0.4s; /* Safari */
   	 transition-duration: 0.4s;
    	cursor: pointer;
    	text-decoration: none;
    	text-transform: uppercase;

	
	}
	#try{
	position : absolute;
	top : 65%;
	left : 40%;
	display : none;
	}
	
	button{
		  background-color: white; 
		  color: black; 
		  border: 3px solid #FFC1E0	;
	}
	/* 悬停样式 */
	button:hover {
		  background-color:#FFECF5;
		  color: black;
		  border: 3px solid #FF60AF	;
	}
	</style>
  </head>
  <body>
	

	<h1>聽覺活動：聆聽指示</h1>
	<p>請按音樂中老師的指示體驗</p>
	<img src="11.jpg" id = "img10">
	
	</div>
	<div>
	<img src="redtri.png" id ="img1">
	<img src="yellowtri.png" id ="img2">
	<img src="bluetri.png" id ="img3">
	<img src="redcircle.jpg" id ="img4">
	<img src="yellowcircle.jpg" id ="img5">
	<img src="bluecircle.jpg" id ="img6">
	<img src="redrect.jpg" id ="img7">
	<img src="yellowrect.jpg" id ="img8">
	<img src="bluerect.jpg" id ="img9">
	
	<script src = "111.js"></script>
	
	
	</div>
	<button id="demo" onclick="myFunction()">按我體驗</button>
	<button id="try" onclick="answer()","">點我看答案</button>
  </body>
</html>
