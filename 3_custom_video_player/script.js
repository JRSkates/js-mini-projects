const video = document.getElementById('video');
const play = document.getElementById('play');
const stopV = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');


// Play & Pause video
const toggleVideoStatus = () => {
  if(video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

// update the play/pause icon
const updatePlayIcon = () => {
  if(video.paused) {
    play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
  } else {
    play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
  }
}

// update the progress and the timestamp
// Done by dividing the current time of the video by the duration then 
// multiplying by 100 to get the percentage. This percentage is then
// assigned to the progress.value
const updateProgress = () => {
  progress.value = (video.currentTime / video.duration) *
  100;

  // Get the minutes
  let mins = Math.floor(video.currentTime / 60);
  if(mins < 10) {
    mins = '0' + String(mins);
  }

  // Get the seconds
  let secs = Math.floor(video.currentTime % 60);
  if(secs < 10) {
    secs = '0' + String(secs);
  }

  timestamp.innerHTML = `${mins}:${secs}`;
}

// Set video time to current time in video
const setVideoProgress = () => {
  video.currentTime = (+progress.value * video.duration) /
  100;
}

// Stop video
const stopVideo = () => {
  video.currentTime = 0;
  video.pause();
}

// Event Listeners
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);

stopV.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress);