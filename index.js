import{a as f,S as m,i as a}from"./assets/vendor-BDaiwwc1.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function s(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(e){if(e.ep)return;e.ep=!0;const n=s(e);fetch(e.href,n)}})();const p="https://pixabay.com",h="/api";function y(t,r=1,s=40){const o=new URLSearchParams({key:"48827773-420cc6a3931f90379a2431d96",q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",page:r,per_page:s}),e=`${p}${h}?${o}`;return f.get(e)}const b=new m(".gallery a",{captionsData:"alt",captionDelay:250,close:"true"});function L(t){const r=document.getElementById("gallery"),s=t.map(o=>`<li class="gallery-item">
            <a class='gallery-link' href="${o.largeImageURL}">
                <img class="li-img" src="${o.webformatURL}" alt="${o.tags}"/> 
                <div class="li-text">
                    <table class="table">
                        <tr>
                            <td>Likes</td>
                            <td>Views</td>
                            <td>Comments</td>
                            <td>Downloads</td>
                        </tr>
                        <tr>
                            <td>${o.likes}</td>
                            <td>${o.views}</td>
                            <td>${o.comments}</td>
                            <td>${o.downloads}</td>
                        </tr>
                    </table>
                </div>
            </a>
        </li>`).join("");r.insertAdjacentHTML("beforeend",s),b.refresh()}function I(){const t=document.getElementById("gallery");t.innerHTML="",document.getElementById("loadMore").style.display="none"}function w(){document.getElementById("loading").style.display="block"}function C(){document.getElementById("loading").style.display="none"}function g(t){document.getElementById("loadMore").style.display=t?"block":"none"}const S=document.querySelector(".form"),E=document.querySelector(".input-search"),c=document.querySelector(".wait-msg");let l=1,i="";S.addEventListener("submit",t=>{t.preventDefault(),I(),c.innerHTML='"Wait, the image is loading" <span class="loader"></span>';const r=E.value.trim();if(!r){a.show({backgroundColor:"rgba(239, 64, 64, 1)",messageColor:"rgba(255, 255, 255, 1)",close:!0,position:"topRight",title:"Error",titleColor:"#fff",titleSize:"16px",message:"Input search string"}),c.textContent="";return}r!==i?(i=r,l=1):l++,u(i)});document.getElementById("loadMore").addEventListener("click",()=>{l++,u(i,!0)});function u(t,r=!1){w(),y(t,l).then(s=>{const o=s.data.hits,e=s.data.totalHits;o.length===0?(a.show({backgroundColor:"rgba(239, 64, 64, 1)",messageColor:"rgba(255, 255, 255, 1)",close:!0,position:"topRight",title:"Error",titleColor:"#fff",titleSize:"16px",message:"Sorry, there are no images matching your search query. Please try again!"}),g(!1)):(L(o),l*40>=e?(a.show({backgroundColor:"rgba(255, 165, 0, 1)",messageColor:"#fff",close:!0,position:"topRight",title:"Info",titleColor:"#fff",titleSize:"16px",message:"You have reached the last page of results."}),g(!1)):g(!0),r&&x()),c.textContent=""}).catch(s=>{c.textContent="",a.show({backgroundColor:"rgba(239, 64, 64, 1)",messageColor:"#fff",close:!0,position:"topRight",title:"Error",titleColor:"#fff",titleSize:"16px",message:"Something went wrong! Please try again later."}),console.error(s)}).finally(()=>{C()})}function x(){const t=document.querySelector(".gallery");t.children.length>=2&&t.children[t.children.length-2].scrollIntoView({behavior:"smooth",block:"start"})}
//# sourceMappingURL=index.js.map
