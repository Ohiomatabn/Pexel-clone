import {images} from './images.js'

let imageHTML ='';

images.forEach((image) =>{
  imageHTML += `
    <div class="relative">
      <img src="${image.src}" alt="IMG" loading="lazy">
      <div class="download">
        <a href= "${image.src}" download="download">Download</a>
      </div>
      <div class="likes">
        <span>${image.likes}</span>
      </div>
    </div> 
  `
});
document.getElementById('js-images').innerHTML = imageHTML;