function filter() { // upto filter 10 using webgl filter
document.querySelector(".icon").style.display="none";
document.getElementById("filterlist").style.display="block";
document.getElementById("fitter").addEventListener("click", function() {
	try {
	ctx1.clearRect(0,0,c1.width,c1.height);
	var filter = new WebGLImageFilter();
	filter.addFilter('emboss');
	var filteredImage = filter.apply(iron);
	ctx1.drawImage(filteredImage,0,0,c1.width,c1.height);
	document.getElementById("filterlist").style.display="none";
	document.getElementById("sace").style.display="block";
}
catch( err ) {
	alert(err);
}
})
document.getElementById("fitter1").addEventListener("click", function() {
try {
	ctx1.clearRect(0,0,c1.width,c1.height);
	var filter = new WebGLImageFilter();
	filter.addFilter('polaroid');
	var filteredImage = filter.apply(iron);
	ctx1.drawImage(filteredImage,0,0,c1.width,c1.height);
	document.getElementById("filterlist").style.display="none";
	document.getElementById("sace").style.display="block";
}
catch( err ) {
	alert(err);
}
})
document.getElementById("fitter2").addEventListener("click", function() {
try {
   	ctx1.clearRect(0,0,c1.width,c1.height);
	var filter = new WebGLImageFilter();
	filter.addFilter('technicolor');
	var filteredImage = filter.apply(iron);
	ctx1.drawImage(filteredImage,0,0,c1.width,c1.height);
	document.getElementById("filterlist").style.display="none";
	document.getElementById("sace").style.display="block";
}
catch( err ) {
	alert(err);
}
})
document.getElementById("fitter3").addEventListener("click", function() {
try {
	ctx1.clearRect(0,0,c1.width,c1.height);
	var filter = new WebGLImageFilter();
	filter.addFilter('sobelY');
	var filteredImage = filter.apply(iron);
	ctx1.drawImage(filteredImage,0,0,c1.width,c1.height);
	document.getElementById("filterlist").style.display="none";
	document.getElementById("sace").style.display="block";
}
catch( err ) {
	alert(err);
}
})
document.getElementById("fitter4").addEventListener("click", function() {
try {
	ctx1.clearRect(0,0,c1.width,c1.height);
	var filter = new WebGLImageFilter();
	filter.addFilter('sobelX');
	var filteredImage = filter.apply(iron);
	ctx1.drawImage(filteredImage,0,0,c1.width,c1.height);
	document.getElementById("filterlist").style.display="none";
	document.getElementById("sace").style.display="block";
}
catch( err ) {
	alert(err);
}
})
document.getElementById("fitter5").addEventListener("click", function() {
try {
	ctx1.clearRect(0,0,c1.width,c1.height);
	var filter = new WebGLImageFilter();
	filter.addFilter('detectEdges');
	var filteredImage = filter.apply(iron);
	ctx1.drawImage(filteredImage,0,0,c1.width,c1.height);
	document.getElementById("filterlist").style.display="none";
	document.getElementById("sace").style.display="block";
}
catch( err ) {
	alert(err);
}
})
document.getElementById("fitter6").addEventListener("click", function() {
try {
  	ctx1.clearRect(0,0,c1.width,c1.height);
	var filter = new WebGLImageFilter();
	filter.addFilter('desaturate');
	var filteredImage = filter.apply(iron);
	ctx1.drawImage(filteredImage,0,0,c1.width,c1.height);
	document.getElementById("filterlist").style.display="none";
	document.getElementById("sace").style.display="block";
}
catch( err ) {
	alert(err);
}
})
document.getElementById("fitter7").addEventListener("click", function() {
try {
	ctx1.clearRect(0,0,c1.width,c1.height);
	var filter = new WebGLImageFilter();
	filter.addFilter('desaturateLuminance');
	var filteredImage = filter.apply(iron);
	ctx1.drawImage(filteredImage,0,0,c1.width,c1.height);
	document.getElementById("filterlist").style.display="none";
	document.getElementById("sace").style.display="block";
}
catch( err ) {
	alert(err);
}
})
document.getElementById("fitter8").addEventListener("click", function() {
try {
	ctx1.clearRect(0,0,c1.width,c1.height);
	var filter = new WebGLImageFilter();
	filter.addFilter('brownie');
	var filteredImage = filter.apply(iron);
	ctx1.drawImage(filteredImage,0,0,c1.width,c1.height);
	document.getElementById("filterlist").style.display="none";
	document.getElementById("sace").style.display="block";
}
catch( err ) {
	alert(err);
}
})
document.getElementById("fitter9").addEventListener("click", function() {
try {
	ctx1.clearRect(0,0,c1.width,c1.height);
	var filter = new WebGLImageFilter();
	filter.addFilter('vintagePinhole');
	var filteredImage = filter.apply(iron);
	ctx1.drawImage(filteredImage,0,0,c1.width,c1.height);
	document.getElementById("filterlist").style.display="none";
	document.getElementById("sace").style.display="block";
}
catch( err ) {
	alert(err);
}
})
document.getElementById("fitter10").addEventListener("click", function() {
try {
	ctx1.clearRect(0,0,c1.width,c1.height);
	var filter = new WebGLImageFilter();
	filter.addFilter('kodachrome');
	var filteredImage = filter.apply(iron);
	ctx1.drawImage(filteredImage,0,0,c1.width,c1.height);
	document.getElementById("filterlist").style.display="none";
	document.getElementById("sace").style.display="block";
}
catch( err ) {
	alert(err);
}
})
document.getElementById("fitter11").addEventListener("click", function() { // upto filter 33 adjust pixel to make filter effect
	var neew = document.createElement("canvas");
	neew.width = c1.width;
	neew.height = c1.height;
	var geew = neew.getContext("2d");
	geew.drawImage(iron, 0, 0, c1.width, c1.height);
	var imageData = geew.getImageData(0, 0, c1.width, c1.height);
	var d = imageData.data;
	for (var i=0; i<d.length; i+=4) {
	var v = (d[i+1] * 0.1245 + d[i+2] * 2.1245 + d[i] * 2.8245) - (d[i+2] * 5.1245 + d[i] * 3.8245 + d[i+1] * 2.1245);
	var w = (d[i+1] * 0.1245 - d[i+2] * 2.1245 + d[i] * 2.8245) + (d[i+2] * 5.1245 - d[i] * 3.8245 + d[i+1] * 2.1245);
    var q = (d[i+1] * 0.1245 + d[i+2] * 2.1245 - d[i] * 2.8245) - (d[i+2] * 5.1245 - d[i] * 3.8245 - d[i+1] * 2.1245);
    d[i] = v;
	d[i+1] = w;
	d[i+2] = q;
    }
	geew.clearRect(0, 0, c1.width, c1.height);
	geew.putImageData(imageData, 0, 0);
	var blob = neew.toDataURL({ pixelRatio: 3 });
	var stickimg = new Image()
	stickimg.src = blob;
	stickimg.onload = function() {
	ctx1.clearRect(0, 0, c1.width, c1.height);
	ctx1.drawImage(stickimg, 0, 0, c1.width, c1.height);
	neew.remove();
	document.getElementById("filterlist").style.display="none";
	document.getElementById("sace").style.display="block";
	}
})
document.getElementById("fitter14").addEventListener("click", function() {
	var neew = document.createElement("canvas");
	neew.width = c1.width;
	neew.height = c1.height;
	var geew = neew.getContext("2d");
	geew.drawImage(iron, 0, 0, c1.width, c1.height);
	var imageData = geew.getImageData(0, 0, c1.width, c1.height);
	var d = imageData.data;
	for (var i=0; i<d.length; i+=4) {
	var v = (d[i+1] * 0.1245 + d[i+2] * 2.1245 -	d[i] * 2.8245) + (d[i+2] * 5.1245 + d[i] * 3.8245 - d[i+1] * 2.1245);
    d[i] = v;
	d[i+1] = v;
	d[i+2] = v;
    }
	geew.clearRect(0, 0, c1.width, c1.height);
	geew.putImageData(imageData, 0, 0);
	var blob = neew.toDataURL({ pixelRatio: 3 });
	var stickimg = new Image()
	stickimg.src = blob;
	stickimg.onload = function() {
	ctx1.clearRect(0, 0, c1.width, c1.height);
	ctx1.drawImage(stickimg, 0, 0,c1.width, c1.height);
	neew.remove();
	document.getElementById("filterlist").style.display="none";
	document.getElementById("sace").style.display="block";
	}
})
document.getElementById("fitter15").addEventListener("click", function() {
	var neew = document.createElement("canvas");
	neew.width = c1.width;
	neew.height = c1.height;
	var geew = neew.getContext("2d");
	geew.drawImage(iron, 0, 0, c1.width, c1.height);
	var imageData = geew.getImageData(0, 0, c1.width, c1.height);
	var d = imageData.data;
	for (var i=0; i<d.length; i+=4) {
    d[i] = d[i+1] * 1.1245 + d[i+2] * 2.1245 - d[i] * 0.8245;
	d[i+1] = d[i] * 0.8245 - d[i+1] * 1.1245 + d[i+2] * 2.1245;
	d[i+2] = d[i+2] * 2.1245 + d[i] * 0.8245 - d[i+1] * 1.1245;
    }
	geew.clearRect(0, 0, c1.width, c1.height);
	geew.putImageData(imageData, 0, 0);
	var blob = neew.toDataURL({ pixelRatio: 3 });
	var stickimg = new Image()
	stickimg.src = blob;
	stickimg.onload = function() {
	ctx1.clearRect(0, 0, c1.width, c1.height);
	ctx1.drawImage(stickimg, 0, 0, c1.width, c1.height);
	neew.remove();
	document.getElementById("filterlist").style.display="none";
	document.getElementById("sace").style.display="block";
	}
})
document.getElementById("fitter17").addEventListener("click", function() {
	var neew = document.createElement("canvas");
	neew.width = c1.width;
	neew.height = c1.height;
	var geew = neew.getContext("2d");
	geew.drawImage(iron, 0, 0, c1.width, c1.height);
	var imageData = geew.getImageData(0, 0, c1.width, c1.height);
	var d = imageData.data;
	for (var i=0; i<d.length; i+=4) {
    d[i] = d[i+1] * 12.1245;
	d[i+1] = d[i] * 9.1245;
	d[i+2] = d[i+2] * 12.1245;
    }
	geew.clearRect(0, 0, c1.width, c1.height);
	geew.putImageData(imageData, 0, 0);
	var blob = neew.toDataURL({ pixelRatio: 3 });
	var stickimg = new Image()
	stickimg.src = blob;
	stickimg.onload = function() {
	ctx1.clearRect(0, 0, c1.width, c1.height);
	ctx1.drawImage(stickimg, 0, 0, c1.width, c1.height);
	neew.remove();
	document.getElementById("filterlist").style.display="none";
	document.getElementById("sace").style.display="block";
	}
})
document.getElementById("fitter19").addEventListener("click", function() {
	var neew = document.createElement("canvas");
	neew.width = c1.width;
	neew.height = c1.height;
	var geew = neew.getContext("2d");
	geew.drawImage(iron, 0, 0, c1.width, c1.height);
	var imageData = geew.getImageData(0, 0, c1.width, c1.height);
	var d = imageData.data;
	for (var i=0; i<d.length; i+=4) {
    d[i] = d[i+1] * 6;
	d[i+1] = d[i] * 9.1245;
	d[i+2] = d[i+2] * 12.1245;
    }
	geew.clearRect(0, 0, c1.width, c1.height);
	geew.putImageData(imageData, 0, 0);
	var blob = neew.toDataURL({ pixelRatio: 3 });
	var stickimg = new Image()
	stickimg.src = blob;
	stickimg.onload = function() {
	ctx1.clearRect(0, 0, c1.width, c1.height);
	ctx1.drawImage(stickimg, 0, 0, c1.width, c1.height);
	neew.remove();
	document.getElementById("filterlist").style.display="none";
	document.getElementById("sace").style.display="block";
	}
})
document.getElementById("fitter21").addEventListener("click", function() {
	var neew = document.createElement("canvas");
	neew.width = c1.width;
	neew.height = c1.height;
	var geew = neew.getContext("2d");
	geew.drawImage(iron, 0, 0, c1.width, c1.height);
	var imageData = geew.getImageData(0, 0, c1.width, c1.height);
	var d = imageData.data;
	for (var i=0; i<d.length; i+=4) {
    d[i] = d[i] * 2.1245;
	d[i+1] = d[i+2] * 3.1245;
	d[i+2] = d[i+1] * 0.1245;
    }
	geew.clearRect(0, 0, c1.width, c1.height);
	geew.putImageData(imageData, 0, 0);
	var blob = neew.toDataURL({ pixelRatio: 3 });
	var stickimg = new Image()
	stickimg.src = blob;
	stickimg.onload = function() {
	ctx1.clearRect(0, 0, c1.width, c1.height);
	ctx1.drawImage(stickimg, 0, 0, c1.width, c1.height);
	neew.remove();
	document.getElementById("filterlist").style.display="none";
	document.getElementById("sace").style.display="block";
	}
});
document.getElementById("fitter22").addEventListener("click", function() {
	var neew = document.createElement("canvas");
	neew.width = c1.width;
	neew.height = c1.height;
	var geew = neew.getContext("2d");
	geew.drawImage(iron, 0, 0, c1.width, c1.height);
	var imageData = geew.getImageData(0, 0, c1.width, c1.height);
	var d = imageData.data;
	for (var i=0; i<d.length; i+=4) {
    d[i] = d[i+2] * 3.1245;
	d[i+1] = d[i+1] * 0.1245;
	d[i+2] = d[i] * 2.1245;
    }
	geew.clearRect(0, 0, c1.width, c1.height);
	geew.putImageData(imageData, 0, 0);
	var blob = neew.toDataURL({ pixelRatio: 3 });
	var stickimg = new Image()
	stickimg.src = blob;
	stickimg.onload = function() {
	ctx1.clearRect(0, 0, c1.width, c1.height);
	ctx1.drawImage(stickimg, 0, 0, c1.width, c1.height);
	neew.remove();
	document.getElementById("filterlist").style.display="none";
	document.getElementById("sace").style.display="block";
	}
});
document.getElementById("fitter23").addEventListener("click", function() {
	var neew = document.createElement("canvas");
	neew.width = c1.width;
	neew.height = c1.height;
	var geew = neew.getContext("2d");
	geew.drawImage(iron, 0, 0, c1.width, c1.height);
	var imageData = geew.getImageData(0, 0, c1.width, c1.height);
	var d = imageData.data;
	for (var i=0; i<d.length; i+=4) {
    d[i] = d[i+1] * 0.1245;
	d[i+1] = d[i] * 2.1245;
	d[i+2] = d[i+2] * 3.1245;
    }
	geew.clearRect(0, 0, c1.width, c1.height);
	geew.putImageData(imageData, 0, 0);
	var blob = neew.toDataURL({ pixelRatio: 3 });
	var stickimg = new Image()
	stickimg.src = blob;
	stickimg.onload = function() {
	ctx1.clearRect(0, 0, c1.width, c1.height);
	ctx1.drawImage(stickimg, 0, 0, c1.width, c1.height);
	neew.remove();
	document.getElementById("filterlist").style.display="none";
	document.getElementById("sace").style.display="block";
	}
});
document.getElementById("fitter24").addEventListener("click", function() {
	var neew = document.createElement("canvas");
	neew.width = c1.width;
	neew.height = c1.height;
	var geew = neew.getContext("2d");
	geew.drawImage(iron, 0, 0, c1.width, c1.height);
	var imageData = geew.getImageData(0, 0, c1.width, c1.height);
	var d = imageData.data;
	for (var i=0; i<d.length; i+=4) {
    d[i] = d[i+2] * 4.1245 + d[i] * 0.89 + d[i+1] * 0.239;
	d[i+1] = d[i] * 2.1245 + d[i+1] * 1.89 + d[i+2] * 0.239;
	d[i+2] = d[i+1] * 1.1245 + d[i+2] * 0.89 + d[i] * 3.239;
    }
	geew.clearRect(0, 0, c1.width, c1.height);
	geew.putImageData(imageData, 0, 0);
	var blob = neew.toDataURL({ pixelRatio: 3 });
	var stickimg = new Image()
	stickimg.src = blob;
	stickimg.onload = function() {
	ctx1.clearRect(0, 0, c1.width, c1.height);
	ctx1.drawImage(stickimg, 0, 0, c1.width, c1.height);
	neew.remove();
	document.getElementById("filterlist").style.display="none";
	document.getElementById("sace").style.display="block";
	}
});
document.getElementById("fitter25").addEventListener("click", function() {
	var neew = document.createElement("canvas");
	neew.width = c1.width;
	neew.height = c1.height;
	var geew = neew.getContext("2d");
	geew.drawImage(iron, 0, 0, c1.width, c1.height);
	var imageData = geew.getImageData(0, 0, c1.width, c1.height);
	var d = imageData.data;
	for (var i=0; i<d.length; i+=4) {
    d[i] = d[i+2] * 0.1245 + d[i] * 0.89 + d[i+1] * 0.239;
	d[i+1] = d[i+2] * 0.1245 + d[i] * 0.89 + d[i+1] * 0.239;
	d[i+2] = d[i+2] * 0.1245 + d[i] * 0.89 + d[i+1] * 0.239;
    }
	geew.clearRect(0, 0, c1.width, c1.height);
	geew.putImageData(imageData, 0, 0);
	var blob = neew.toDataURL({ pixelRatio: 3 });
	var stickimg = new Image()
	stickimg.src = blob;
	stickimg.onload = function() {
	ctx1.clearRect(0, 0, c1.width, c1.height);
	ctx1.drawImage(stickimg, 0, 0, c1.width, c1.height);
	neew.remove();
	document.getElementById("filterlist").style.display="none";
	document.getElementById("sace").style.display="block";
	}
});
document.getElementById("fitter26").addEventListener("click", function() {
	var neew = document.createElement("canvas");
	neew.width = c1.width;
	neew.height = c1.height;
	var geew = neew.getContext("2d");
	geew.drawImage(iron, 0, 0, c1.width, c1.height);
	var imageData = geew.getImageData(0, 0, c1.width, c1.height);
	var d = imageData.data;
	for (var i=0; i<d.length; i+=4) {
    d[i] = d[i+1] * 0.1245 + d[i+2] * 0.89 - d[i] * 0.239;
	d[i+1] = d[i+1] * 0.1245 + d[i+2] * 0.89 - d[i] * 0.239;
	d[i+2] = d[i+1] * 0.1245 + d[i+2] * 0.89 - d[i] * 0.239;
    }
	geew.clearRect(0, 0, c1.width, c1.height);
	geew.putImageData(imageData, 0, 0);
	var blob = neew.toDataURL({ pixelRatio: 3 });
	var stickimg = new Image()
	stickimg.src = blob;
	stickimg.onload = function() {
	ctx1.clearRect(0, 0, c1.width, c1.height);
	ctx1.drawImage(stickimg, 0, 0, c1.width, c1.height);
	neew.remove();
	document.getElementById("filterlist").style.display="none";
	document.getElementById("sace").style.display="block";
	}
})
document.getElementById("fitter27").addEventListener("click", function() {
	var neew = document.createElement("canvas");
	neew.width = c1.width;
	neew.height = c1.height;
	var geew = neew.getContext("2d");
	geew.drawImage(iron, 0, 0, c1.width, c1.height);
	var imageData = geew.getImageData(0, 0, c1.width, c1.height);
	var d = imageData.data;
	for (var i=0; i<d.length; i+=4) {
    d[i] = d[i] * 0.1245 + d[i+2] * 0.89 + d[i+1] * 0.239;
	d[i+1] = d[i+1] * 0.1245 + d[i+2] * 0.89 - d[i] * 0.239;
	d[i+2] = d[i+2] * 0.1245 + d[i] * 0.89 + d[i+1] * 0.239;
    }
	geew.clearRect(0, 0, c1.width, c1.height);
	geew.putImageData(imageData, 0, 0);
	var blob = neew.toDataURL({ pixelRatio: 3 });
	var stickimg = new Image()
	stickimg.src = blob;
	stickimg.onload = function() {
	ctx1.clearRect(0, 0, c1.width, c1.height);
	ctx1.drawImage(stickimg, 0, 0, c1.width, c1.height);
	neew.remove();
	document.getElementById("filterlist").style.display="none";
	document.getElementById("sace").style.display="block";
	}
});
document.getElementById("fitter29").addEventListener("click", function() {
	var neew = document.createElement("canvas");
	neew.width = c1.width;
	neew.height = c1.height;
	var geew = neew.getContext("2d");
	geew.drawImage(iron, 0, 0, c1.width, c1.height);
	var imageData = geew.getImageData(0, 0, c1.width, c1.height);
	var d = imageData.data;
	for (var i=0; i<d.length; i+=4) {
    d[i] = 255 - d[i+2];
	d[i+1] = 255 - d[i+2];
	d[i+2] = 255 - d[i+2];
    }
	geew.clearRect(0, 0, c1.width, c1.height);
	geew.putImageData(imageData, 0, 0);
	var blob = neew.toDataURL({ pixelRatio: 3 });
	var stickimg = new Image()
	stickimg.src = blob;
	stickimg.onload = function() {
	ctx1.clearRect(0, 0, c1.width, c1.height);
	ctx1.drawImage(stickimg, 0, 0, c1.width, c1.height);
	neew.remove();
	document.getElementById("filterlist").style.display="none";
	document.getElementById("sace").style.display="block";
	}
});
document.getElementById("fitter30").addEventListener("click", function() {
	var neew = document.createElement("canvas");
	neew.width = c1.width;
	neew.height = c1.height;
	var geew = neew.getContext("2d");
	geew.drawImage(iron, 0, 0, c1.width, c1.height);
	var imageData = geew.getImageData(0, 0, c1.width, c1.height);
	var d = imageData.data;
	for (var i=0; i<d.length; i+=4) {
    var r = d[i];
    var g = d[i+1];
    var b = d[i+2];
    var v = (0.0126*r + 0.9152*g + 0.5722*b >= 30) ? 255 : 0;
    d[i] = d[i+1] = d[i+2] = v
    }
	geew.clearRect(0, 0, c1.width, c1.height);
	geew.putImageData(imageData, 0, 0);
	var blob = neew.toDataURL({ pixelRatio: 3 });
	var stickimg = new Image()
	stickimg.src = blob;
	stickimg.onload = function() {
	ctx1.clearRect(0, 0, c1.width, c1.height);
	ctx1.drawImage(stickimg, 0, 0, c1.width, c1.height);
	neew.remove();
	document.getElementById("filterlist").style.display="none";
	document.getElementById("sace").style.display="block";
	}
})
document.getElementById("fitter31").addEventListener("click", function() {
	var neew = document.createElement("canvas");
	neew.width = c1.width;
	neew.height = c1.height;
	var geew = neew.getContext("2d");
	geew.drawImage(iron, 0, 0, c1.width, c1.height);
	var imageData = geew.getImageData(0, 0, c1.width, c1.height);
	var d = imageData.data;
	for (var i=0; i<d.length; i+=4) {
    d[i] = 255 - d[i];
	d[i+1] = 255 - d[i];
	d[i+2] = 255 - d[i];
    }
	geew.clearRect(0, 0, c1.width, c1.height);
	geew.putImageData(imageData, 0, 0);
	var blob = neew.toDataURL({ pixelRatio: 3 });
	var stickimg = new Image()
	stickimg.src = blob;
	stickimg.onload = function() {
	ctx1.clearRect(0, 0, c1.width, c1.height);
	ctx1.drawImage(stickimg, 0, 0, c1.width, c1.height);
	neew.remove();
	document.getElementById("filterlist").style.display="none";
	document.getElementById("sace").style.display="block";
	}
});
document.getElementById("fitter32").addEventListener("click", function() {	
   	var opaque = 0.5;
	var weights = [0, -1, 0, -1, 5, -1, 0, -1, 0];
    var neew = document.createElement("canvas");
	neew.width = c1.width;
	neew.height = c1.height;
	var geew = neew.getContext("2d");
	geew.drawImage(iron, 0, 0, c1.width, c1.height);
	var imageData = geew.getImageData(0, 0, c1.width, c1.height);
    var side = Math.round(Math.sqrt(weights.length));
    var halfSide = Math.floor(side/2);
    var src = imageData.data;
    var sw = imageData.width;
    var sh = imageData.height;
    var w = sw;
    var h = sh;
    var output = geew.createImageData(w, h);
    var dst = output.data;
  var alphaFac = opaque ? 1 : 0;
  for (var y=0; y<h; y++) {
    for (var x=0; x<w; x++) {
      var sy = y;
      var sx = x;
      var dstOff = (y*w+x)*4;
      var r=0, g=0, b=0, a=0;
      for (var cy=0; cy<side; cy++) {
        for (var cx=0; cx<side; cx++) {
          var scy = sy + cy - halfSide;
          var scx = sx + cx - halfSide;
          if (scy >= 0 && scy < sh && scx >= 0 && scx < sw) {
            var srcOff = (scy*sw+scx)*4;
            var wt = weights[cy*side+cx];
            r += src[srcOff] * wt;
            g += src[srcOff+1] * wt;
            b += src[srcOff+2] * wt;
            a += src[srcOff+3] * wt;
          }
        }
      }
      dst[dstOff] = r;
      dst[dstOff+1] = g;
      dst[dstOff+2] = b;
      dst[dstOff+3] = a + alphaFac*(255-a);
    }
  } 
	geew.clearRect(0, 0, c1.width, c1.height);
	geew.putImageData(output, 0, 0);
	var blob = neew.toDataURL({ pixelRatio: 3 });
	var stickimg = new Image()
	stickimg.src = blob;
	stickimg.onload = function() {
	ctx1.clearRect(0, 0, c1.width, c1.height);
	ctx1.drawImage(stickimg, 0, 0, c1.width, c1.height);
	neew.remove();
	document.getElementById("filterlist").style.display="none";
	document.getElementById("sace").style.display="block";
	}
});
document.getElementById("fitter33").addEventListener("click", function() {	
    var neew = document.createElement("canvas");
	neew.width = c1.width;
	neew.height = c1.height;
	var geew = neew.getContext("2d");
	geew.drawImage(iron, 0, 0, c1.width, c1.height);
	var imageData = geew.getImageData(0, 0, c1.width, c1.height);
	var d = imageData.data;
	for (var i=0; i<d.length; i+=4) {
    var r = d[i];
    var g = d[i+1];
    var b = d[i+2];
    var v = (0.0026*r + 0.2152*g + 0.5722*b >= 30) ? 255 : 0;
    d[i] = d[i+1] = d[i+2] = v
    }
	geew.clearRect(0, 0, c1.width, c1.height);
	geew.putImageData(imageData, 0, 0);
	var blob = neew.toDataURL({ pixelRatio: 3 });
	var stickimg = new Image()
	stickimg.src = blob;
	stickimg.onload = function() {
	ctx1.clearRect(0, 0, c1.width, c1.height);
	ctx1.drawImage(stickimg, 0, 0, c1.width, c1.height);
	neew.remove();
	document.getElementById("filterlist").style.display="none";
	document.getElementById("sace").style.display="block";
	}
});	
document.getElementById("fitter34").addEventListener("click", function() {	 //basic filter in canvas upto filter 40
    document.getElementById("filterlist").style.display="none";
    document.getElementById("nextbut").style.display="block";
	document.getElementById("filtercolor").style.display="block";
    document.getElementById("bright").style.display="block";
	ctx1.clearRect(0, 0, c1.width, c1.height);
	ctx1.filter = 'hue-rotate(0deg)';
	ctx1.drawImage(iron, 0, 0, c1.width, c1.height);
	document.getElementById("bright").min = 0;
	document.getElementById("bright").value = 0;
	document.getElementById("bright").step = 5;
	document.getElementById("bright").max = 360;
	document.getElementById("bright").oninput = function () {
		var value = document.getElementById("bright").value;
		ctx1.clearRect(0, 0, c1.width, c1.height);
		ctx1.filter = 'hue-rotate('+value+'deg)';
		ctx1.drawImage(iron, 0, 0, c1.width, c1.height);
	}
	document.getElementById("filtercolor").addEventListener("click", function (e) {
        document.getElementById("sace").style.display="block";
	    document.getElementById("nextbut").style.display="none";
		document.getElementById("filtercolor").style.display="none";
        document.getElementById("bright").style.display="none";
});
});
document.getElementById("fitter35").addEventListener("click", function() {
    document.getElementById("filterlist").style.display="none";
    document.getElementById("nextbut").style.display="block";
	document.getElementById("filtercolor").style.display="block";
    document.getElementById("bright").style.display="block";
	ctx1.clearRect(0, 0, c1.width, c1.height);
	ctx1.filter = 'saturate(0%)';
	ctx1.drawImage(iron, 0, 0, c1.width, c1.height);
	document.getElementById("bright").min = 0;
	document.getElementById("bright").value = 0;
	document.getElementById("bright").step = 10;
	document.getElementById("bright").max = 200;
	document.getElementById("bright").oninput = function () {
		var value = document.getElementById("bright").value;
		ctx1.clearRect(0, 0, c1.width, c1.height);
		ctx1.filter = 'saturate('+value+'%)';
		ctx1.drawImage(iron, 0, 0, c1.width, c1.height);
	}
	document.getElementById("filtercolor").addEventListener("click", function (e) {
        document.getElementById("sace").style.display="block";
	    document.getElementById("nextbut").style.display="none";
        document.getElementById("bright").style.display="none";
		document.getElementById("filtercolor").style.display="none";
});
});
document.getElementById("fitter36").addEventListener("click", function() {
    document.getElementById("filterlist").style.display="none";
    document.getElementById("nextbut").style.display="block";
	document.getElementById("filtercolor").style.display="block";
    document.getElementById("bright").style.display="block";
	ctx1.clearRect(0, 0, c1.width, c1.height);
	ctx1.filter = 'opacity(100%)';
	ctx1.drawImage(iron, 0, 0, c1.width, c1.height);
	document.getElementById("bright").min = 0;
	document.getElementById("bright").value = 100;
	document.getElementById("bright").step = 1;
	document.getElementById("bright").max = 100;
	document.getElementById("bright").oninput = function () {
		var value = document.getElementById("bright").value;
		ctx1.clearRect(0, 0, c1.width, c1.height);
		ctx1.filter = 'opacity('+value+'%)';
		ctx1.drawImage(iron, 0, 0, c1.width, c1.height);
	}
	document.getElementById("filtercolor").addEventListener("click", function (e) {
        document.getElementById("sace").style.display="block";
	    document.getElementById("nextbut").style.display="none";
        document.getElementById("bright").style.display="none";
		document.getElementById("filtercolor").style.display="none";
});
});
document.getElementById("fitter37").addEventListener("click", function() {
	document.getElementById("filterlist").style.display="none";
    document.getElementById("nextbut").style.display="block";
	document.getElementById("filtercolor").style.display="block";
    document.getElementById("bright").style.display="block";
	ctx1.clearRect(0, 0, c1.width, c1.height);
	ctx1.filter = 'sepia(5%)';
	ctx1.drawImage(iron, 0, 0, c1.width, c1.height);
	document.getElementById("bright").min = 5;
	document.getElementById("bright").value = 5;
	document.getElementById("bright").step = 5;
	document.getElementById("bright").max = 100;
	document.getElementById("bright").oninput = function () {
		var value = document.getElementById("bright").value;
		ctx1.clearRect(0, 0, c1.width, c1.height);
		ctx1.filter = 'sepia('+value+'%)';
		ctx1.drawImage(iron, 0, 0, c1.width, c1.height);
	}
	document.getElementById("filtercolor").addEventListener("click", function (e) {
        document.getElementById("sace").style.display="block";
	    document.getElementById("nextbut").style.display="none";
		document.getElementById("filtercolor").style.display="none";
        document.getElementById("bright").style.display="none";
});
});
document.getElementById("fitter38").addEventListener("click", function() {
    document.getElementById("filterlist").style.display="none";
    document.getElementById("nextbut").style.display="block";
	document.getElementById("filtercolor").style.display="block";
    document.getElementById("bright").style.display="block";
	ctx1.clearRect(0, 0, c1.width, c1.height);
	ctx1.filter = 'grayscale(5%)';
	ctx1.drawImage(iron, 0, 0, c1.width, c1.height);
	document.getElementById("bright").min = 5;
	document.getElementById("bright").value = 5;
	document.getElementById("bright").step = 5;
	document.getElementById("bright").max = 100;
	document.getElementById("bright").oninput = function () {
		var value = document.getElementById("bright").value;
		ctx1.clearRect(0, 0, c1.width, c1.height);
		ctx1.filter = 'grayscale('+value+'%)';
		ctx1.drawImage(iron, 0, 0, c1.width, c1.height);
	}
	document.getElementById("filtercolor").addEventListener("click", function (e) {
        document.getElementById("sace").style.display="block";
	    document.getElementById("nextbut").style.display="none";
		document.getElementById("filtercolor").style.display="none";
        document.getElementById("bright").style.display="none";
});
});
document.getElementById("fitter39").addEventListener("click", function() {
    document.getElementById("filterlist").style.display="none";
    document.getElementById("nextbut").style.display="block";
	document.getElementById("filtercolor").style.display="block";
    document.getElementById("bright").style.display="block";
	ctx1.clearRect(0, 0, c1.width, c1.height);
	ctx1.filter = 'blur(0.1px)';
	ctx1.drawImage(iron, 0, 0, c1.width, c1.height);
	document.getElementById("bright").min = 0.1;
	document.getElementById("bright").value = 0.1;
	document.getElementById("bright").step = 0.1;
	document.getElementById("bright").max = 4;
	document.getElementById("bright").oninput = function () {
		var value = document.getElementById("bright").value;
		ctx1.clearRect(0, 0, c1.width, c1.height);
		ctx1.filter = 'blur('+value+'px)';
		ctx1.drawImage(iron, 0, 0, c1.width, c1.height);
	}
	document.getElementById("filtercolor").addEventListener("click", function (e) {
        document.getElementById("sace").style.display="block";
	    document.getElementById("nextbut").style.display="none";
		document.getElementById("filtercolor").style.display="none";
        document.getElementById("bright").style.display="none";
});
});
document.getElementById("fitter40").addEventListener("click", function() {
    document.getElementById("filterlist").style.display="none";
    document.getElementById("nextbut").style.display="block";
	document.getElementById("filtercolor").style.display="block";
    document.getElementById("bright").style.display="block";
	ctx1.clearRect(0, 0, c1.width, c1.height);
	ctx1.filter = 'invert(5%)';
	ctx1.drawImage(iron, 0, 0, c1.width, c1.height);
	document.getElementById("bright").min = 5;
	document.getElementById("bright").value = 5;
	document.getElementById("bright").step = 5;
	document.getElementById("bright").max = 100;
	document.getElementById("bright").oninput = function () {
		var value = document.getElementById("bright").value;
		ctx1.clearRect(0, 0, c1.width, c1.height);
		ctx1.filter = 'invert('+value+'%)';
		ctx1.drawImage(iron, 0, 0, c1.width, c1.height);
	}
	document.getElementById("filtercolor").addEventListener("click", function (e) {
        document.getElementById("sace").style.display="block";
	    document.getElementById("nextbut").style.display="none";
		document.getElementById("filtercolor").style.display="none";
        document.getElementById("bright").style.display="none";
});
});	
}