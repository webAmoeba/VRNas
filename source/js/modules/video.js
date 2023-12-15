const videoWrapper = document.getElementById('video-wrapper');
const video = document.getElementById('video');
const btn = document.getElementById('play-video');


function playVideo() {
  if (video && btn) {
    btn.addEventListener('click', () => {
      video.play();
      videoWrapper.classList.add('video--played');
    });
  }
}

export {playVideo};
