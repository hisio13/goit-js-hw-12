import{a as f,S as m,i as a}from"./assets/vendor-BDaiwwc1.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const h="https://pixabay.com",p="/api";function y(t,o=1,n=40){const l=new URLSearchParams({key:"48827773-420cc6a3931f90379a2431d96",q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",page:o,per_page:n}),e=`${h}${p}?${l}`;return f.get(e)}const b=new m(".gallery a",{captionsData:"alt",captionDelay:250,close:"true"});function w(t){const o=document.getElementById("gallery"),n=t.map(e=>`<li class="gallery-item">
            <a class='gallery-link' href="${e.largeImageURL}">
                <img class="li-img" src="${e.webformatURL}" alt="${e.tags}"/> 
                <div class="li-text">
                    <table class="table">
                        <tr>
                            <td>Likes</td>
                            <td>Views</td>
                            <td>Comments</td>
                            <td>Downloads</td>
                        </tr>
                        <tr>
                            <td>${e.likes}</td>
                            <td>${e.views}</td>
                            <td>${e.comments}</td>
                            <td>${e.downloads}</td>
                        </tr>
                    </table>
                </div>
            </a>
        </li>`).join("");b.refresh(),o.insertAdjacentHTML("beforeend",n);const l=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:l*2,behavior:"smooth"})}function L(){const t=document.getElementById("gallery");t.innerHTML="",document.getElementById("loadMore").style.display="none"}function I(){document.getElementById("loading").style.display="block"}function C(){document.getElementById("loading").style.display="none"}function g(t){document.getElementById("loadMore").style.display=t?"block":"none"}const S=document.querySelector(".form"),E=document.querySelector(".input-search"),c=document.querySelector(".wait-msg");let s=1,i="";S.addEventListener("submit",t=>{t.preventDefault(),L(),c.innerHTML='"Wait, the image is loading" <span class="loader"></span>';const o=E.value.trim();if(!o){a.show({backgroundColor:"rgba(239, 64, 64, 1)",messageColor:"rgba(255, 255, 255, 1)",close:!0,position:"topRight",title:"Error",titleColor:"#fff",titleSize:"16px",message:"Input search string"}),c.textContent="";return}o!==i?(i=o,s=1):s++,u(i)});document.getElementById("loadMore").addEventListener("click",()=>{s++,u(i,!0)});function u(t,o=!1){I(),y(t,s).then(n=>{const l=n.data.hits,e=n.data.totalHits;l.length===0?(a.show({backgroundColor:"rgba(239, 64, 64, 1)",messageColor:"rgba(255, 255, 255, 1)",close:!0,position:"topRight",title:"Error",titleColor:"#fff",titleSize:"16px",message:"Sorry, there are no images matching your search query. Please try again!"}),g(!1)):(w(l),s*40>=e?(a.show({backgroundColor:"rgba(255, 165, 0, 1)",messageColor:"#fff",close:!0,position:"topRight",title:"Info",titleColor:"#fff",titleSize:"16px",message:"You have reached the last page of results."}),g(!1)):g(!0),o&&v()),c.textContent=""}).catch(n=>{c.textContent="",a.show({backgroundColor:"rgba(239, 64, 64, 1)",messageColor:"#fff",close:!0,position:"topRight",title:"Error",titleColor:"#fff",titleSize:"16px",message:"Something went wrong! Please try again later."}),console.error(n)}).finally(()=>{C()})}function v(){const t=document.querySelector(".gallery");t.children.length>=2&&t.children[t.children.length-2].scrollIntoView({behavior:"smooth",block:"start"})}
//# sourceMappingURL=index.js.map
