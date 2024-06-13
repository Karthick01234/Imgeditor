function twod() { //twod style crack image
document.querySelector(".icon").style.display="none";
document.getElementById("twodlist").style.display="block";
document.getElementById("tootde").addEventListener("click", function() {
c1.style="background:url("+iron.src+");background-repeat:no-repeat;background-size::"+c1.width+"px "+c1.height+"px;";
var aoop = new Image();
aoop.src = "main/image/c.png";
aoop.onload = function() {
ctx1.drawImage(aoop, 0, 0, c1.width, c1.height);
document.getElementById("twodlist").style.display="none";
document.getElementById("nextbut").style.display="block";
document.getElementById("twodcolor").style.display="block";
}
document.getElementById("twodcolor").addEventListener("click", function (e) {
	    html2canvas(c1, {
		scale: 2,
		dpi: 144,
		onrendered: function(canvas) {
			var blob = canvas.toDataURL('image/png');
			var drawing = new Image();
			drawing.src = blob;
			drawing.onload = function() {
			   ctx1.clearRect(0, 0, c1.width, c1.height);
			   ctx1.drawImage(drawing, 0, 0, c1.width, c1.height);
               document.getElementById("sace").style.display="block";
	           document.getElementById("nextbut").style.display="none";
			   document.getElementById("twodcolor").style.display="none";
			   c1.style.background="";
			}
		}
	})
});
});
document.getElementById("tootde2").addEventListener("click", function() { //twod style book 
var ima = new Image();
ima.onload = function () {
ctx1.clearRect(0, 0, c1.width, c1.height);
c1.style="background:url("+ima.src+");background-repeat:no-repeat;background-size:"+c1.width+"px "+c1.height+"px;"
ctx1.drawImage(iron, (c1.width-30)/2+20, 20, (c1.width-30)/2,  c1.height-60);	
ctx1.drawImage(iron, 10, 20, (c1.width-30)/2, c1.height-60);	
document.getElementById("twodlist").style.display="none";
document.getElementById("nextbut").style.display="block";
document.getElementById("twodcolor").style.display="block";
}
ima.src="main/image/var.png";
document.getElementById("twodcolor").addEventListener("click", function (e) {
    html2canvas(c1, {
		scale: 2,
		dpi: 144,
		onrendered: function(canvas) {
			var blob = canvas.toDataURL('image/png');
			var drawing = new Image();
			drawing.src = blob;
			drawing.onload = function() {
			   ctx1.clearRect(0, 0, c1.width, c1.height);
			   ctx1.drawImage(drawing, 0, 0, c1.width, c1.height);
               document.getElementById("sace").style.display="block";
	           document.getElementById("nextbut").style.display="none";
			   document.getElementById("twodcolor").style.display="none";
			   c1.style.background="";
			}
		}
		});
});
});
document.getElementById("tootde3").addEventListener("click", function() { //twod style book
var d = -4;
var ima = new Image();
ima.onload = function () {
ctx1.clearRect(0, 0, c1.width, c1.height);
c1.style="background:url("+ima.src+");background-repeat:no-repeat;background-size:"+c1.width+"px "+c1.height+"px;"
ctx1.clearRect(0, 0, c1.width, c1.height);
ctx1.save();
ctx1.translate((c1.width/2-40)/2, (c1.height/2)/2);
ctx1.rotate(d*0.01745);
ctx1.translate(-(c1.width/2-40)/2, -(c1.height/2)/2);
ctx1.drawImage(iron, c1.width/2-10, c1.height/3.3, c1.width/2.5, c1.height/1.8);	
ctx1.restore()
document.getElementById("twodlist").style.display="none";
document.getElementById("nextbut").style.display="block";
document.getElementById("twodcolor").style.display="block";
}
ima.src="main/image/kar.jpg";
document.getElementById("twodcolor").addEventListener("click", function (e) {
    html2canvas(c1, {
		scale: 2,
		dpi: 144,
		onrendered: function(canvas) {
			var blob = canvas.toDataURL('image/png');
			var drawing = new Image();
			drawing.src = blob;
			drawing.onload = function() {
			   ctx1.clearRect(0, 0, c1.width, c1.height);
			   ctx1.drawImage(drawing, 0, 0, c1.width, c1.height);
               document.getElementById("sace").style.display="block";
	           document.getElementById("nextbut").style.display="none";
			   document.getElementById("twodcolor").style.display="none";
			   c1.style.background="";
			}
		}
		});
});
});
document.getElementById("tootde4").addEventListener("click", function() { //start twod styles using glfx filters
document.getElementById("twodlist").style.display="none";
document.getElementById("nextbut").style.display="block";
document.getElementById("twodcolor").style.display="block";
document.getElementById("bright").style.display="block";
document.getElementById("anotherbright").style.display="block";
document.getElementById("bright").min = 0;
document.getElementById("bright").value = 10;
document.getElementById("bright").step = 10;
document.getElementById("bright").max = c1.width;
document.getElementById("anotherbright").min = 0;
document.getElementById("anotherbright").value = 10;
document.getElementById("anotherbright").step = 10;
document.getElementById("anotherbright").max = c1.height;
document.getElementById("bright").oninput = function () {
ctx1.clearRect(0, 0, c1.width, c1.height);
var v1 = document.getElementById("bright").value;
var v2 = document.getElementById("anotherbright").value;
var a = c1.width;
var b = c1.height;
var canvas = fx.canvas();
var texture = canvas.texture(iron);
canvas.draw(texture).bulgePinch(+v1, +v2, +v1, +v2).update();
var blob = canvas.toDataURL();
var tom = new Image();
tom.src = blob;
tom.onload = function() {
c1.style.backgroundImage="url("+tom.src+")";
}
}
document.getElementById("anotherbright").oninput = function () {
ctx1.clearRect(0, 0, c1.width, c1.height);
var v1 = document.getElementById("bright").value;
var v2 = document.getElementById("anotherbright").value;
var a = c1.width;
var b = c1.height;
var canvas = fx.canvas();
var texture = canvas.texture(iron);
canvas.draw(texture).bulgePinch(+v1, +v2, +v1, +v2).update();
var blob = canvas.toDataURL();
var tom = new Image();
tom.src = blob;
tom.onload = function() {
c1.style.backgroundImage="url("+tom.src+")";
}
}
document.getElementById("twodcolor").addEventListener("click", function (e) {
    html2canvas(c1, {
		scale: 2,
		dpi: 144,
		onrendered: function(canvas) {
			var blob = canvas.toDataURL('image/png');
			var drawing = new Image();
			drawing.src = blob;
			drawing.onload = function() {
			   ctx1.clearRect(0, 0, c1.width, c1.height);
			   ctx1.drawImage(drawing, 0, 0, c1.width, c1.height);
               document.getElementById("sace").style.display="block";
	           document.getElementById("nextbut").style.display="none";
			   document.getElementById("twodcolor").style.display="none";
               document.getElementById("bright").style.display="none";
	           document.getElementById("anotherbright").style.display="none";
			   c1.style.background="";
			}
		}
		});
});
});
document.getElementById("tootde5").addEventListener("click", function() {
document.getElementById("twodlist").style.display="none";
document.getElementById("nextbut").style.display="block";
document.getElementById("twodcolor").style.display="block";
document.getElementById("bright").style.display="block";
document.getElementById("bright").min = 1;
document.getElementById("bright").value = 1;
document.getElementById("bright").step = 1;
document.getElementById("bright").max = 20;
document.getElementById("bright").oninput = function () {
ctx1.clearRect(0, 0, c1.width, c1.height);
var v = document.getElementById("bright").value;
var a = c1.width;
var b = c1.height;
var canvas = fx.canvas();
var texture = canvas.texture(iron);
canvas.draw(texture).hexagonalPixelate(a, b, +v).update();
var blob = canvas.toDataURL();
var tom = new Image();
tom.src = blob;
tom.onload = function() {
c1.style.backgroundImage="url("+tom.src+")";
}
}
document.getElementById("twodcolor").addEventListener("click", function (e) {
    html2canvas(c1, {
		scale: 2,
		dpi: 144,
		onrendered: function(canvas) {
			var blob = canvas.toDataURL('image/png');
			var drawing = new Image();
			drawing.src = blob;
			drawing.onload = function() {
			   ctx1.clearRect(0, 0, c1.width, c1.height);
			   ctx1.drawImage(drawing, 0, 0, c1.width, c1.height);
               document.getElementById("sace").style.display="block";
	           document.getElementById("nextbut").style.display="none";
			   document.getElementById("twodcolor").style.display="none";
               document.getElementById("bright").style.display="none";
			   c1.style.background="";
			}
		}
		})
});
});
document.getElementById("tootde6").addEventListener("click", function() {
document.getElementById("twodlist").style.display="none";
document.getElementById("nextbut").style.display="block";
document.getElementById("twodcolor").style.display="block";
document.getElementById("bright").style.display="block";
document.getElementById("anotherbright").style.display="block";
document.getElementById("bright").min = 0.1;
document.getElementById("bright").value = 0.1;
document.getElementById("bright").step = 0.1;
document.getElementById("bright").max = 2;
document.getElementById("anotherbright").min = 0.1;
document.getElementById("anotherbright").value = 0.1;
document.getElementById("anotherbright").step = 0.1;
document.getElementById("anotherbright").max = 20;
document.getElementById("bright").oninput = function () {
ctx1.clearRect(0, 0, c1.width, c1.height);
var v1 = document.getElementById("bright").value;
var v2 = document.getElementById("anotherbright").value;
var a = c1.width;
var b = c1.height;
var canvas = fx.canvas();
var texture = canvas.texture(iron);
canvas.draw(texture).colorHalftone(a, b, +v1, +v2).update();
var blob = canvas.toDataURL();
var tom = new Image();
tom.src = blob;
tom.onload = function() {
c1.style.backgroundImage="url("+tom.src+")";
}
}
document.getElementById("anotherbright").oninput = function () {
ctx1.clearRect(0, 0, c1.width, c1.height);
var v1 = document.getElementById("bright").value;
var v2 = document.getElementById("anotherbright").value;
var a = c1.width;
var b = c1.height;
var canvas = fx.canvas();
var texture = canvas.texture(iron);
canvas.draw(texture).colorHalftone(a, b, +v1, +v2).update();
var blob = canvas.toDataURL();
var tom = new Image();
tom.src = blob;
tom.onload = function() {
c1.style.backgroundImage="url("+tom.src+")";
}
}
document.getElementById("twodcolor").addEventListener("click", function (e) {
    html2canvas(c1, {
		scale: 2,
		dpi: 144,
		onrendered: function(canvas) {
			var blob = canvas.toDataURL('image/png');
			var drawing = new Image();
			drawing.src = blob;
			drawing.onload = function() {
			   ctx1.clearRect(0, 0, c1.width, c1.height);
			   ctx1.drawImage(drawing, 0, 0, c1.width, c1.height);
               document.getElementById("sace").style.display="block";
	           document.getElementById("nextbut").style.display="none";
			   document.getElementById("twodcolor").style.display="none";
               document.getElementById("bright").style.display="none";
	           document.getElementById("anotherbright").style.display="none";
			   c1.style.background="";
			}
		}
		});
});
});
document.getElementById("tootde7").addEventListener("click", function() {
document.getElementById("twodlist").style.display="none";
document.getElementById("nextbut").style.display="block";
document.getElementById("twodcolor").style.display="block";
document.getElementById("bright").style.display="block";
document.getElementById("anotherbright").style.display="block";
document.getElementById("bright").min = 0.1;
document.getElementById("bright").value = 0.1;
document.getElementById("bright").step = 0.1;
document.getElementById("bright").max = 2;
document.getElementById("anotherbright").min = 0.1;
document.getElementById("anotherbright").value = 0.1;
document.getElementById("anotherbright").step = 0.1;
document.getElementById("anotherbright").max = 20;
document.getElementById("bright").oninput = function () {
ctx1.clearRect(0, 0, c1.width, c1.height);
var v1 = document.getElementById("bright").value;
var v2 = document.getElementById("anotherbright").value;
var a = c1.width;
var b = c1.height;
var canvas = fx.canvas();
var texture = canvas.texture(iron);
canvas.draw(texture).dotScreen(a, b, +v1, +v2).update();
var blob = canvas.toDataURL();
var tom = new Image();
tom.src = blob;
tom.onload = function() {
c1.style.backgroundImage="url("+tom.src+")";
}
}
document.getElementById("anotherbright").oninput = function () {
ctx1.clearRect(0, 0, c1.width, c1.height);
var v1 = document.getElementById("bright").value;
var v2 = document.getElementById("anotherbright").value;
var a = c1.width;
var b = c1.height;
var canvas = fx.canvas();
var texture = canvas.texture(iron);
canvas.draw(texture).dotScreen(a, b, +v1, +v2).update();
var blob = canvas.toDataURL();
var tom = new Image();
tom.src = blob;
tom.onload = function() {
c1.style.backgroundImage="url("+tom.src+")";
}
}
document.getElementById("twodcolor").addEventListener("click", function (e) {
        html2canvas(c1, {
		scale: 2,
		dpi: 144,
		onrendered: function(canvas) {
			var blob = canvas.toDataURL('image/png');
			var drawing = new Image();
			drawing.src = blob;
			drawing.onload = function() {
			   ctx1.clearRect(0, 0, c1.width, c1.height);
			   ctx1.drawImage(drawing, 0, 0, c1.width, c1.height);
               document.getElementById("sace").style.display="block";
	           document.getElementById("nextbut").style.display="none";
			   document.getElementById("twodcolor").style.display="none";
               document.getElementById("bright").style.display="none";
	           document.getElementById("anotherbright").style.display="none";
			   c1.style.background="";
			}
		}
		});
});
});
document.getElementById("tootde8").addEventListener("click", function() {
document.getElementById("twodlist").style.display="none";
document.getElementById("nextbut").style.display="block";
document.getElementById("twodcolor").style.display="block";
document.getElementById("bright").style.display="block";
document.getElementById("bright").min = 1;
document.getElementById("bright").value = 1;
document.getElementById("bright").step = 1;
document.getElementById("bright").max = 10;
document.getElementById("bright").oninput = function () {
ctx1.clearRect(0, 0, c1.width, c1.height);
var v = document.getElementById("bright").value;
var a = c1.width;
var b = c1.height;
var canvas = fx.canvas();
var texture = canvas.texture(iron);
canvas.draw(texture).edgeWork(v).update();
var blob = canvas.toDataURL();
var tom = new Image();
tom.src = blob;
tom.onload = function() {
c1.style.backgroundImage="url("+tom.src+")";
}
}
document.getElementById("twodcolor").addEventListener("click", function (e) {
    html2canvas(c1, {
		scale: 2,
		dpi: 144,
		onrendered: function(canvas) {
			var blob = canvas.toDataURL('image/png');
			var drawing = new Image();
			drawing.src = blob;
			drawing.onload = function() {
			   ctx1.clearRect(0, 0, c1.width, c1.height);
			   ctx1.drawImage(drawing, 0, 0, c1.width, c1.height);
               document.getElementById("sace").style.display="block";
	           document.getElementById("nextbut").style.display="none";
			   document.getElementById("twodcolor").style.display="none";
               document.getElementById("bright").style.display="none";
			   c1.style.background="";
			}
		}
		})
});
});
document.getElementById("tootde9").addEventListener("click", function() {
document.getElementById("twodlist").style.display="none";
document.getElementById("nextbut").style.display="block";
document.getElementById("twodcolor").style.display="block";
document.getElementById("bright").style.display="block";
document.getElementById("bright").min = 0.1;
document.getElementById("bright").value = 0.1;
document.getElementById("bright").step = 0.1;
document.getElementById("bright").max = 1;
document.getElementById("bright").oninput = function () {
ctx1.clearRect(0, 0, c1.width, c1.height);
var v = document.getElementById("bright").value;
var a = c1.width;
var b = c1.height;
var canvas = fx.canvas();
var texture = canvas.texture(iron);
canvas.draw(texture).ink(v).update();
var blob = canvas.toDataURL();
var tom = new Image();
tom.src = blob;
tom.onload = function() {
c1.style.backgroundImage="url("+tom.src+")";
}
}
document.getElementById("twodcolor").addEventListener("click", function (e) {
    html2canvas(c1, {
		scale: 2,
		dpi: 144,
		onrendered: function(canvas) {
			var blob = canvas.toDataURL('image/png');
			var drawing = new Image();
			drawing.src = blob;
			drawing.onload = function() {
			   ctx1.clearRect(0, 0, c1.width, c1.height);
			   ctx1.drawImage(drawing, 0, 0, c1.width, c1.height);
               document.getElementById("sace").style.display="block";
	           document.getElementById("nextbut").style.display="none";
			   document.getElementById("twodcolor").style.display="none";
               document.getElementById("bright").style.display="none";
			   c1.style.background="";
			}
		}
		})
});
});
document.getElementById("tootde10").addEventListener("click", function() {
document.getElementById("twodlist").style.display="none";
document.getElementById("nextbut").style.display="block";
document.getElementById("twodcolor").style.display="block";
document.getElementById("bright").style.display="block";
document.getElementById("bright").min = 0.1;
document.getElementById("bright").value = 0.1;
document.getElementById("bright").step = 0.1;
document.getElementById("bright").max = 1;
document.getElementById("bright").oninput = function () {
ctx1.clearRect(0, 0, c1.width, c1.height);
var v = document.getElementById("bright").value;
var a = c1.width;
var b = c1.height;
var canvas = fx.canvas();
var texture = canvas.texture(iron);
canvas.draw(texture).vignette(v, v).update();
var blob = canvas.toDataURL();
var tom = new Image();
tom.src = blob;
tom.onload = function() {
c1.style.backgroundImage="url("+tom.src+")";
}
}
document.getElementById("twodcolor").addEventListener("click", function (e) {
    html2canvas(c1, {
		scale: 2,
		dpi: 144,
		onrendered: function(canvas) {
			var blob = canvas.toDataURL('image/png');
			var drawing = new Image();
			drawing.src = blob;
			drawing.onload = function() {
			   ctx1.clearRect(0, 0, c1.width, c1.height);
			   ctx1.drawImage(drawing, 0, 0, c1.width, c1.height);
               document.getElementById("sace").style.display="block";
	           document.getElementById("nextbut").style.display="none";
			   document.getElementById("twodcolor").style.display="none";
               document.getElementById("bright").style.display="none";
			   c1.style.background="";
			}
		}
		})
});
});
document.getElementById("tootde11").addEventListener("click", function() {
document.getElementById("twodlist").style.display="none";
document.getElementById("nextbut").style.display="block";
document.getElementById("twodcolor").style.display="block";
document.getElementById("bright").style.display="block";
document.getElementById("bright").min = 0.1;
document.getElementById("bright").value = 0.1;
document.getElementById("bright").step = 0.1;
document.getElementById("bright").max = 1;
document.getElementById("bright").oninput = function () {
ctx1.clearRect(0, 0, c1.width, c1.height);
var v = document.getElementById("bright").value;
var a = c1.width;
var b = c1.height;
var canvas = fx.canvas();
var texture = canvas.texture(iron);
canvas.draw(texture).noise(v).update();
var blob = canvas.toDataURL();
var tom = new Image();
tom.src = blob;
tom.onload = function() {
c1.style.backgroundImage="url("+tom.src+")";
}
}
document.getElementById("twodcolor").addEventListener("click", function (e) {
    html2canvas(c1, {
		scale: 2,
		dpi: 144,
		onrendered: function(canvas) {
			var blob = canvas.toDataURL('image/png');
			var drawing = new Image();
			drawing.src = blob;
			drawing.onload = function() {
			   ctx1.clearRect(0, 0, c1.width, c1.height);
			   ctx1.drawImage(drawing, 0, 0, c1.width, c1.height);
               document.getElementById("sace").style.display="block";
	           document.getElementById("nextbut").style.display="none";
			   document.getElementById("twodcolor").style.display="none";
               document.getElementById("bright").style.display="none";
			   c1.style.background="";
			}
		}
		})
});
});
document.getElementById("tootde12").addEventListener("click", function() {
document.getElementById("twodlist").style.display="none";
document.getElementById("nextbut").style.display="block";
document.getElementById("twodcolor").style.display="block";
document.getElementById("bright").style.display="block";
document.getElementById("bright").min = 1;
document.getElementById("bright").value = 1;
document.getElementById("bright").step = 1;
document.getElementById("bright").max = 50;
document.getElementById("bright").oninput = function () {
ctx1.clearRect(0, 0, c1.width, c1.height);
var v = document.getElementById("bright").value;
var a = c1.width;
var b = c1.height;
var canvas = fx.canvas();
var texture = canvas.texture(iron);
canvas.draw(texture).denoise(v).update();
var blob = canvas.toDataURL();
var tom = new Image();
tom.src = blob;
tom.onload = function() {
c1.style.backgroundImage="url("+tom.src+")";
}
}
document.getElementById("twodcolor").addEventListener("click", function (e) {
    html2canvas(c1, {
		scale: 2,
		dpi: 144,
		onrendered: function(canvas) {
			var blob = canvas.toDataURL('image/png');
			var drawing = new Image();
			drawing.src = blob;
			drawing.onload = function() {
			   ctx1.clearRect(0, 0, c1.width, c1.height);
			   ctx1.drawImage(drawing, 0, 0, c1.width, c1.height);
               document.getElementById("sace").style.display="block";
	           document.getElementById("nextbut").style.display="none";
			   document.getElementById("twodcolor").style.display="none";
               document.getElementById("bright").style.display="none";
			   c1.style.background="";
			}
		}
		})
});
});
document.getElementById("tootde13").addEventListener("click", function() {
document.getElementById("twodlist").style.display="none";
document.getElementById("nextbut").style.display="block";
document.getElementById("twodcolor").style.display="block";
document.getElementById("bright").style.display="block";
document.getElementById("bright").min = 0.1;
document.getElementById("bright").value = 0.1;
document.getElementById("bright").step = 0.1;
document.getElementById("bright").max = 1;
document.getElementById("bright").oninput = function () {
ctx1.clearRect(0, 0, c1.width, c1.height);
var v = document.getElementById("bright").value;
var a = c1.width;
var b = c1.height;
var canvas = fx.canvas();
var texture = canvas.texture(iron);
canvas.draw(texture).vibrance(v).update();
var blob = canvas.toDataURL();
var tom = new Image();
tom.src = blob;
tom.onload = function() {
c1.style.backgroundImage="url("+tom.src+")";
}
}
document.getElementById("twodcolor").addEventListener("click", function (e) {
   html2canvas(c1, {
		scale: 2,
		dpi: 144,
		onrendered: function(canvas) {
			var blob = canvas.toDataURL('image/png');
			var drawing = new Image();
			drawing.src = blob;
			drawing.onload = function() {
			   ctx1.clearRect(0, 0, c1.width, c1.height);
			   ctx1.drawImage(drawing, 0, 0, c1.width, c1.height);
               document.getElementById("sace").style.display="block";
	           document.getElementById("nextbut").style.display="none";
			   document.getElementById("twodcolor").style.display="none";
               document.getElementById("bright").style.display="none";
			   c1.style.background="";
			}
		}
		})
});
});
document.getElementById("tootde14").addEventListener("click", function() {
document.getElementById("twodlist").style.display="none";
document.getElementById("nextbut").style.display="block";
document.getElementById("twodcolor").style.display="block";
document.getElementById("bright").style.display="block";
document.getElementById("anotherbright").style.display="block";
document.getElementById("bright").min = 0;
document.getElementById("bright").value = 10;
document.getElementById("bright").step = 10;
document.getElementById("bright").max = c1.width;
document.getElementById("anotherbright").min = 0;
document.getElementById("anotherbright").value = 10;
document.getElementById("anotherbright").step = 10;
document.getElementById("anotherbright").max = c1.height;
document.getElementById("bright").oninput = function () {
ctx1.clearRect(0, 0, c1.width, c1.height);
var v1 = document.getElementById("bright").value;
var v2 = document.getElementById("anotherbright").value;
var a = c1.width;
var b = c1.height;
var canvas = fx.canvas();
var texture = canvas.texture(iron);
canvas.draw(texture).swirl(+v1, +v2, +v1, +v2).update();
var blob = canvas.toDataURL();
var tom = new Image();
tom.src = blob;
tom.onload = function() {
c1.style.backgroundImage="url("+tom.src+")";
}
}
document.getElementById("anotherbright").oninput = function () {
ctx1.clearRect(0, 0, c1.width, c1.height);
var v1 = document.getElementById("bright").value;
var v2 = document.getElementById("anotherbright").value;
var a = c1.width;
var b = c1.height;
var canvas = fx.canvas();
var texture = canvas.texture(iron);
canvas.draw(texture).swirl(+v1, +v2, +v1, +v2).update();
var blob = canvas.toDataURL();
var tom = new Image();
tom.src = blob;
tom.onload = function() {
c1.style.backgroundImage="url("+tom.src+")";
}
}
document.getElementById("twodcolor").addEventListener("click", function (e) {
	html2canvas(c1, {
		scale: 2,
		dpi: 144,
		onrendered: function(canvas) {
			var blob = canvas.toDataURL('image/png');
			var drawing = new Image();
			drawing.src = blob;
			drawing.onload = function() {
			   ctx1.clearRect(0, 0, c1.width, c1.height);
			   ctx1.drawImage(drawing, 0, 0, c1.width, c1.height);
               document.getElementById("sace").style.display="block";
	           document.getElementById("nextbut").style.display="none";
			   document.getElementById("twodcolor").style.display="none";
               document.getElementById("bright").style.display="none";
	           document.getElementById("anotherbright").style.display="none";
			   c1.style.background="";
			}
		}
		});
});
});
}