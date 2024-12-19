import '../scss/styles.scss'
import 'bootstrap';

window.addEventListener('load', function() {
  const video = document.getElementById('backgroundVideo');
  const image = document.getElementById('backgroundImage');

  function checkVideoPlayback() {
    if (window.innerWidth < 768) {
      video.style.display = 'none';
      image.style.display = 'block';
    } else {
      video.style.display = 'block';
      image.style.display = 'none';
    }
  }

  checkVideoPlayback();

  window.addEventListener('resize', checkVideoPlayback);
});