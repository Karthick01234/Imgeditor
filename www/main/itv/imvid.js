const pika = document.createElement('a');
var vid = document.getElementById("ae");
function CanvasRecorder(canvas, video_bits_per_sec) { // recording a stream generalized function
    this.start = startRecording;
    this.stop = stopRecording;
    this.save = download;

    var recordedBlobs = []; //array for push record blob
    var supportedType = null;
    var mediaRecorder = null;
	vid.play();  // play audio 
    let audioelement = vid;
	let fig = new AudioContext();
	let ure = fig.createMediaStreamDestination();
	let Node = fig.createMediaElementSource(audioelement);  //embed audio into canvas stream
	Node.connect(ure);
	Node.connect(fig.destination);
	let audiotrack = ure.stream.getAudioTracks()[0];
    var stream = canvas.captureStream();
	stream.addTrack(audiotrack);
    if (typeof stream == undefined || !stream) {
        return;
    }

    const video = document.createElement('video');
    video.style.display = 'none';

    function startRecording() { //start record
        let types = [
            "video/webm",
            'video/webm,codecs=vp9',
            'video/vp8',
            "video/webm\;codecs=vp8",
            "video/webm\;codecs=daala",
            "video/webm\;codecs=h264",
            "video/mpeg"
        ];

        for (let i in types) {
            if (MediaRecorder.isTypeSupported(types[i])) {
                supportedType = types[i];
                break;
            }
        }
        if (supportedType == null) {
            console.log("No supported type found for MediaRecorder");
        }
        let options = { 
            mimeType: supportedType,
            videoBitsPerSecond: video_bits_per_sec || 2500000
        };

        recordedBlobs = [];
        try {
            mediaRecorder = new MediaRecorder(stream, options);
        } catch (e) {
            alert('MediaRecorder is not supported by this browser.');
            console.error('Exception while creating MediaRecorder:', e);
            return;
        }

        console.log('Created MediaRecorder', mediaRecorder, 'with options', options);
        mediaRecorder.onstop = handleStop;
        mediaRecorder.ondataavailable = handleDataAvailable;
        mediaRecorder.start(100);
        console.log('MediaRecorder started', mediaRecorder);
    }

    function handleDataAvailable(event) { //event associate with stop record
        if (event.data && event.data.size > 0) {
            recordedBlobs.push(event.data);
        }
    }

    function handleStop(event) { //event associate with stop record
        console.log('Recorder stopped: ', event);
        const superBuffer = new Blob(recordedBlobs, { type: supportedType });
        video.src = window.URL.createObjectURL(superBuffer);
    }

    function stopRecording() { //stop record
        mediaRecorder.stop();
        console.log('Recorded Blobs: ', recordedBlobs);
        video.controls = true;
    }

    function download(file_name) { //save record in a tag for download and video tag for playing
        const name = file_name || 'recording.webm';
        const blob = new Blob(recordedBlobs, { type: supportedType });
        const url = window.URL.createObjectURL(blob);
        pika.style.display = 'none';
        pika.href = url;
        pika.download = name;
        document.body.appendChild(pika);
		document.getElementById("kart").src = url;
		document.getElementById("kart").style.display="block";
		vid.pause();
		document.getElementById("dove").addEventListener('click', function() {
		var feelmylove = new Date();
		var timings = feelmylove.getTime();
	    var folderpath = "file:///storage/emulated/0/";
	    var filename = timings+".webm";
		window.resolveLocalFileSystemURL(folderpath, function(dir) {
           console.log("Access to the directory granted succesfully");
		   dir.getFile(filename, {create:true}, function(file) {
               console.log("File created succesfully.");
               file.createWriter(function(fileWriter) {
                   console.log("Writing content to file");
                   fileWriter.write(blob);
				   alert("download success");
                }, function(){
                    alert('Unable to save file in path '+ folderpath);
                });
		    });
        });
		});
    }
}
var input = document.getElementById("hydra");
var i = 0;
var canvas = document.getElementById("itvstart")
var ctx1 = canvas.getContext("2d");
var out = document.getElementById("out");
var z = 32;
var j = 32;
var p = 0;
var q = 0;
var e = 32;
var f = 32;
var s = 0;
var d = 0;
function logout() { //logout from page
   window.location = "index2.html"	
}
function upload() { // label for input image
	input.click();
}
input.onchange = function() { // input on change event
    var a = parseInt(document.getElementById("maz").value)
	var rummy = a+1;
	var mk = input.files[0];
	var url = URL.createObjectURL(mk);
	var hulkingimg = new Image();
    hulkingimg.src = url;
    hulkingimg.id = "a"+rummy;
    hulkingimg.style.width="100px";
    hulkingimg.style.height="100px";
    hulkingimg.style.padding="5px";
    document.getElementById("para").appendChild(hulkingimg);
	document.getElementById("maz").value="";
	document.getElementById("maz").value=rummy;
	document.getElementById("netoimg").style.display="block";
}
function post() { // related to input onchange event
   if(document.getElementById("maz").value > 5) {
	  if(document.getElementById("maz").value <= 16) {
		  document.getElementById("inpimg").style.display="none";
		  document.getElementById("itvdash").style.display="block";
		  document.getElementById("para").style.display="none";
		  var k1 = document.getElementById("a0");
		  ctx1.drawImage(k1, 0, 0, 320, 240);
	  }
	  else {
		  alert("upload limit is fifteen");
		  window.location.reload();
	  }
   }
   else {
		  alert("upload more than four images");
	  }
}
document.getElementById("rules").onchange = function() { //select tag for style onchange event
	document.getElementById("rit").value=document.getElementById("rules").value;
}	
document.getElementById("special").onchange = function() { //select tag for special effect onchange event
if(document.getElementById("special").value == "invert" || document.getElementById("special").value == "grayscale" || document.getElementById("special").value == "sepia") {
	document.getElementById("bright").min = 5;
	document.getElementById("bright").value = 5;
	document.getElementById("bright").step = 5;
	document.getElementById("bright").max = 100;
	if(document.getElementById("rit").value != "") {
	document.getElementById("special").style.display="none";
    document.getElementById("rules").style.display="none";	
	document.getElementById("bright").style.display="block";   
	document.getElementById("paramac").innerHTML = "Apply range for your special effect :";
	document.getElementById("color").style.display="block";
	}
	else {
		alert("select style to create video");
		document.getElementById("special").value = "select";
	}
}
else if(document.getElementById("special").value == "blur") {
	document.getElementById("bright").min = 0.1;
	document.getElementById("bright").value = 0.1;
	document.getElementById("bright").step = 0.1;
	document.getElementById("bright").max = 4;
	if(document.getElementById("rit").value != "") {
	document.getElementById("special").style.display="none";
    document.getElementById("rules").style.display="none";	
	document.getElementById("bright").style.display="block";   
	document.getElementById("paramac").innerHTML = "Apply range for your special effect :";
	document.getElementById("color").style.display="block";
	}
	else {
		alert("select style to create video");
		document.getElementById("special").value = "select";
	}
}
else if(document.getElementById("special").value == "hue-rotate") {
	document.getElementById("bright").min = 0;
	document.getElementById("bright").value = 0;
	document.getElementById("bright").step = 5;
	document.getElementById("bright").max = 360;
	if(document.getElementById("rit").value != "") {
	document.getElementById("special").style.display="none";
    document.getElementById("rules").style.display="none";	
	document.getElementById("bright").style.display="block";   
	document.getElementById("paramac").innerHTML = "Apply range for your special effect :";
	document.getElementById("color").style.display="block";
	}
	else {
		alert("select style to create video");
		document.getElementById("special").value = "select";
	}
}
else if(document.getElementById("special").value == "saturate") {
    document.getElementById("bright").min = 0;
	document.getElementById("bright").value = 0;
	document.getElementById("bright").step = 10;
	document.getElementById("bright").max = 200;	
	if(document.getElementById("rit").value != "") {
	document.getElementById("special").style.display="none";
    document.getElementById("rules").style.display="none";	
	document.getElementById("bright").style.display="block";   
	document.getElementById("paramac").innerHTML = "Apply range for your special effect :";
	document.getElementById("color").style.display="block";
	}
	else {
		alert("select style to create video");
		document.getElementById("special").value = "select";
	}
}
else if(document.getElementById("special").value == "opacity") {
	document.getElementById("bright").min = 0;
	document.getElementById("bright").value = 100;
	document.getElementById("bright").step = 1;
	document.getElementById("bright").max = 100;
	if(document.getElementById("rit").value != "") {
	document.getElementById("special").style.display="none";
    document.getElementById("rules").style.display="none";	
	document.getElementById("bright").style.display="block";   
	document.getElementById("paramac").innerHTML = "Apply range for your special effect :";
	document.getElementById("color").style.display="block";
	}
	else {
		alert("select style to create video");
		document.getElementById("special").value = "select";
	}
}
else if(document.getElementById("special").value == "brightness") { 
    document.getElementById("bright").min = 0;
	document.getElementById("bright").value = 0;
	document.getElementById("bright").step = 5;
	document.getElementById("bright").max = 300;
	if(document.getElementById("rit").value != "") {
	document.getElementById("special").style.display="none";
    document.getElementById("rules").style.display="none";	
	document.getElementById("bright").style.display="block";   
	document.getElementById("paramac").innerHTML = "Apply range for your special effect :";
	document.getElementById("color").style.display="block";
	}
	else {
		alert("select style to create video");
		document.getElementById("special").value = "select";
	}
}
else if(document.getElementById("special").value == "contrast") {
	document.getElementById("bright").min = 20;
	document.getElementById("bright").value = 20;
	document.getElementById("bright").step = 5;
	document.getElementById("bright").max = 3000;
	if(document.getElementById("rit").value != "") {
	document.getElementById("special").style.display="none";
    document.getElementById("rules").style.display="none";	
	document.getElementById("bright").style.display="block";   
	document.getElementById("paramac").innerHTML = "Apply range for your special effect :";
	document.getElementById("color").style.display="block";
	}
	else {
		alert("select style to create video");
		document.getElementById("special").value = "select";
	}
}
else {
	 if(document.getElementById("rit").value != "") {
	document.getElementById("special").style.display="none";
    document.getElementById("rules").style.display="none";	
	document.getElementById("color").style.display="block";
	}
	else {
		alert("select style to create video");
		document.getElementById("special").value = "select";
	}
}
}	
function bigil() { //show next page for audio input
 if(document.getElementById("special").value == "invert" || document.getElementById("special").value == "grayscale" || document.getElementById("special").value == "sepia") {
	document.getElementById("gama").value=document.getElementById("special").value+"("+document.getElementById("bright").value+"%)";
	document.getElementById("style").style.display="none";
	document.getElementById("audio").style.display="block";
 }
 else if(document.getElementById("special").value == "blur") {
	document.getElementById("gama").value=document.getElementById("special").value+"("+document.getElementById("bright").value+"px)";
	document.getElementById("style").style.display="none";
	document.getElementById("audio").style.display="block";
 }
 else if(document.getElementById("special").value == "opacity") {
	document.getElementById("gama").value=document.getElementById("special").value+"("+document.getElementById("bright").value+"%)";
	document.getElementById("style").style.display="none";
	document.getElementById("audio").style.display="block";
 }
 else if(document.getElementById("special").value == "saturate") {
	document.getElementById("gama").value=document.getElementById("special").value+"("+document.getElementById("bright").value+"%)";
	document.getElementById("style").style.display="none";
	document.getElementById("audio").style.display="block";
 }
 else if(document.getElementById("special").value == "hue-rotate") {
	document.getElementById("gama").value=document.getElementById("special").value+"("+document.getElementById("bright").value+"deg)";
	document.getElementById("style").style.display="none";
	document.getElementById("audio").style.display="block";
 }
 else if(document.getElementById("special").value == "brightness") { 
    document.getElementById("gama").value=document.getElementById("special").value+"("+document.getElementById("bright").value+"%)";
	document.getElementById("style").style.display="none";
	document.getElementById("audio").style.display="block";
}
else if(document.getElementById("special").value == "contrast") {
	document.getElementById("gama").value=document.getElementById("special").value+"("+document.getElementById("bright").value+"%)";
	document.getElementById("style").style.display="none";
	document.getElementById("audio").style.display="block";
}
 else {
	document.getElementById("gama").value="none";
	document.getElementById("style").style.display="none";
	document.getElementById("audio").style.display="block";
 }
}	
function mass() { //audio input click event
	document.getElementById("kck").click();
}
document.getElementById("kck").onchange = function() { //audio input onchange event 
	var url = URL.createObjectURL(document.getElementById("kck").files[0]);
	vid.src = url;
	vid.load();
	vid.onloadeddata = function() {
	 document.getElementById("duck").style.display="none";
	 document.getElementById("bulpu").style.display="block";
	 document.getElementById("graph").innerHTML = "play the audio and set starting time using slider :";
	 document.getElementById("rag").min=0;
     document.getElementById("rag").max=vid.duration;
     document.getElementById("rag").step=1;
     document.getElementById("rag").value=0;
	 if(confirm("you want to cut audio file")) {
	  alert("pause the audio to fix time");
	 }
	 else {
      document.getElementById("graph").innerHTML = "click start button for star converting";
	  document.getElementById("bulpu").style.display="none";
	  document.getElementById("pizza").style.display="block";
	  vid.removeEventListener("pause", function () { //remove event for audio pass
	})
	}
}
}
document.getElementById("rag").oninput = function () { // range input event
    vid.currentTime = document.getElementById("rag").value;
	};
vid.addEventListener("pause", function () { //audio pause event
	document.getElementById("graph").innerHTML = "click start button for star converting";
	document.getElementById("bulpu").style.display="none";
	document.getElementById("pizza").style.display="block";
	vid.removeEventListener("pause", function () { //after pause remove event
	})
});
function govindha() { //start creation of video
 if(document.getElementById("rit").value == "zoom") { // zoom style
 ctx1.clearRect(0, 0, 320, 240);
 canvas.width = 320;
 canvas.height = 320;
 var c1 = canvas;
 var get = document.getElementById("maz").value;
 click();
 document.getElementById("audio").style.display="none";
 var recorder = new CanvasRecorder(c1, 7500000);
 setTimeout(function() {
    recorder.start();
 }, 1000);
 function click() {
    if (get >= 1) {
	if(out.value == 0) {
	var k1 = document.getElementById("a"+get);
	ctx1.clearRect(0, 0, c1.width, c1.height);
	ctx1.filter = document.getElementById("gama").value;
	ctx1.imageSmoothingQuality = "high";
	ctx1.drawImage(k1, 0, 0, c1.width, c1.height);
	setTimeout(function () {
    conv(get);
	get--
	}, 4000);
	}
	else if(out.value == 1) {
	var x = s * 10;
	var y = d * 10;
	var v = e * 5;
	var w = f * 5;
	var k1 = document.getElementById("a"+get);
	ctx1.clearRect(0, 0, c1.width, c1.height);
	ctx1.filter = document.getElementById("gama").value;
	ctx1.imageSmoothingQuality = "high";
	ctx1.drawImage(k1, v, w, x, y);
	setTimeout(function () {
    hii(get);
	get--
	}, 50);
	}
    }
    else { //finish the editing
    var k1 = document.getElementById("a"+get);
	ctx1.clearRect(0, 0, c1.width, c1.height);
	ctx1.filter = document.getElementById("gama").value;
	ctx1.imageSmoothingQuality = "high";
	ctx1.drawImage(k1, 0, 0, c1.width, c1.height);
   	setTimeout(function () {
	recorder.stop();
	canvas.style.display="none";
	document.getElementById("dove").style.display="block";
	var d = new Date();
	recorder.save(d+'.webm');
	}, 3000);
    }	
function conv(met) {
	if(z >= 0) {
	if(z === 6 && j === 6) {
	out.value = "";
	out.value = 1;
	z += 26;
	j += 26;
	p -= 26;
	q -= 26;
	click();
	}
	else {
	var got = met;
	var x = z * 10;
	var y = j * 10;
	var v = p * 5;
	var w = q * 5;
	var k1 = document.getElementById("a"+got);
	ctx1.clearRect(0, 0, c1.width, c1.height);
	ctx1.filter = document.getElementById("gama").value;
	ctx1.imageSmoothingQuality = "high";
	ctx1.drawImage(k1, v, w, x, y);
	z--
	j--
	p++
	q++
	setTimeout(function () {
	conv(met);
	}, 50);
	}
	}
	};
function hii(met) {
	if(s >= 0) {
	if(s === 32 && d == 32) {
	out.value = "";
	out.value = 0;
	e += 26;
	f += 26;
	d -= 26;
	s -= 26;
	setTimeout(function () {
	click();
	}, 3000)
	}
	else {
	var got = met;
	var x = s * 10;
	var y = d * 10;
	var v = e * 5;
	var w = f * 5;
	var k1 = document.getElementById("a"+got);
	ctx1.clearRect(0, 0, c1.width, c1.height);
	ctx1.filter = document.getElementById("gama").value;
	ctx1.imageSmoothingQuality = "high";
	ctx1.drawImage(k1, v, w, x, y);
	s++
	d++
	e--
	f--
	setTimeout(function () {
	hii(met);
	},50);
	}
	}
	};
	};
 }
 else if(document.getElementById("rit").value == "slide") { // slide style
 ctx1.clearRect(0, 0, 320, 240);
 canvas.width = 320;
 canvas.height = 320;
 var c1 = canvas;
 var get = document.getElementById("maz").value;
 click();
 document.getElementById("audio").style.display="none";
 var recorder = new CanvasRecorder(c1, 7500000);
 setTimeout(function() {
    recorder.start();
 }, 1000);
 function click() {
    if (get >= 1) {
	if(out.value == 0) {
	var k1 = document.getElementById("a"+get);
	ctx1.clearRect(0, 0, c1.width, c1.height);
	ctx1.filter = document.getElementById("gama").value;
	ctx1.imageSmoothingQuality = "high";
	ctx1.drawImage(k1, 0, 0, c1.width, c1.height);
    setTimeout(function () {
        conv(get);
		get--
	}, 4000);
	}
    else if(out.value == 1) {
	var k1 = document.getElementById("a"+get);
	ctx1.clearRect(0, 0, c1.width, c1.height);
	ctx1.filter = document.getElementById("gama").value;
	ctx1.imageSmoothingQuality = "high";
	ctx1.drawImage(k1, 0, 0, c1.width, c1.height);
    setTimeout(function () {
        ninja(get);
		get--
	}, 3000);
	}	
    }
    else { //finish the editing
	var k1 = document.getElementById("a"+get);
	ctx1.clearRect(0, 0, c1.width, c1.height);
	ctx1.filter = document.getElementById("gama").value;
	ctx1.imageSmoothingQuality = "high";
	ctx1.drawImage(k1, 0, 0, c1.width, c1.height);
   	setTimeout(function () {
	recorder.stop();
	canvas.style.display="none";
	document.getElementById("dove").style.display="block";
	var d = new Date();
	recorder.save(d+'.webm');
	}, 3000);
    }	
function conv(get) {
	if(z >= 0) {
	if(z === 0) {
	z += 32;
	out.value = "";
	out.value = 1;
	click();
	}
	else {
	var got = get;
	var x = z * 10;
	var k1 = document.getElementById("a"+got);
	ctx1.clearRect(0, 0, c1.width, c1.height);
	ctx1.filter = document.getElementById("gama").value;
	ctx1.imageSmoothingQuality = "high";
	ctx1.drawImage(k1, 0, 0, x, c1.height);
	z--
	setTimeout(function () {
	conv(get);
	}, 50);
	}
	}
	}
function ninja(get) {
	if(z >= 0) {
	if(z === 0) {
	out.value = "";
	out.value = 0;
	z += 32;
	click();
	}
	else {
	var got = get;
	var x = z * 10;
	var k1 = document.getElementById("a"+got);
	ctx1.clearRect(0, 0, c1.width, c1.height);
	ctx1.filter = document.getElementById("gama").value;
	ctx1.imageSmoothingQuality = "high";
	ctx1.drawImage(k1, 0, 0, c1.width, x);
	z--
	setTimeout(function () {
	ninja(get);
	}, 50);
	}
	}
	};
	}
 }
 else if(document.getElementById("rit").value == "normal") { //normal style
 ctx1.clearRect(0, 0, 320, 240);
 canvas.width = 320;
 canvas.height = 240;
 var c1 = canvas;
 var get = document.getElementById("maz").value;
 click();
 document.getElementById("audio").style.display="none";
 var recorder = new CanvasRecorder(c1, 7500000);
 setTimeout(function() {
    recorder.start();
 }, 1000);
 function click() {
    if (get >= 1) {
	var k1 = document.getElementById("a"+get);
	ctx1.clearRect(0, 0, c1.width, c1.height);
	ctx1.filter = document.getElementById("gama").value;
	ctx1.imageSmoothingQuality = "high";
	ctx1.drawImage(k1, 0, 0, c1.width, c1.height);
	setTimeout(function () {
    click();
	get--
	}, 4000);
	}
    else { //finish the editing
    var k1 = document.getElementById("a"+get);
	ctx1.clearRect(0, 0, c1.width, c1.height);
	ctx1.filter = document.getElementById("gama").value;
	ctx1.imageSmoothingQuality = "high";
	ctx1.drawImage(k1, 0, 0, c1.width, c1.height);
   	setTimeout(function () {
	recorder.stop();
	canvas.style.display="none";
	document.getElementById("dove").style.display="block";
	var d = new Date();
	recorder.save(d+'.webm');
	}, 3000);
    }
 }
 }
 else { //flip style
 ctx1.clearRect(0, 0, 320, 240);
 canvas.width = 320;
 canvas.height = 320;
 var c1 = canvas;
 var get = document.getElementById("maz").value;
 click();
 document.getElementById("audio").style.display="none";
 var recorder = new CanvasRecorder(c1, 7500000);
 setTimeout(function() {
    recorder.start();
 }, 1000);
 function click() {
    if (get >= 1) {
	if(out.value == 0) {
	var k1 = document.getElementById("a"+get);
	ctx1.clearRect(0, 0, c1.width, c1.height);
	ctx1.filter = document.getElementById("gama").value;
	ctx1.imageSmoothingQuality = "high";
	ctx1.drawImage(k1, 0, 0, c1.width, c1.height);
    setTimeout(function () {
        conv(get);
		get--
	}, 4000);
	}
    else if(out.value == 1) {
	var k1 = document.getElementById("a"+get);
	ctx1.clearRect(0, 0, c1.width, c1.height);
	ctx1.filter = document.getElementById("gama").value;
	ctx1.imageSmoothingQuality = "high";
	ctx1.drawImage(k1, 0, 0, c1.width, c1.height);
    setTimeout(function () {
        hii(get);
		get--
	}, 3000);
	}	
    }
    else { //finish the editing
	var k1 = document.getElementById("a"+get);
	ctx1.clearRect(0, 0, c1.width, c1.height);
	ctx1.filter = document.getElementById("gama").value;
	ctx1.imageSmoothingQuality = "high";
	ctx1.drawImage(k1, 0, 0, c1.width, c1.height);
   	setTimeout(function () {
	recorder.stop();
	canvas.style.display="none";
	document.getElementById("dove").style.display="block";
	var d = new Date();
	recorder.save(d+'.webm');
	}, 3000);
    }	
function conv(get) {
	if(z >= 0) {
	if(z === 6 && j === 6) {
	z += 26;
	j += 26;
	out.value = "";
	out.value = 1;
	click();
	}
	else {
	var got = get;
	var x = z * 10;
	var y = j * 10;
	var k1 = document.getElementById("a"+got);
	ctx1.clearRect(0, 0, c1.width, c1.height);
	ctx1.filter = document.getElementById("gama").value;
	ctx1.imageSmoothingQuality = "high";
	ctx1.drawImage(k1, 0, 0, x, y);
	z--
	j--
	setTimeout(function () {
	conv(get);
	}, 50);
	}
	}
	}
 function hii(get) {
	if(z >= 0) {
	if(z === 6 && p === 26) {
	out.value = "";
	out.value = 0;
	z += 26;
	p -= 26
	click();
	}
	else {
	var got = get;
	var x = z * 10;
	var y = p * 10;
	var k1 = document.getElementById("a"+got);
	ctx1.clearRect(0, 0, c1.width, c1.height);
	ctx1.filter = document.getElementById("gama").value;
	ctx1.imageSmoothingQuality = "high";
	ctx1.drawImage(k1, y, 0, c1.width, x);
	z--
	p++
	setTimeout(function () {
	hii(get);
	}, 50);
	}
	}
	};
	}
 }
};
function reloadlogout() { //logout from page
   window.location.reload();
}