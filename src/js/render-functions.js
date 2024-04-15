export function renderCard(photos) {
return photos.map((photo)=> `<li class="gallery__item">
<a href="${photo.largeImageURL}">
<img class="gallery__img" src="${photo.largeImageURL}" alt="${photo.tags}">
 <div Class="info-gallery__box">
  <ul Class="info-gallery__list">
  <li Class="info-gallery__item">
     <p Class="info-gallery__text">Likes</p>
     <span Class="info-gallery__span">${photo.likes}</span>
  </li>
  <li Class="info-gallery__item">
      <p Class="info-gallery__text">Views</p>
      <span Class="info-gallery__span">${photo.views}</span>
  </li>
  <li Class="info-gallery__item">
      <p Class="info-gallery__text">Comments</p>
      <span Class="info-gallery__span">${photo.comments}</span>
 </li>
 <li Class="info-gallery__item">
     <p Class="info-gallery__text">Downloads</p>
     <span Class="info-gallery__span">${photo.downloads}</span>
 </li>
  </ul>
</div>
</a>
</li>`).join("")
}
