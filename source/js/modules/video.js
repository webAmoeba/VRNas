const videoWrapper = document.getElementById('video-wrapper');
const video = document.getElementById('video');
const btn = document.getElementById('play-video');


function playVideo() {
  if (video && btn) {
    btn.addEventListener('click', () => {
      video.play();
      videoWrapper.classList.add('video--played');
      videoWrapper.classList.remove('video--ended');
    });

    video.addEventListener('ended', () => {
      videoWrapper.classList.remove('video--played');
      videoWrapper.classList.add('video--ended');
    });

    video.addEventListener('click', () => {
      if (video.paused) {
        video.play();
        videoWrapper.classList.add('video--played');
        videoWrapper.classList.remove('video--ended');
      } else {
        video.pause();
      }
    });


  }
}

export {playVideo};
