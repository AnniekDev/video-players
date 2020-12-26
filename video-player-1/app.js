const video = document.querySelector('#video');
const play = document.querySelector('#play');
const stop = document.querySelector('#stop');
const progress = document.querySelector('#progress');
const timestamp = document.querySelector('#timestamp');


//play and pause video
function toggleVideoStopPlay(){
    //paused is property html5 videotag for api
     if(video.paused){
        video.play();
     }else{
         video.pause();
     }
     }

//update icon
function updatePlayIcon(){
   if(video.paused){
       play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
   }else{
    play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
   }
}

//update progress & timestamp
function updateProgress(){
    progress.value = (video.currentTime / video.duration) * 100;

    // format timestamp
    //minutes
    let mins = Math.floor(video.currentTime/60);
    if(mins < 10){
       mins = '0' + String(mins);
    }
    //secs
    let secs = Math.floor(video.currentTime % 60);
    if(secs < 10){
       secs = '0' + String(secs);
    }

    timestamp.innerHTML = `${mins}:${secs}`;
}
//set video to timestamp
function setVideoProgress(){
    video.currentTime = (+progress.value * video.duration) / 100;
}

//stop video
function stopVideo(){
    // there is no stop property
    video.currentTime = 0;
    video.pause();
}
//event listeners

video.addEventListener('click', toggleVideoStopPlay);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStopPlay);

stop.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress);