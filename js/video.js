var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.querySelector('#player1');
	video.autoplay = false;
	video.loop = false;
	console.log("Auto play is set to " + video.autoplay);
	console.log("Loop is set to " + video.loop);
});

document.querySelector('#play').addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	video.volume = document.querySelector('#slider').value / 100;
	document.querySelector('#volume').innerHTML = 100*video.volume + "%";
	
})

document.querySelector('#pause').addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
})

document.querySelector('#slower').addEventListener("click", function() {
	console.log("Slow down Video");
	video.playbackRate *= 0.9;
	console.log("Speed is " + video.playbackRate)
})

document.querySelector('#faster').addEventListener("click", function() {
	console.log("Speed up Video");
	video.playbackRate *= 1 / 0.9;
	console.log("Speed is " + video.playbackRate)
})


document.querySelector('#skip').addEventListener("click", function() {
	if (video.currentTime + 10 > video.duration) {
		video.currentTime = 0;
	}
	else video.currentTime += 10;
	console.log("Video current time is " + video.currentTime);
})

document.querySelector('#mute').addEventListener("click", function() {
	if (video.muted) {
		console.log("Unmute");
		document.querySelector('#mute').innerHTML = "Mute";
		video.muted = false;
	}
	else {
		console.log("Mute");
		document.querySelector('#mute').innerHTML = "Unmute";
		video.muted = true;
	}
})

document.querySelector('#slider').addEventListener("input", function() {
	video.volume = document.querySelector('#slider').value / 100;
	document.querySelector('#volume').innerHTML = 100*video.volume + "%";
	console.log("The current value is " + video.volume);
})

document.querySelector('#vintage').addEventListener("click", function() {
	video.classList.add('oldSchool');
})

document.querySelector('#orig').addEventListener("click", function() {
	video.classList.remove('oldSchool');
})
