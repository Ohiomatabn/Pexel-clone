import {images} from './images.js'

let imageHTML ='';

images.forEach((image) =>{
  imageHTML += `
    <div class="relative">
        <div class = "overlay"></div>
        <img src="${image.src}" alt="IMG" loading="lazy">
        <div class="download">
          <button class="js-download-button"><img src="IMG/download.svg" class="download-icon">Download</button>
        </div>
        <div class="pexel-profile">
          <img src="IMG/ohiomata2.jpg" class="profile-img">
          <p>Pixabay</p>
        </div>
        <div class="absolute icon-flex">
          <p class="img-container margin"><img src="IMG/copy.svg"></p>
          <p class="img-container"><img src="IMG/heart.svg"></p>
        </div>
    </div> 
  `
});
document.getElementById('js-images').innerHTML = imageHTML;

document.querySelector('.js-bars').addEventListener('click', ()=>{
  document.querySelector('.js-explore').setAttribute('style', 'margin: 0;');
});

document.querySelector('.js-times').addEventListener('click', () =>{
  document.querySelector('.js-explore').setAttribute('style', 'margin: -200px');
});

document.querySelector('.js-download-button').addEventListener('click', () =>{
  document.querySelector('.js-download-cover').setAttribute('style', 'display: block;');
});

document.querySelector('.js-hide').addEventListener('click', () =>{
  document.querySelector('.js-download-cover').setAttribute('style', 'display: none;');
});