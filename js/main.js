let frames ;
let currentFrame = 0;
let idInterval;
let currentElement;
(function DOMBuild() {
 let previewContainer = document.getElementById('preview-container');
 for (let i = 0; i < 71; i++) {
  const link = `https://3d0.elmir.ua/models/17706/17706955/${i}_1.jpg`;
  const img = `<img class="frame" src="${link}" alt="">`;
  previewContainer.insertAdjacentHTML('beforeend', img);
 }
frames = document.querySelectorAll('.frame');
frames[0].classList.add('current');
}());

function rotate(derection = 1) {
  currentFrame += derection;
  if(currentFrame >= 70) {
    currentFrame = 0;
  }
  currentElement = document.querySelector('.current');
  currentElement.classList.remove('current');
  frames[currentFrame].classList.add('current');
  console.log(currentFrame);
}

setInterval(rotate, 100);
