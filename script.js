(function() {

var video = document.querySelector('#video');

video.addEventListener('timeupdate', function(event) {
  if (event.target.currentTime > 28) {
    event.target.currentTime = 0;
  }
});

})();
