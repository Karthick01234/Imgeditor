var input = document.getElementById("hydra");
var c1 = document.getElementById("firstc");
var ctx1 = c1.getContext("2d");
var _RAD = Math.PI / 180;  
var iron = document.getElementById("mainimage"); 
 function findPointOnCircle(c, r, a) 
 { 
    return { 
        x: c.x + r * Math.cos(a*_RAD) - r * Math.sin(a*_RAD), 
        y: c.y + r * Math.sin(a*_RAD) + r * Math.cos(a*_RAD) 
      }; 
 }
function upload() { // for upload image
	input.click();
}
window.onload = function() { // for sticker append to main page
	var array = ["im.png","im1.png","im2.png","im3.png","im4.png","im5.png","im6.png","im7.png","im8.png","im9.png","im10.png","im11.png","im12.png","im13.png","im14.png","im15.png","im16.png","im17.png","im18.png","mask.png","mask1.png","mask2.png","mask3.png","0a.webp","0a1.webp","0a2.webp","0a3.webp","0a4.webp","0a5.webp","0a6.webp","0a7.webp","0a8.webp","0a9.webp","0b.webp","0b1.webp","0b2.webp","0b3.webp","0b4.webp","0b5.webp","0b6.webp","0b7.webp","0b8.webp","0b9.webp","0c.webp","0c1.webp","0c2.webp","0c3.webp","0c4.webp","0c5.webp","0c6.webp","0c7.webp","0c8.webp","0c9.webp","0d.webp","0d1.webp","0d2.webp","0d3.webp","0d4.webp","0d5.webp","0d6.webp","0d7.webp","0d8.webp","0d9.webp","0e.webp","0e1.webp","0e2.webp","a1.png","a2.png","a13.png","a14.png","a15.png","a16.png","a17.png","a18.png","a19.png","a20.png","a21.png","a22.png","a23.png","a24.png","a25.png","a26.png","a27.png","a28.png","a29.png","a30.png","a31.png","a32.png","a33.png","a34.png","a35.png","a36.png","a37.png","a38.png","a.png","b.png","c.png","d.png","e.png","f.png","g.png","h.png","i.png","j.png","k.png","l.png","m.png","n.png","o.png","p.png","q.png","r.png","s.png","t.png","u.png","v.png","w.png","x.png","y.png","z.png"];
	for(var aquam=0;aquam<array.length;aquam++) {
		var aquaman = document.createElement("img");
		aquaman.src = "main/image/stickers/"+array[aquam];
		aquaman.width = 100;
		aquaman.height = 100;
		aquaman.id = "wheat"+aquam;
		aquaman.setAttribute( "onclick", "knight("+aquam+");" );
		document.getElementById("stickerlist").appendChild(aquaman);
}
document.getElementById("inpimg").style.display="block";
}
input.onchange = function () { // for upload image
	var mk = input.files[0];
	var url = URL.createObjectURL(mk);
	iron.src = url;
	iron.onload = function() {
	var uuyy = window.innerWidth;
	var yyuu = window.innerHeight;
    var xxzz = yyuu-200;	
	var zzxx = uuyy-30;	
	if(iron.width > zzxx && iron.height > xxzz) {
	c1.width = zzxx;
	c1.height = xxzz;
	iron.width = zzxx;
	iron.height = xxzz;
	document.getElementById("dashtable").style.width=zzxx+"px";
	document.getElementById("dashtable").style.height=xxzz+"px";
	ctx1.imageSmoothingQuality = "high";
	ctx1.drawImage(iron, 0, 0, c1.width, c1.height);
	document.getElementById("imgdash").style.display="block";
	document.getElementById("inpimg").style.display="none";
	}
	else if(iron.width > zzxx) {
	c1.width = zzxx;
	c1.height = iron.height;
	iron.width = zzxx;
	iron.height = iron.height;
	document.getElementById("dashtable").style.width=zzxx+"px";
	document.getElementById("dashtable").style.height=iron.height+"px";
	ctx1.imageSmoothingQuality = "high";
	ctx1.drawImage(iron, 0, 0, c1.width, c1.height);
	document.getElementById("imgdash").style.display="block";
	document.getElementById("inpimg").style.display="none";
	}
	else if(iron.height > xxzz) {
	c1.width = iron.width;
	c1.height = xxzz;
	iron.width = iron.width;
	iron.height = xxzz;
	document.getElementById("dashtable").style.width=iron.width+"px";
	document.getElementById("dashtable").style.height=xxzz+"px";
	ctx1.imageSmoothingQuality = "high";
	ctx1.drawImage(iron, 0, 0, c1.width, c1.height);
	document.getElementById("imgdash").style.display="block";
	document.getElementById("inpimg").style.display="none";
	}
	else {
	c1.width = iron.width;
	c1.height = iron.height;
	iron.width = iron.width;
	iron.height = iron.height;
	document.getElementById("dashtable").style.width=iron.width+"px";
	document.getElementById("dashtable").style.height=iron.height+"px";
	ctx1.imageSmoothingQuality = "high";
	ctx1.drawImage(iron, 0, 0, c1.width, c1.height);
	document.getElementById("imgdash").style.display="block";
	document.getElementById("inpimg").style.display="none";
	}	
	}
}
function save() { // save editing image
    var blob = c1.toDataURL("image/png");
	iron.src = blob;
	ctx1.clearRect(0, 0, c1.width, c1.height);
	ctx1.imageSmoothingQuality = "high";
	ctx1.drawImage(iron, 0, 0, c1.width, c1.height);
	document.getElementById("sace").style.display="none";
	document.querySelector(".icon").style.display="block";
	if(document.getElementById("jcropboxx").value === "crop") {
		document.getElementById("jcropboxx").value="";
		document.getElementById("jcropboxx").value ="sucessfull";
	}
}
function cancel() { // cancel editing image
	    ctx1.clearRect(0, 0, c1.width, c1.height);
		ctx1.filter="none";
		ctx1.imageSmoothingQuality = "high";
		ctx1.drawImage(iron, 0, 0, c1.width, c1.height);
		document.getElementById("sace").style.display="none";
		document.querySelector(".icon").style.display="block";
		if(document.getElementById("jcropboxx").value === "crop") {
		    document.getElementById("jcropboxx").value="";
		}
		else {
		}
}
function download(){ //download editing image
	if(document.getElementById("jcropboxx").value === "sucessfull") { //for cropped image
	   var x = document.getElementById("x").value;
	   var y = document.getElementById("y").value;
	   var w = document.getElementById("w").value;
	   var h = document.getElementById("h").value;
	   var free = ctx1.getImageData(x, y, w, h);
	   var down = document.createElement("canvas")
	   var load = down.getContext("2d")
	   down.width = w;
	   down.height = h;
	   load.putImageData(free, 0, 0);
	   var blob = down.toDataURL("image/png");
	   var d = new Date();
	   var timings = d.getTime();
	   var block = blob.split(";");
	   var dataType = block[0].split(":")[1];
	   var realData = block[1].split(",")[1];
	   var folderpath = "file:///storage/emulated/0/";
	   var filename = timings+".png";
	   savebase64AsImageFile(folderpath,filename,realData,dataType);
	}
	else { //without cropped image
	var blob = c1.toDataURL("image/png");
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
function crop() { // image cropping
	c1.style.display="none";
	document.querySelector(".icon").style.display="none";
	document.getElementById("nextbut").style.display="block";
	document.getElementById("color").style.display="block";
	var cropc = document.createElement("canvas");
	cropc.id = "cropc";
	cropc.width = c1.width;
	cropc.height = c1.height;
	document.getElementById("dashtable").appendChild(cropc);
	var ct = document.getElementById("cropc").getContext("2d");
	ct.drawImage(iron, 0, 0, c1.width, c1.height);
	jQuery(function($){

    var jcrop_api;

    $('#cropc').Jcrop({
      onSelect: updateCoords
    },function(){
      jcrop_api = this;
    });
  function updateCoords(c)
  {
	$('#x').val(c.x);
    $('#y').val(c.y);
    $('#w').val(c.w);
    $('#h').val(c.h);
  };
    document.getElementById("color").addEventListener("click", function (e) {
		  var x = document.getElementById("x").value;
		  var y = document.getElementById("y").value;
		  var w = document.getElementById("w").value;
		  var h = document.getElementById("h").value;
		  var blob = ct.getImageData(x, y, w, h);
          jcrop_api.release();
		  jcrop_api.destroy();
		  ctx1.clearRect(0, 0, c1.width, c1.height);
		  ctx1.putImageData(blob, x, y);
		  c1.style.display="block";
		  document.getElementById("nextbut").style.display="none";
		  document.getElementById("color").style.display="none";
		  document.getElementById("sace").style.display="block";
		  document.getElementById('jcropboxx').value="";
		  document.getElementById('jcropboxx').value="crop";
	});
    });
}
function brightness() { //brightness
	document.querySelector(".icon").style.display="none";
	document.getElementById("nextbut").style.display="block";
	document.getElementById("brightnesscolor").style.display="block";
    document.getElementById("bright").style.display="block";
	document.getElementById("bright").min = 0;	
	document.getElementById("bright").value = 0;
    document.getElementById("bright").max = 500;	
	document.getElementById("bright").step = 5;		
	document.getElementById("bright").oninput = function () {
		var value = document.getElementById("bright").value;
		ctx1.clearRect(0, 0, c1.width, c1.height);
		ctx1.filter = 'brightness('+value+'%)';
		ctx1.drawImage(iron, 0, 0, c1.width, c1.height);
	}
	document.getElementById("brightnesscolor").addEventListener("click", function (e) {
        document.getElementById("sace").style.display="block";
	    document.getElementById("nextbut").style.display="none";
        document.getElementById("bright").style.display="none";
		document.getElementById("brightnesscolor").style.display="none";
	});
}
function contrast() { // contrast
	document.querySelector(".icon").style.display="none";
	document.getElementById("nextbut").style.display="block";
    document.getElementById("bright").style.display="block";
	document.getElementById("contrastcolor").style.display="block";
	document.getElementById("bright").min = 0;	
	document.getElementById("bright").value = 0;	
	document.getElementById("bright").max = 1000;
    document.getElementById("bright").step = 5;		
	document.getElementById("bright").oninput = function () {
		var value = document.getElementById("bright").value;
		ctx1.clearRect(0, 0, c1.width, c1.height);
		ctx1.filter = 'contrast('+value+'%)';
		ctx1.drawImage(iron, 0, 0, c1.width, c1.height);
	}
	document.getElementById("contrastcolor").addEventListener("click", function (e) {
        document.getElementById("sace").style.display="block";
	    document.getElementById("nextbut").style.display="none";
        document.getElementById("bright").style.display="none";
		document.getElementById("contrastcolor").style.display="none";
	});
}

function college() { // college effect
document.querySelector(".icon").style.display="none";
document.getElementById("framelist").style.display="block";
var image = iron;
document.getElementById("framme").addEventListener("click", function() {
	ctx1.clearRect(0 , 0, c1.width, c1.height);
	ctx1.save();
	roundedImage(0, 0,c1.width, c1.height, 10);
	ctx1.clip();
	ctx1.fillStyle = "grey";
	ctx1.fillRect(0, 0, c1.width, c1.height);
	ctx1.restore();
	ctx1.save();
	ctx1.beginPath();
	ctx1.arc(c1.width/2, c1.height/2+5, c1.height/2-5, 0, Math.PI * 2, true);
	ctx1.closePath();
	ctx1.clip();
	ctx1.imageSmoothingQuality = "high";
	ctx1.drawImage(image, 0, 0, c1.width, c1.height);
    ctx1.beginPath();
	ctx1.arc(0, 0, 25, 0, Math.PI * 2, true);
	ctx1.clip();
	ctx1.closePath();
	ctx1.restore();
	document.getElementById("framelist").style.display="none";
	document.getElementById("sace").style.display="block";
});
document.getElementById("framme1").addEventListener("click", function() {
	ctx1.clearRect(0 , 0, c1.width, c1.height);
	ctx1.save();
	roundedImage(0, 0,c1.width, c1.height, 10);
	ctx1.clip();
	ctx1.fillStyle = "grey";
	ctx1.fillRect(0, 0, c1.width, c1.height);
	ctx1.restore();
	ctx1.save();
	roundedImage(10, 10, c1.width-20, (c1.height-30)/2, 10);
	ctx1.clip();
	ctx1.imageSmoothingQuality = "high";
	ctx1.drawImage(image, 10, 10, c1.width-20, (c1.height-30)/2);
	ctx1.restore();
	ctx1.save();
	roundedImage(10,  (c1.height-30)/2+20, (c1.width-30)/2, (c1.height-30)/2, 10);
	ctx1.clip();
	ctx1.imageSmoothingQuality = "high";
	ctx1.drawImage(image, 10, (c1.height-30)/2+20, (c1.width-30)/2, (c1.height-30)/2);
	ctx1.restore();
	ctx1.save();
	roundedImage((c1.width-30)/2+20, (c1.height-30)/2+20, (c1.width-30)/2, (c1.height-30)/2, 10);
	ctx1.clip();
	ctx1.imageSmoothingQuality = "high";
	ctx1.drawImage(image, (c1.width-30)/2+20, (c1.height-30)/2+20, (c1.width-30)/2, (c1.height-30)/2);
	ctx1.restore();
	document.getElementById("framelist").style.display="none";
	document.getElementById("sace").style.display="block";	
});
document.getElementById("framme2").addEventListener("click", function() {
	ctx1.clearRect(0 , 0, c1.width, c1.height);
	ctx1.save();
	roundedImage(0, 0,c1.width, c1.height, 10);
	ctx1.clip();
	ctx1.fillStyle = "grey";
	ctx1.fillRect(0, 0, c1.width, c1.height);
	ctx1.restore();
	ctx1.save();
	roundedImage(10, (c1.height-30)/2+20, c1.width-20, (c1.height-30)/2, 10);
	ctx1.clip();
	ctx1.imageSmoothingQuality = "high";
	ctx1.drawImage(image, 10, (c1.height-30)/2+20, c1.width-20, (c1.height-30)/2);
	ctx1.restore();
	ctx1.save();
	roundedImage(10, 10, (c1.width-30)/2, (c1.height-30)/2, 10);
	ctx1.clip();
	ctx1.imageSmoothingQuality = "high";
	ctx1.drawImage(image, 10, 10, (c1.width-30)/2, (c1.height-30)/2);
	ctx1.restore();
	ctx1.save();
	roundedImage((c1.width-30)/2+20, 10, (c1.width-30)/2, (c1.height-30)/2, 10);
	ctx1.clip();
	ctx1.imageSmoothingQuality = "high";
	ctx1.drawImage(image, (c1.width-30)/2+20, 10, (c1.width-30)/2, (c1.height-30)/2);
	ctx1.restore();
	document.getElementById("framelist").style.display="none";
	document.getElementById("sace").style.display="block";
});
document.getElementById("framme3").addEventListener("click", function() {
	ctx1.clearRect(0 , 0, c1.width, c1.height);
	ctx1.save();
	roundedImage(0, 0, c1.width, c1.height, 10);
	ctx1.clip();
	ctx1.fillStyle = "grey";
	ctx1.fillRect(0, 0, c1.width, c1.height);
	ctx1.restore();
	ctx1.save();
	roundedImage(10, 10,  (c1.width-30)/2, c1.height-20, 10);
	ctx1.clip();
	ctx1.imageSmoothingQuality = "high";
	ctx1.drawImage(image, 10, 10, (c1.width-30)/2,  c1.height-20);
	ctx1.restore();
	ctx1.save();
	roundedImage((c1.width-30)/2+20, 10,(c1.width-30)/2, (c1.height-30)/2, 10);
	ctx1.clip();
	ctx1.imageSmoothingQuality = "high";
	ctx1.drawImage(image, (c1.width-30)/2+20, 10, (c1.width-30)/2, (c1.height-30)/2);
	ctx1.restore();
	ctx1.save();
	roundedImage((c1.width-30)/2+20, (c1.height-30)/2+20, (c1.width-30)/2, (c1.height-30)/2, 10);
	ctx1.clip();
	ctx1.imageSmoothingQuality = "high";
	ctx1.drawImage(image, (c1.width-30)/2+20, (c1.height-30)/2+20, (c1.width-30)/2, (c1.height-30)/2);
	ctx1.restore();
	document.getElementById("framelist").style.display="none";
	document.getElementById("sace").style.display="block";
});
document.getElementById("framme4").addEventListener("click", function() {
	ctx1.clearRect(0 , 0, c1.width, c1.height);
	ctx1.save();
	roundedImage(0, 0, c1.width, c1.height, 10);
	ctx1.clip();
	ctx1.fillStyle = "grey";
	ctx1.fillRect(0, 0, c1.width, c1.height);
	ctx1.restore();
	ctx1.save();
	roundedImage((c1.width-30)/2+20, 10,  (c1.width-30)/2, c1.height-20, 10);
	ctx1.clip();
	ctx1.imageSmoothingQuality = "high";
	ctx1.drawImage(image, (c1.width-30)/2+20, 10, (c1.width-30)/2,  c1.height-20);
	ctx1.restore();
	ctx1.save();
	roundedImage(10, 10,(c1.width-30)/2, (c1.height-30)/2, 10);
	ctx1.clip();
	ctx1.imageSmoothingQuality = "high";
	ctx1.drawImage(image, 10, 10, (c1.width-30)/2, (c1.height-30)/2);
	ctx1.restore();
	ctx1.save();
	roundedImage(10, (c1.height-30)/2+20, (c1.width-30)/2, (c1.height-30)/2, 10);
	ctx1.clip();
	ctx1.imageSmoothingQuality = "high";
	ctx1.drawImage(image, 10, (c1.height-30)/2+20, (c1.width-30)/2, (c1.height-30)/2);
	ctx1.restore();
	document.getElementById("framelist").style.display="none";
	document.getElementById("sace").style.display="block";
});
document.getElementById("framme5").addEventListener("click", function() {
	ctx1.clearRect(0 , 0, c1.width, c1.height);
	ctx1.save();
	roundedImage(0, 0, c1.width, c1.height, 10);
	ctx1.clip();
	ctx1.fillStyle = "grey";
	ctx1.fillRect(0, 0, c1.width, c1.height);
	ctx1.restore();
	ctx1.save();
	roundedImage(10, 10, (c1.width-30)/2, (c1.height-30)/2, 10);
	ctx1.clip();
	ctx1.imageSmoothingQuality = "high";
	ctx1.drawImage(image, 10, 10, (c1.width-30)/2, (c1.height-30)/2);
	ctx1.restore();
	ctx1.save();
	roundedImage((c1.width-30)/2+20, 10, (c1.width-30)/2, (c1.height-30)/2, 10);
	ctx1.clip();
	ctx1.imageSmoothingQuality = "high";
	ctx1.drawImage(image, (c1.width-30)/2+20, 10, (c1.width-30)/2, (c1.height-30)/2);
	ctx1.restore();
	ctx1.save();
	roundedImage(10, (c1.height-30)/2+20, (c1.width-30)/2, (c1.height-30)/2, 10);
	ctx1.clip();
	ctx1.imageSmoothingQuality = "high";
	ctx1.drawImage(image, 10, (c1.height-30)/2+20, (c1.width-30)/2, (c1.height-30)/2);
	ctx1.restore();
	ctx1.save();
	roundedImage((c1.width-30)/2+20, (c1.height-30)/2+20, (c1.width-30)/2, (c1.height-30)/2, 10);
	ctx1.clip();
	ctx1.imageSmoothingQuality = "high";
	ctx1.drawImage(image, (c1.width-30)/2+20, (c1.height-30)/2+20, (c1.width-30)/2, (c1.height-30)/2);
	ctx1.restore();
	document.getElementById("framelist").style.display="none";
	document.getElementById("sace").style.display="block";
});
document.getElementById("framme6").addEventListener("click", function() {
	ctx1.clearRect(0 , 0, c1.width, c1.height);
	ctx1.save();
	roundedImage(0, 0, c1.width, c1.height, 10);
	ctx1.clip();
	ctx1.fillStyle = "grey";
	ctx1.fillRect(0, 0, c1.width, c1.height);
	ctx1.restore();
	ctx1.save();
	roundedImage(10, 10, (c1.width-40)/3, (c1.height-30)/2, 10);
	ctx1.clip();
	ctx1.imageSmoothingQuality = "high";
	ctx1.drawImage(image, 10, 10, (c1.width-40)/3, (c1.height-30)/2);
	ctx1.restore();
	ctx1.save();
	roundedImage((c1.width-40)/3+20, 10, (c1.width-40)/3, (c1.height-30)/2, 10);
	ctx1.clip();
	ctx1.imageSmoothingQuality = "high";
	ctx1.drawImage(image, (c1.width-40)/3+20, 10, (c1.width-40)/3, (c1.height-30)/2);
	ctx1.restore();
	ctx1.save();
	roundedImage((2*(c1.width-40)/3)+30, 10, (c1.width-40)/3, (c1.height-30)/2, 10);
	ctx1.clip();
	ctx1.imageSmoothingQuality = "high";
	ctx1.drawImage(image, (2*(c1.width-40)/3)+30, 10, (c1.width-40)/3, (c1.height-30)/2);
	ctx1.restore();
	ctx1.save();
	roundedImage(10, (c1.height-30)/2+20, (c1.width-40)/3, (c1.height-30)/2, 10);
	ctx1.clip();
	ctx1.imageSmoothingQuality = "high";
	ctx1.drawImage(image, 10, (c1.height-30)/2+20, (c1.width-40)/3, (c1.height-30)/2);
	ctx1.restore();
	ctx1.save();
	roundedImage((c1.width-40)/3+20, (c1.height-30)/2+20, (c1.width-40)/3, (c1.height-30)/2, 10);
	ctx1.clip();
	ctx1.imageSmoothingQuality = "high";
	ctx1.drawImage(image, (c1.width-40)/3+20, (c1.height-30)/2+20, (c1.width-40)/3, (c1.height-30)/2);
	ctx1.restore();
	ctx1.save();
	roundedImage((2*(c1.width-40)/3)+30, (c1.height-30)/2+20, (c1.width-40)/3, (c1.height-30)/2, 10);
	ctx1.clip();
	ctx1.imageSmoothingQuality = "high";
	ctx1.drawImage(image, (2*(c1.width-40)/3)+30, (c1.height-30)/2+20, (c1.width-40)/3, (c1.height-30)/2);
	ctx1.restore();
	document.getElementById("framelist").style.display="none";
	document.getElementById("sace").style.display="block";
});
document.getElementById("framme7").addEventListener("click", function() {
	ctx1.clearRect(0 , 0, c1.width, c1.height);
	ctx1.save();
	roundedImage(0, 0, c1.width, c1.height, 10);
	ctx1.clip();
	ctx1.fillStyle = "grey";
	ctx1.fillRect(0, 0, c1.width, c1.height);
	ctx1.restore();
	ctx1.save();
	roundedImage((c1.width-40)/3+20, 10, (c1.width-40)/3, (c1.height-40)/3, 10);
	ctx1.clip();
	ctx1.imageSmoothingQuality = "high";
	ctx1.drawImage(image, (c1.width-40)/3+20, 10, (c1.width-40)/3, (c1.height-40)/3);
	ctx1.restore();
	ctx1.save();
	roundedImage((c1.width-40)/3+20, (c1.height-40)/3+20, (c1.width-40)/3, (c1.height-40)/3, 10);
	ctx1.clip();
	ctx1.imageSmoothingQuality = "high";
	ctx1.drawImage(image, (c1.width-40)/3+20, (c1.height-40)/3+20, (c1.width-40)/3, (c1.height-40)/3);
	ctx1.restore();
	ctx1.save();
	roundedImage((c1.width-40)/3+20, (2*(c1.height-40))/3+30, (c1.width-40)/3, (c1.height-40)/3, 10);
	ctx1.clip();
	ctx1.imageSmoothingQuality = "high";
	ctx1.drawImage(image, (c1.width-40)/3+20, (2*(c1.height-40))/3+30, (c1.width-40)/3, (c1.height-40)/3);
	ctx1.restore();
	ctx1.save();
	roundedImage(10, (c1.height-40)/3+20, (c1.width-40)/3, (c1.height-40)/3, 10);
	ctx1.clip();
	ctx1.imageSmoothingQuality = "high";
	ctx1.drawImage(image, 10, (c1.height-40)/3+20, (c1.width-40)/3, (c1.height-40)/3);
	ctx1.restore();
	ctx1.save();
	roundedImage((2*(c1.width-40)/3)+30, (c1.height-40)/3+20, (c1.width-40)/3, (c1.height-40)/3, 10);
	ctx1.clip();
	ctx1.imageSmoothingQuality = "high";
	ctx1.drawImage(image, (2*(c1.width-40)/3)+30, (c1.height-40)/3+20, (c1.width-40)/3, (c1.height-40)/3);
	ctx1.restore();
	document.getElementById("framelist").style.display="none";
	document.getElementById("sace").style.display="block";
});
document.getElementById("framme8").addEventListener("click", function() {
	ctx1.clearRect(0 , 0, c1.width, c1.height);
	ctx1.save();
	roundedImage(0, 0, c1.width, c1.height, 10);
	ctx1.clip();
	ctx1.fillStyle = "grey";
	ctx1.fillRect(0, 0, c1.width, c1.height);
	ctx1.restore();
	ctx1.save();
	roundedImage(10, 10, (c1.width-40)/3, (c1.height-40)/3, 10);
	ctx1.clip();
	ctx1.imageSmoothingQuality = "high";
	ctx1.drawImage(image, 10, 10, (c1.width-40)/3, (c1.height-40)/3);
	ctx1.restore();
	ctx1.save();
	roundedImage((2*(c1.width-40)/3)+30, 10, (c1.width-40)/3, (c1.height-40)/3, 10);
	ctx1.clip();
	ctx1.imageSmoothingQuality = "high";
	ctx1.drawImage(image, (2*(c1.width-40)/3)+30, 10, (c1.width-40)/3, (c1.height-40)/3);
	ctx1.restore();
	ctx1.save();
	roundedImage(10, (2*(c1.height-40)/3)+30, (c1.width-40)/3, (c1.height-40)/3, 10);
	ctx1.clip();
	ctx1.imageSmoothingQuality = "high";
	ctx1.drawImage(image, 10, (2*(c1.height-40)/3)+30, (c1.width-40)/3, (c1.height-40)/3);
	ctx1.restore();
	ctx1.save();
	roundedImage((2*(c1.width-40)/3)+30, (2*(c1.height-40)/3)+30, (c1.width-40)/3, (c1.height-40)/3, 10);
	ctx1.clip();
	ctx1.imageSmoothingQuality = "high";
	ctx1.drawImage(image, (2*(c1.width-40)/3)+30, (2*(c1.height-40)/3)+30, (c1.width-40)/3, (c1.height-40)/3);
	ctx1.restore();
	ctx1.save();
	roundedImage((c1.width-40)/3+20, (c1.height-40)/3+20, (c1.width-40)/3, (c1.height-40)/3, 10);
	ctx1.clip();
	ctx1.imageSmoothingQuality = "high";
	ctx1.drawImage(image, (c1.width-40)/3+20, (c1.height-40)/3+20, (c1.width-40)/3, (c1.height-40)/3);
	ctx1.restore();
	document.getElementById("framelist").style.display="none";
	document.getElementById("sace").style.display="block";
});
document.getElementById("framme9").addEventListener("click", function() {
	ctx1.clearRect(0, 0, c1.width, c1.height);
	ctx1.fillStyle = "grey";
	ctx1.fillRect(0, 0, c1.width, c1.height);
	var k = 10;
	var d = c1.width-20;
    ctx1.save();
	ctx1.beginPath();
	ctx1.moveTo(k, k + d / 4);
	ctx1.quadraticCurveTo(k, k, k + d /4, k);
	ctx1.quadraticCurveTo(k + d / 2, k, k + d / 2, k + d / 4);
	ctx1.quadraticCurveTo(k + d / 2, k, k + d * 3/4, k);
	ctx1.quadraticCurveTo(k + d, k, k + d, k + d / 4);
	ctx1.quadraticCurveTo(k + d, k + d / 2, k + d * 3/4, k + d * 3/4);
	ctx1.lineTo(k + d /2, k + d);
	ctx1.lineTo(k + d / 4, k + d * 3/4);
	ctx1.quadraticCurveTo(k, k + d / 2, k, k + d / 4);
	ctx1.closePath();
	ctx1.clip();
	ctx1.imageSmoothingQuality = "high";
	ctx1.drawImage(image, 0, 0, c1.width, c1.height);
	ctx1.restore();
	document.getElementById("framelist").style.display="none";
	document.getElementById("sace").style.display="block";
});
document.getElementById("framme11").addEventListener("click", function() {
	ctx1.clearRect(0 , 0, c1.width, c1.height);
	ctx1.fillStyle="grey";
	ctx1.fillRect(0, 0, c1.width, c1.height); 
	ctx1.imageSmoothingQuality = "high";
	ctx1.drawImage(image, c1.width/4 , 0, c1.width/2, c1.height);
	document.getElementById("framelist").style.display="none";
	document.getElementById("sace").style.display="block";
});
document.getElementById("framme12").addEventListener("click", function() {
	var iatg = document.querySelector("#valuerotate").value;
	ctx1.clearRect(0 , 0, c1.width, c1.height);
	ctx1.fillStyle="grey";
	ctx1.fillRect(0, 0, c1.width, c1.height);
    ctx1.save();	
	ctx1.translate(c1.width/4, c1.height/2);
    ctx1.rotate(iatg*0.01745);
    ctx1.translate(-c1.width/4, -c1.height/2);
	ctx1.imageSmoothingQuality = "high";
	ctx1.drawImage(image, c1.width/4 , 0, c1.width/2, c1.height);
	ctx1.restore();
	document.getElementById("framelist").style.display="none";
	document.getElementById("rotatingframe").style.display="block";
	document.querySelector("#rotatevalue").value = "";
	document.querySelector("#rotatevalue").value = "vert";
});
document.getElementById("framme13").addEventListener("click", function() {
	ctx1.clearRect(0 , 0, c1.width, c1.height);
	ctx1.fillStyle="grey";
	ctx1.fillRect(0, 0, c1.width, c1.height); 
	ctx1.imageSmoothingQuality = "high";
	ctx1.drawImage(image, 0 , c1.height/4, c1.width, c1.height/2);
	document.getElementById("framelist").style.display="none";
	document.getElementById("sace").style.display="block";
});
document.getElementById("framme14").addEventListener("click", function() {
    var iatg = document.querySelector("#valuerotate").value;
	ctx1.clearRect(0 , 0, c1.width, c1.height);
	ctx1.fillStyle="grey";
	ctx1.fillRect(0, 0, c1.width, c1.height); 
	ctx1.save();
	ctx1.translate(c1.width/2, c1.height/4);
    ctx1.rotate(iatg*0.01745);
    ctx1.translate(-c1.width/2, -c1.height/4);
	ctx1.imageSmoothingQuality = "high";
	ctx1.drawImage(image, 0 , c1.height/4, c1.width, c1.height/2);
	ctx1.restore();
    document.getElementById("framelist").style.display="none";
	document.getElementById("rotatingframe").style.display="block";
	document.querySelector("#rotatevalue").value = "";
	document.querySelector("#rotatevalue").value = "hort";
});
function roundedImage(x, y, width, height, radius) {
  ctx1.beginPath();
  ctx1.moveTo(x + radius, y);
  ctx1.lineTo(x + width - radius, y);
  ctx1.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx1.lineTo(x + width, y + height - radius);
  ctx1.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx1.lineTo(x + radius, y + height);
  ctx1.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx1.lineTo(x, y + radius);
  ctx1.quadraticCurveTo(x, y, x + radius, y);
  ctx1.closePath();
}
}
function letter(cd, ef, gh, msg) { //for text in image
c1.style.display="none";
document.querySelector("#textlist").style.display="none";
document.getElementById("nextbut").style.display="block";
document.getElementById("textcolor").style.display="block";
var cont = document.createElement("div");
cont.id="container"
cont.style="overflow:hidden";
document.getElementById("dashtable").appendChild(cont);
var width = c1.width;
var height = c1.height;
var waarwid = c1.width/2;
var waarheig = c1.height/2;
var stage = new Konva.Stage({       
 container: 'container',    
 width: width,      
 height: height,      
 });
var layer = new Konva.Layer();     
stage.add(layer); 
var darthVaderImg = new Konva.Image({   
   width: width,       
   height: height,      
   });
var darthVaderGroup = new Konva.Group({ 
   x: 0,      
   y: 0,      
   draggable: false,    
   });
layer.add(darthVaderGroup);     
darthVaderGroup.add(darthVaderImg); 
var imageObj1 = new Image();    
   imageObj1.onload = function () {  
   darthVaderImg.image(imageObj1);   
   layer.draw();     
   };      
imageObj1.src = iron.src; 		
var text1 = new Konva.Text({
        x: waarwid,       
		y: waarheig,  
        width: 200, 		
		fontSize: cd, 
        fill: ef,	
        fontStyle: gh,		
		text: msg,       
		draggable: true,      
	});
layer.add(text1);          
var tr1 = new Konva.Transformer({
        nodes: [text1],
        keepRatio: true,
		borderStroke: "black",
		anchorStroke: "red",
		anchorFill: "black",
        enabledAnchors: [
		'top-left',
		'top-right',
		'bottom-left',
		'bottom-right',
        ],     
		});      
layer.add(tr1);      
layer.draw();
stage.on('click tap', function (e) {
  if(e.target === text1) {
	var anomsg = prompt("Enter your text");
    var ab = anomsg.replace(/^\s+|\s+$/gm,'')	
	if(anomsg != null && ab.length != 0) {
	  letter(cd, ef, gh, anomsg);	
	}
	else {
	  letter(cd, ef, gh, msg);	
	}
   }
   });
document.getElementById("textcolor").addEventListener("click", function (e) {
	tr1.nodes([]);
    layer.draw();
	var blob = stage.toDataURL({ pixelRatio: 3 });
	var textimg = new Image()
	textimg.src = blob;
	textimg.onload = function() {
	ctx1.drawImage(textimg, 0, 0, c1.width, c1.height);
	}
	cont.remove();
	c1.style.display="block";
    document.getElementById("nextbut").style.display="none";
	document.getElementById("textcolor").style.display="none";
	document.getElementById("sace").style.display="block";
	});
}
function sticker(maida) { //for sticker image
c1.style.display="none";
document.querySelector("#stickerlist").style.display="none";
document.getElementById("nextbut").style.display="block";
document.getElementById("stickercolor").style.display="block";
var cont = document.createElement("div");
cont.id="container"
cont.style="overflow:hidden";
document.getElementById("dashtable").appendChild(cont);
var width = c1.width; 
var height = c1.height;
var waarwid = c1.width/2;
var waarheig = c1.height/2;  
var stage = new Konva.Stage({       
 container: 'container',    
 width: width,      
 height: height,      
 });
var layer = new Konva.Layer();     
stage.add(layer);  
var darth = new Konva.Image({   
   width: width,       
   height: height,      
   });
var Group = new Konva.Group({ 
   x: 0,      
   y: 0,      
   draggable: false,    
   });
layer.add(Group);     
Group.add(darth); 
var Obj1 = new Image();    
   Obj1.onload = function () {  
   darth.image(Obj1);   
   layer.draw();     
   };      
Obj1.src = iron.src; 		
var darthVaderImg = new Konva.Image({   
   width: 150,       
   height: 100,      
   });
var darthVaderGroup = new Konva.Group({ 
   x: waarwid,      
   y: waarheig,      
   draggable: true,    
   });
layer.add(darthVaderGroup);     
darthVaderGroup.add(darthVaderImg);       
var tr = new Konva.Transformer({
        nodes: [darthVaderGroup],
        keepRatio: true,
		borderStroke: "black",
		anchorStroke: "red",
		anchorFill: "black",
        enabledAnchors: [
		'top-left',
		'top-right',
		'bottom-left',
		'bottom-right',
        ],     
		});  
var imageObj1 = new Image();    
   imageObj1.onload = function () {  
   darthVaderImg.image(imageObj1);   
   layer.draw();     
   };      
imageObj1.src = maida; 		
layer.add(tr);      
layer.draw();
document.getElementById("stickercolor").addEventListener("click", function (e) {
	tr.nodes([]);
    layer.draw();
	var blob = stage.toDataURL({ pixelRatio: 3 });
	var stickimg = new Image()
	stickimg.src = blob;
	stickimg.onload = function() {
	ctx1.drawImage(stickimg, 0, 0, c1.width, c1.height);
	}
	cont.remove();
	c1.style.display="block";
    document.getElementById("nextbut").style.display="none";
	document.getElementById("sace").style.display="block";
	document.getElementById("stickercolor").style.display="none";
	});
}
function woman() { //for text
	document.querySelector(".icon").style.display="none";
	document.querySelector("#textlist").style.display="block";
}
function wonder() { //for text
	var cd = document.getElementById("fontsize").value;
	var ef = document.getElementById("fontcolor").value;
	var gh = document.getElementById("fontstyle").value;
	var msg = prompt("Enter Your text");
    var ab = msg.replace(/^\s+|\s+$/gm,'')
	if(msg != null && ab.length != 0) {
		letter(cd, ef, gh, msg); 
	}
	else {
		alert("empty text");
		wonder();
	}
}
function logout() { //logout from page
   window.location = "index2.html"	
}
function flashlight() { //for sticker
	document.querySelector(".icon").style.display="none";
	document.querySelector("#stickerlist").style.display="block";
}
function knight(e) { //for sticker
	var jamun = parseInt(e);
	var maida = document.getElementById("wheat"+jamun).src;
	sticker(maida);
};
function reloadlogout() { //logout from page
   window.location.reload();
}
function deathstar() {
   if(document.querySelector("#rotatevalue").value === "vert") {
	   var gtai = document.querySelector("#valuerotate").value;
	   if(gtai == 360) {
		document.querySelector("#valuerotate").value = "";
	   document.querySelector("#valuerotate").value = 10;
	   document.querySelector("#framme12").click();
	   }
	   else {
	   document.querySelector("#valuerotate").value = "";
	   document.querySelector("#valuerotate").value = +gtai+10;
	   document.querySelector("#framme12").click();
	   }
   }
   else {
	   var gtai = document.querySelector("#valuerotate").value;
	   if(gtai == 360) {
		document.querySelector("#valuerotate").value = "";
	   document.querySelector("#valuerotate").value = 10;
	   document.querySelector("#framme14").click();
	   }
	   else {
	   document.querySelector("#valuerotate").value = "";
	   document.querySelector("#valuerotate").value = +gtai+10;
	   document.querySelector("#framme14").click(); 
	   }
   }
}	
function stardeath() {
	document.getElementById("rotatingframe").style.display="none";
	document.getElementById("sace").style.display="block";
}
	
	


