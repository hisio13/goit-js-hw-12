import{a as f,S as m,i as a}from"./assets/vendor-BDaiwwc1.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const l of e)if(l.type==="childList")for(const d of l.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function n(e){const l={};return e.integrity&&(l.integrity=e.integrity),e.referrerPolicy&&(l.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?l.credentials="include":e.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(e){if(e.ep)return;e.ep=!0;const l=n(e);fetch(e.href,l)}})();const y="https://pixabay.com",h="/api/";function p(t,o=1,n=40){const r=new URLSearchParams({key:"48827773-420cc6a3931f90379a2431d96",q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",page:o,per_page:n}),e=`${y}${h}?${r}`;return f.get(e)}const b=new m(".gallery a",{captionsData:"alt",captionDelay:250,close:!0});function w(t){const o=document.getElementById("gallery"),n=t.map(r=>`<li class="gallery-item">
            <a class='gallery-link' href="${r.largeImageURL}">
                <img class="li-img" src="${r.webformatURL}" alt="${r.tags}"/> 
                <div class="li-text">
                    <table class="table">
                        <tr>
                            <td>Likes</td>
                            <td>Views</td>
                            <td>Comments</td>
                            <td>Downloads</td>
                        </tr>
                        <tr>
                            <td>${r.likes}</td>
                            <td>${r.views}</td>
                            <td>${r.comments}</td>
                            <td>${r.downloads}</td>
                        </tr>
                    </table>
                </div>
            </a>
        </li>`).join("");o.insertAdjacentHTML("beforeend",n),b.refresh()}function I(){const t=document.getElementById("gallery");t.innerHTML="",document.getElementById("loadMore").style.display="none"}function L(){document.getElementById("loading").style.display="block"}function C(){document.getElementById("loading").style.display="none"}function g(t){document.getElementById("loadMore").style.display=t?"block":"none"}function E(){const t=document.querySelectorAll(".gallery-item");if(t.length>=2){const o=t[0].getBoundingClientRect().height;window.scrollBy({top:o*2,behavior:"smooth"})}}document.getElementById("loadMore").addEventListener("click",E);const S=document.querySelector(".form"),x=document.querySelector(".input-search"),c=document.querySelector(".wait-msg");let s=1,i="";S.addEventListener("submit",t=>{t.preventDefault(),I(),c.innerHTML='"Wait, the image is loading" <span class="loader"></span>';const o=x.value.trim();if(!o){a.show({backgroundColor:"rgba(239, 64, 64, 1)",messageColor:"rgba(255, 255, 255, 1)",close:!0,position:"topRight",title:"Error",titleColor:"#fff",titleSize:"16px",message:"Input search string"}),c.textContent="";return}o!==i?(i=o,s=1):s++,u(i)});document.getElementById("loadMore").addEventListener("click",()=>{s++,u(i,!0)});function v(){const t=document.querySelectorAll(".gallery-item");if(t.length>=2){const o=t[0].getBoundingClientRect().height;window.scrollBy({top:o*2,behavior:"smooth"})}}function u(t,o=!1){L(),p(t,s).then(n=>{const r=n.data.hits,e=n.data.totalHits;r.length===0?(a.show({backgroundColor:"rgba(239, 64, 64, 1)",messageColor:"rgba(255, 255, 255, 1)",close:!0,position:"topRight",title:"Error",titleColor:"#fff",titleSize:"16px",message:"Sorry, there are no images matching your search query. Please try again!"}),g(!1)):(w(r),s*40>=e?(a.show({backgroundColor:"rgba(255, 165, 0, 1)",messageColor:"#fff",close:!0,position:"topRight",title:"Info",titleColor:"#fff",titleSize:"16px",message:"You have reached the last page of results."}),g(!1)):g(!0),o&&v()),c.textContent=""}).catch(n=>{c.textContent="",a.show({backgroundColor:"rgba(239, 64, 64, 1)",messageColor:"#fff",close:!0,position:"topRight",title:"Error",titleColor:"#fff",titleSize:"16px",message:"Something went wrong! Please try again later."}),console.error(n)}).finally(()=>{C()})}
//# sourceMappingURL=index.js.map
