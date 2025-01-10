import { images } from "./images.js";

export function download(imageSrc){
  document.querySelector('.js-download-cover').innerHTML =   `  
  <div class="download-bg-gray js-download-image">

  <i class="fa-times fa-2x js-hide"></i>
  <div class="download-bg-white">
    <div class="container">
      <div class="download-navbar">
        <div class="download-navbar-container">
          <div class="profile">
            <img src="IMG/ohiomata2.jpg" class="user-profile" alt="">
            <div class="profile-details">
              <h3 class="profile-name">Jess Loiterton</h3>
              <p>Follow &#x2022;  Donate</p>
            </div>
          </div>
          <div class="image-action">
            <button><img src="IMG/copy.svg"> <span>Collect</span></button>
            <button><img src="IMG/heart.svg"> <span>Like</span> 377</button>
            <button><span>Edith in Canva</span></button>
            <select class="download-button">
              <option value="Download">Free Download</option>
              <option value="Download">Free Download</option>
            </select>
          </div>
        </div>
        <div class="image-uploaded-container">
          <img src="${imageSrc.src}" class="image-uploaded" alt="">
        </div>
      </div>
    </div>
  </div>
  </div>
  `
  document.querySelector('.js-hide').addEventListener('click', () =>{
    document.querySelector('.js-download-image').classList.toggle('hide');
  });
}