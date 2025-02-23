import{a as m,S as f,i as u}from"./assets/vendor-BDaiwwc1.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(e){if(e.ep)return;e.ep=!0;const n=s(e);fetch(e.href,n)}})();const p="https://pixabay.com",y="/api";function h(r,t=1,s=40){const o=new URLSearchParams({key:"48827773-420cc6a3931f90379a2431d96",q:r,image_type:"photo",orientation:"horizontal",safesearch:"true",page:t,per_page:s}),e=`${p}${y}?${o}`;return m.get(e)}const b=new f(".gallery a",{captionsData:"alt",captionDelay:250,close:"true"});function L(r){const t=document.getElementById("gallery"),s=r.map(o=>`<li class="gallery-item">
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
        </li>`).join("");t.insertAdjacentHTML("beforeend",s),b.refresh()}function I(){const r=document.getElementById("gallery");r.innerHTML="",document.getElementById("loadMore").style.display="none"}function w(){document.getElementById("loading").style.display="block"}function E(){document.getElementById("loading").style.display="none"}function d(r){document.getElementById("loadMore").style.display=r?"block":"none"}const x=document.querySelector(".form"),C=document.querySelector(".input-search"),i=document.querySelector(".wait-msg");let a=1,l="";x.addEventListener("submit",r=>{r.preventDefault(),I(),i.innerHTML='"Wait, the image is loading" <span class="loader"></span>';const t=C.value.trim();if(!t){u.show({backgroundColor:"rgba(239, 64, 64, 1)",messageColor:"rgba(255, 255, 255, 1)",close:"true",position:"topRight",title:"Error",titleColor:"#fff",titleSize:"16px",message:"Input search string"}),i.textContent="";return}t!==l?(l=t,a=1):a++,g(l)});document.getElementById("loadMore").addEventListener("click",()=>{a++,g(l)});function g(r){w(),h(r,a).then(t=>{const s=t.data.hits,o=t.data.totalHits;s.length===0?(u.show({backgroundColor:"rgba(239, 64, 64, 1)",messageColor:"rgba(255, 255, 255, 1)",close:"true",position:"topRight",title:"Error",titleColor:"#fff",titleSize:"16px",message:"Sorry, there are no images matching your search query. Please try again!"}),d(!1)):(L(s),d(a*40<o)),i.textContent=""}).catch(t=>{i.textContent="Ups ...",console.log(t)}).finally(()=>{E()})}
//# sourceMappingURL=index.js.map
