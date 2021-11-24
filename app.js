var front = document.querySelector(".front");
var container = document.querySelector(".container");
var video = document.querySelector(".back video");


container.addEventListener('click', function(){
  container.classList.add("anim");
  video.play();
});
