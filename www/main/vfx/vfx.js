var input = document.getElementById("hydra");
var c1 = document.getElementById("virtual");
var ctx1 = c1.getContext("2d");
var c2 = document.getElementById("fox");
var ctx2 = c2.getContext("2d");
var back = document.getElementById("backhydra");
function my(a, b) { // instruction for vfx working for users
  var confirmBox = $("#confirm");
   confirmBox.find(".message").text(a);
   confirmBox.find(".yes").unbind().click(function() {
     confirmBox.hide();
	 document.getElementById("imgvfx").style.display="block";
   });
   confirmBox.find(".yes").load(b);
   confirmBox.show();
   }
function upload() { // label for input image
	input.click();
}
function backupload() { // label for input background image
	back.click();
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
	ctx1.imageSmoothingQuality = "high";
	ctx1.drawImage(kastam, 0, 0, 320, 240);
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
	document.getElementById("inpvfx").style.display="none";
	document.getElementById("backvfx").style.display="block";
	}
    else {
      alert("unsupported format")
	  documen.getElementById("hydra").value="";
	}
}
back.onchange = function() { // input onchange event for background image
	if(document.getElementById("backhydra").value.endsWith(".jpg") || document.getElementById("backhydra").value.endsWith(".png") || document.getElementById("backhydra").value.endsWith(".jpeg")) {
    var poke = back.files[0];
	var pokeurl = URL.createObjectURL(poke);
	var pokeimage = new Image();
	pokeimage.onload = function () {
	  ctx2.drawImage(pokeimage, 0, 0, 320, 240)
      var blob = c2.toDataURL();
      var tom = new Image();
      tom.src = blob;
      tom.onload = function() {
          c2.style.backgroundImage="url("+tom.src+")";
	      document.getElementById("backvfx").style.display="none";
          document.getElementById("workvfx").style.display="block";
		  imagevfx();
	  }
	}
	pokeimage.src = pokeurl;
	}
	else {
		alert("unsupported format");
	    documen.getElementById("backhydra").value=""
	}
}
function imagevfx() { // create vfx effect
     let frame = ctx1.getImageData(0, 0, c1.width, c1.height);
     let l = frame.data.length / 4;
  
     for (let i = 0; i < l; i++) {
       let r = frame.data[i * 4 + 0];
       let g = frame.data[i * 4 + 1];
       let b = frame.data[i * 4 + 2];
       if (g > 100 && r > 100 && b < 43)
          frame.data[i * 4 + 3] = 0;
       }
	   ctx2.putImageData(frame, 0, 0);
}
function download() { // download an edited image
    html2canvas(c2, {
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
	})
};
function logout() { // back to main page
	window.location = "index2.html";
}
function reloadlogout() { //logout from page
   window.location.reload();
}
function brem() {
	window.location = "brem.html";
}