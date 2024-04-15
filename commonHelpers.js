import{a as g,S as h,i as u}from"./assets/vendor-6e0bf343.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))c(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&c(d)}).observe(document,{childList:!0,subtree:!0});function n(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function c(s){if(s.ep)return;s.ep=!0;const a=n(s);fetch(s.href,a)}})();const m="/goit-js-hw-12/assets/group-5bc7b79a.svg",_=document.querySelector(".form"),f=document.querySelector(".gallery"),r=document.querySelector(".loader"),i=document.querySelector(".js-button-more");g.defaults.baseURL="https://pixabay.com/api/";async function p(t,e){return await g({params:{q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,key:"43354074-012c59d6306474dc1e40056e0",per_page:15,page:e}})}function y(t){return t.map(e=>`<li class="gallery__item">
<a href="${e.largeImageURL}">
<img class="gallery__img" src="${e.largeImageURL}" alt="${e.tags}">
 <div Class="info-gallery__box">
  <ul Class="info-gallery__list">
  <li Class="info-gallery__item">
     <p Class="info-gallery__text">Likes</p>
     <span Class="info-gallery__span">${e.likes}</span>
  </li>
  <li Class="info-gallery__item">
      <p Class="info-gallery__text">Views</p>
      <span Class="info-gallery__span">${e.views}</span>
  </li>
  <li Class="info-gallery__item">
      <p Class="info-gallery__text">Comments</p>
      <span Class="info-gallery__span">${e.comments}</span>
 </li>
 <li Class="info-gallery__item">
     <p Class="info-gallery__text">Downloads</p>
     <span Class="info-gallery__span">${e.downloads}</span>
 </li>
  </ul>
</div>
</a>
</li>`).join("")}const L=new h(".gallery a",{captionsData:"alt",captionDelay:250});let o=1,l=null;_.addEventListener("submit",C);i.addEventListener("click",b);function C(t){t.preventDefault(),l=t.currentTarget.elements.search.value.trim(),i.classList.add("is-hidden"),r.classList.remove("is-hidden"),f.innerHTML="",p(l,o=1).then(e=>{if(l===""||e.data.hits.length===0){i.classList.add("is-hidden"),u.error({iconUrl:m,message:"Sorry, there are no images matching<br> your search query. Please try again!",messageHTML:!0,messageColor:"#fff",messageSize:"16px",backgroundColor:"#ef4040",position:"topRight",transitionIn:"fadeInLeft"});return}f.innerHTML=y(e.data.hits),e.data.totalHits>15&&i.classList.remove("is-hidden"),L.refresh()}).catch(e=>console.log(e)).finally(()=>{r.classList.add("is-hidden")})}function b(){o++,p(l,o).then(t=>{r.classList.remove("is-hidden"),f.insertAdjacentHTML("beforeend",y(t.data.hits));const{height:e}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:e*3,behavior:"smooth"}),console.log(t.data.total),Math.ceil(t.data.totalHits/15)===o&&(u.error({iconUrl:m,message:"We're sorry, but you've reached the end of search",messageHTML:!0,messageColor:"#fff",messageSize:"16px",backgroundColor:"#ef4040",position:"topRight",transitionIn:"fadeInLeft"}),r.classList.add("is-hidden"),i.classList.add("is-hidden")),r.classList.add("is-hidden")}).catch(console.log())}
//# sourceMappingURL=commonHelpers.js.map
