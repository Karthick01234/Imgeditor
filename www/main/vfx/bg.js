var c1 = document.getElementById("vas");
var ctx = c1.getContext("2d");
var input = document.getElementById("hydra");
var back = document.getElementById("backhydra");
function upload() {
   input.click()
}
function delet() {
document.getElementById("delete").style.display="none";
document.getElementById("edit").style.display="block";
document.getElementById("x").value = "";
document.getElementById("x").value = "erase"
}
function edit() {
document.getElementById("delete").style.display="block";
document.getElementById("edit").style.display="none";
document.getElementById("x").value = "";
document.getElementById("x").value = "draw"
}
input.onchange = function() { // input onchange event
	if(document.getElementById("hydra").value.endsWith(".jpg") || document.getElementById("hydra").value.endsWith(".png") || document.getElementById("hydra").value.endsWith(".jpeg")) {
	var mk = input.files[0];
	var url = URL.createObjectURL(mk);
	var image = new Image();
	image.src = url;
	image.onload = function () {
	var calculatewidth = 320/image.width;
    var calculateheight = 240/image.height;	
	var uuyy = calculatewidth*4;
	var yyuu = calculateheight*4;
	var kastam = scaleIt(image, uuyy, yyuu)
	ctx.imageSmoothingQuality = "high";
	ctx.drawImage(kastam, 0, 0, 320, 240);
	var blob = c1.toDataURL('image/png', 1);		
	var vfximage = new Image();
	vfximage.src = blob;
	vfximage.onload = function () {
	c1.style.background="url("+vfximage.src+")";
	}
	}
	function scaleIt(vcx, bnm, lesm) {
		var resi = document.createElement('canvas');
		var ctxresi = resi.getContext("2d");
		var resiww = vcx.width*bnm;
		var resihh = vcx.height*lesm;
		resi.width = resiww;
		resi.height = resihh;
		ctxresi.drawImage(vcx, 0, 0, resiww, resihh);
		var sire = document.createElement('canvas');
		var ctxsire = sire.getContext("2d");
		var sireww = resiww/2;
		var sirehh = resihh/2;
		sire.width = sireww;
		sire.height = sirehh;
		ctxsire.drawImage(resi, 0, 0, sireww, sirehh);
		var timon = document.createElement('canvas');
		var pumba = timon.getContext("2d");
		var pumbaww = sireww/2;
		var pumbahh = sirehh/2;
		timon.width = pumbaww;
		timon.height = pumbahh;
		pumba.drawImage(sire, 0, 0, pumbaww, pumbahh);
		return(timon);
	}
	document.getElementById("inpimg").style.display="none";
	document.getElementById("dashboard").style.display="block"
	}
    else {
      alert("unsupported format")
	  documen.getElementById("hydra").value="";
	}
};
c1.addEventListener('touchmove', workdraw);
function workdraw(e) {
    if(document.getElementById("x").value === "draw") {
    var rect = c1.getBoundingClientRect();
	var x = e.touches[0].clientX - rect.left;
	var y = e.touches[0].clientY - rect.top;
    var radius = document.getElementById("rag").value;
	ctx.beginPath()
    ctx.arc(x, y, radius, 0, 2*Math.PI, false);
	ctx.fillStyle = '#ffff00';
	ctx.fill();
	ctx.lineWidth = 5;
	ctx.strokeStyle = '#ffff00';;
	ctx.stroke();
	}
	else {
    var rect = c1.getBoundingClientRect();
	var x = e.touches[0].clientX - rect.left;
	var y = e.touches[0].clientY - rect.top;
    var radius = document.getElementById("rag").value;
	ctx.clearRect(x, y, radius, radius);
	}
};
c1.addEventListener('mousemove', drawwork);
function drawwork(e) {
    if(document.getElementById("x").value === "draw") {
    var rect = c1.getBoundingClientRect();
	var x = e.clientX - rect.left;
	var y = e.clientY - rect.top;
    var radius = document.getElementById("rag").value;
	ctx.beginPath()
    ctx.arc(x, y, radius, 0, 2*Math.PI, false);
	ctx.fillStyle = '#ffff00';
	ctx.fill();
	ctx.lineWidth = 5;
	ctx.strokeStyle = '#ffff00';;
	ctx.stroke();
	}
	else {
    var rect = c1.getBoundingClientRect();
	var x = e.clientX - rect.left;
	var y = e.clientY - rect.top;
    var radius = document.getElementById("rag").value;
	ctx.clearRect(x, y, radius, radius);
	}
};
function hi() {
 document.getElementById("xy").style.display="none";
 document.getElementById("xy1").style.display="none";
 document.getElementById("xy2").style.display="none";
 document.getElementById("xy3").style.display="block";
 document.getElementById("xy4").style.display="block";
 c1.removeEventListener('touchmove', workdraw);
 c1.removeEventListener('mousemove', drawwork);
}
function kill() {
        document.getElementById("xy3").style.display="none";
        document.getElementById("xy4").style.display="none";
        c1.style.background="";
        		var blob = c1.toDataURL('image/png', 1);
		var mk = input.files[0];
	    var url = URL.createObjectURL(mk);
	    var image = new Image();
	    image.src = url;
	    image.onload = function () {
	    var calculatewidth = 320/image.width;
        var calculateheight = 240/image.height;	
	    var uuyy = calculatewidth*4;
	    var yyuu = calculateheight*4;
	    var kastam = scaleIt(image, uuyy, yyuu)
	    ctx.imageSmoothingQuality = "high";
	    ctx.drawImage(kastam, 0, 0, 320, 240);
	    var vfximage = new Image();
	    vfximage.src = blob;
	    vfximage.onload = function () {
	       ctx.imageSmoothingQuality = "high";
	       ctx.drawImage(vfximage, 0, 0, 320, 240);
	       vfx();
	    }
		}
	function scaleIt(vcx, bnm, lesm) {
		var resi = document.createElement('canvas');
		var ctxresi = resi.getContext("2d");
		var resiww = vcx.width*bnm;
		var resihh = vcx.height*lesm;
		resi.width = resiww;
		resi.height = resihh;
		ctxresi.drawImage(vcx, 0, 0, resiww, resihh);
		var sire = document.createElement('canvas');
		var ctxsire = sire.getContext("2d");
		var sireww = resiww/2;
		var sirehh = resihh/2;
		sire.width = sireww;
		sire.height = sirehh;
		ctxsire.drawImage(resi, 0, 0, sireww, sirehh);
		var timon = document.createElement('canvas');
		var pumba = timon.getContext("2d");
		var pumbaww = sireww/2;
		var pumbahh = sirehh/2;
		timon.width = pumbaww;
		timon.height = pumbahh;
		pumba.drawImage(sire, 0, 0, pumbaww, pumbahh);
		return(timon);
	}
}
function vfx() {
var frame = ctx.getImageData(0, 0, 320, 240);
var l = frame.data.length  / 4;
for(var i = 0; i < l; i++) {
	var r = frame.data[i * 4 + 0];
	var g = frame.data[i * 4 + 1];
	var b = frame.data[i * 4 + 2];
	if(r > 100 && g > 100 && b< 43) 
	    frame.data[i * 4 + 3] = 0;
}
ctx.clearRect(0, 0, 320, 240);
ctx.putImageData(frame, 0, 0);
document.getElementById("dove").style.display="block";
}
function bill() {
   document.getElementById("xy3").style.display="none";
   document.getElementById("xy4").style.display="none";
   document.getElementById("dashboard").style.display="none";
   document.getElementById("backvfx").style.display="block";
}
function backupload() { // label for input background image
	back.click();
}
back.onchange = function() { // input onchange event for background image
	if(document.getElementById("backhydra").value.endsWith(".jpg") || document.getElementById("backhydra").value.endsWith(".png") || document.getElementById("backhydra").value.endsWith(".jpeg")) {
	var c2 = document.createElement("canvas");
	c2.width = 320;
	c2.height = 240;
	var ctx2 = c2.getContext("2d");
    var poke = back.files[0];
	var pokeurl = URL.createObjectURL(poke);
	var pokeimage = new Image();
	pokeimage.onload = function () {
	  ctx2.drawImage(pokeimage, 0, 0, 320, 240)
      var blob = c2.toDataURL();
      var tom = new Image();
      tom.src = blob;
      tom.onload = function() {
          c1.style.backgroundImage="url("+tom.src+")";
	      document.getElementById("backvfx").style.display="none";
          document.getElementById("dashboard").style.display="block";
		  document.getElementById("output").value = "";
		  document.getElementById("output").value = "vfx";
		  whokill();
	  }
	}
	pokeimage.src = pokeurl;
	}
	else {
		alert("unsupported format");
	    documen.getElementById("backhydra").value=""
	}
}
function whokill() {
        document.getElementById("xy3").style.display="none";
        document.getElementById("xy4").style.display="none";
        		var blob = c1.toDataURL('image/png', 1);
		var mk = input.files[0];
	    var url = URL.createObjectURL(mk);
	    var image = new Image();
	    image.src = url;
	    image.onload = function () {
	    var calculatewidth = 320/image.width;
        var calculateheight = 240/image.height;	
	    var uuyy = calculatewidth*4;
	    var yyuu = calculateheight*4;
	    var kastam = scaleIt(image, uuyy, yyuu)
	    ctx.imageSmoothingQuality = "high";
	    ctx.drawImage(kastam, 0, 0, 320, 240);
	    var vfximage = new Image();
	    vfximage.src = blob;
	    vfximage.onload = function () {
	       ctx.imageSmoothingQuality = "high";
	       ctx.drawImage(vfximage, 0, 0, 320, 240);
	       whovfx();
	    }
		}
	function scaleIt(vcx, bnm, lesm) {
		var resi = document.createElement('canvas');
		var ctxresi = resi.getContext("2d");
		var resiww = vcx.width*bnm;
		var resihh = vcx.height*lesm;
		resi.width = resiww;
		resi.height = resihh;
		ctxresi.drawImage(vcx, 0, 0, resiww, resihh);
		var sire = document.createElement('canvas');
		var ctxsire = sire.getContext("2d");
		var sireww = resiww/2;
		var sirehh = resihh/2;
		sire.width = sireww;
		sire.height = sirehh;
		ctxsire.drawImage(resi, 0, 0, sireww, sirehh);
		var timon = document.createElement('canvas');
		var pumba = timon.getContext("2d");
		var pumbaww = sireww/2;
		var pumbahh = sirehh/2;
		timon.width = pumbaww;
		timon.height = pumbahh;
		pumba.drawImage(sire, 0, 0, pumbaww, pumbahh);
		return(timon);
	}
}
function whovfx() {
var frame = ctx.getImageData(0, 0, 320, 240);
var l = frame.data.length  / 4;
for(var i = 0; i < l; i++) {
	var r = frame.data[i * 4 + 0];
	var g = frame.data[i * 4 + 1];
	var b = frame.data[i * 4 + 2];
	if(r > 100 && g > 100 && b< 43) 
	    frame.data[i * 4 + 3] = 0;
}
ctx.clearRect(0, 0, 320, 240);
ctx.putImageData(frame, 0, 0);
document.getElementById("dove").style.display="block";
}
function download() {
if(document.getElementById("output").value === "vfx") {
html2canvas(c1, {
		scale: 2,
		dpi: 144,
		onrendered: function(canvas) {
		var blob = canvas.toDataURL('image/png');
		var d = new Date();
        var timings = d.getTime();
        var block = blob.split(";");
        var dataType = block[0].split(":")[1];
        var realData = block[1].split(",")[1];
        var folderpath = "file:///storage/emulated/0/";
        var filename = timings+".png";
        savebase64AsImageFile(folderpath,filename,realData,dataType);
		}
	})
}
else {
var blob = c1.toDataURL('image/png', 1);
var d = new Date();
var timings = d.getTime();
var block = blob.split(";");
var dataType = block[0].split(":")[1];
var realData = block[1].split(",")[1];
var folderpath = "file:///storage/emulated/0/";
var filename = timings+".png";
savebase64AsImageFile(folderpath,filename,realData,dataType);
}
function b64toBlob(b64Data, contentType, sliceSize) {
        contentType = contentType || '';
        sliceSize = sliceSize || 512;

        var byteCharacters = atob(b64Data);
        var byteArrays = [];

        for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            var slice = byteCharacters.slice(offset, offset + sliceSize);

            var byteNumbers = new Array(slice.length);
            for (var i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }

            var byteArray = new Uint8Array(byteNumbers);

            byteArrays.push(byteArray);
        }

      var blob = new Blob(byteArrays, {type: contentType});
      return blob;
}
function savebase64AsImageFile(folderpath,filename,content,contentType){
    var DataBlob = b64toBlob(content,contentType);
    console.log("Starting to write the file :3");
    
    window.resolveLocalFileSystemURL(folderpath, function(dir) {
        console.log("Access to the directory granted succesfully");
		dir.getFile(filename, {create:true}, function(file) {
            console.log("File created succesfully.");
            file.createWriter(function(fileWriter) {
                console.log("Writing content to file");
                fileWriter.write(DataBlob);
				alert("download success");
            }, function(){
                alert('Unable to save file in path '+ folderpath);
            });
		});
    });
}
}
function logout() { // back to main page
	window.location = "index2.html";
}
function reloadlogout() { //logout from page
   window.location.reload();
}
