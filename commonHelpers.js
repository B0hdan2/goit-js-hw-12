import{a as g,S as C,i as u}from"./assets/vendor-6e0bf343.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))c(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&c(d)}).observe(document,{childList:!0,subtree:!0});function l(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(s){if(s.ep)return;s.ep=!0;const r=l(s);fetch(s.href,r)}})();const m="/goit-js-hw-12/assets/group-5bc7b79a.svg",p=document.querySelector(".form"),f=document.querySelector(".gallery"),i=document.querySelector(".loader"),a=document.querySelector(".js-button-more");g.defaults.baseURL="https://pixabay.com/api/";async function y(t,e){return await g({params:{q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,key:"43354074-012c59d6306474dc1e40056e0",per_page:15,page:e}})}function h(t){return t.map(e=>`<li class="gallery__item">
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
</li>`).join("")}const _=new C(".gallery a",{captionsData:"alt",captionDelay:250});let o=1,n=null;p.addEventListener("submit",b);async function b(t){t.preventDefault(),n=t.currentTarget.elements.search.value.trim(),a.addEventListener("click",L),a.classList.add("is-hidden"),i.classList.remove("is-hidden"),f.innerHTML="",o=1;try{const{data:e}=await y(n,o);if(n===""||e.hits.length===0){u.error({iconUrl:m,message:"Sorry, there are no images matching<br> your search query. Please try again!",messageHTML:!0,messageColor:"#fff",messageSize:"16px",backgroundColor:"#ef4040",position:"topRight",transitionIn:"fadeInLeft"}),a.classList.add("is-hidden"),i.classList.add("is-hidden");return}f.innerHTML=h(e.hits),e.totalHits>15&&a.classList.remove("is-hidden"),p.reset()}catch(e){console.log(e)}_.refresh(),i.classList.add("is-hidden")}async function L(){i.classList.remove("is-hidden"),o++;try{const{data:t}=await y(n,o);f.insertAdjacentHTML("beforeend",h(t.hits));const{height:e}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:e*3,behavior:"smooth"}),Math.ceil(t.totalHits/15)===o&&(u.error({iconUrl:m,message:"We're sorry, but you've reached the end of search results.",messageHTML:!0,messageColor:"#fff",messageSize:"16px",backgroundColor:"#ef4040",position:"topRight",transitionIn:"fadeInLeft"}),a.removeEventListener("click",L),a.classList.add("is-hidden"))}catch(t){console.log(t)}_.refresh(),i.classList.add("is-hidden")}
//# sourceMappingURL=commonHelpers.js.map
