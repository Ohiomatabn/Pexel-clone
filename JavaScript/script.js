import {images} from './images.js'
import './download.js';
import { download } from './download.js';

let imageHTML ='';


images.forEach((image) =>{
  imageHTML += `
    <div class="relative">
        <div class = "overlay"></div>
        <img src="${image.src}" alt="IMG">
        <div class="download">
          <button class="js-download-button" id="button1" data-image-id =${image.id}><img src="IMG/download.svg" class="download-icon">Download</button>
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
  console.log(image.id);
});
document.getElementById('js-images').innerHTML = imageHTML;

document.querySelector('.js-bars').addEventListener('click', ()=>{
  document.querySelector('.js-explore').setAttribute('style', 'margin: 0;');
});

document.querySelector('.js-times').addEventListener('click', () =>{
  document.querySelector('.js-explore').setAttribute('style', 'margin: -200px');
});

document.querySelectorAll('.js-download-button').forEach((button) =>{
  button.addEventListener('click', () =>{
    const imageId = button.dataset.imageId;
    let matchingImage;
    
    images.forEach(image =>{
      if(imageId === image.id){
        matchingImage = image;
        download(matchingImage);
      }
    })
  });
});