import{a as C,S,i as s}from"./assets/vendor-BjRz3xa9.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const x="49653024-3e206daf7693dc60176f31220";async function f(o,t=1){return await C.get("https://pixabay.com/api/",{params:{key:x,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t}})}const u=document.querySelector(".gallery"),m=document.querySelector(".loader"),p=document.querySelector(".load-more"),v=new S(".gallery a",{captionsData:"alt",captionDelay:250});function g(o){const t=o.map(({webformatURL:a,largeImageURL:c,tags:e,likes:r,views:n,comments:L,downloads:w})=>`
        <li class="card" id="">
            <div class="card-img">
                <a href=${c}><img src=${a} alt=${e} title=""/></a>
            </div>
            <ul class="card-info-list">
                <li class="card-info-item">
                    <p class="card-info-title">Likes</p>
                    <p class="card-info-text">${r}</p>
                </li>
                <li class="card-info-item">
                    <p class="card-info-title">Views</p>
                    <p class="card-info-text">${n}</p>
                </li>
                <li class="card-info-item">
                    <p class="card-info-title">Comments</p>
                    <p class="card-info-text">${L}</p>
                </li>
                <li class="card-info-item">
                    <p class="card-info-title">Downloads</p>
                    <p class="card-info-text">${w}</p>
                </li>
            </ul>
        </li>`).join("");u.insertAdjacentHTML("beforeend",t),v.refresh()}function q(){u.innerHTML=""}function h(){m.classList.remove("hidden")}function d(){m.classList.add("hidden")}function y(){p.classList.remove("hidden")}function B(){p.classList.add("hidden")}d();const b=document.querySelector(".form"),E=document.querySelector(".load-more");b.addEventListener("submit",M);E.addEventListener("click",$);let l,i=1;function M(o){if(s.destroy(),q(),h(),o.preventDefault(),i=1,l=o.target.elements["search-text"].value.toLowerCase(),d(),l.trim()==="")return s.show({message:"Search query cannot be empty"});f(l,i).then(t=>{if(t.data.hits.length){const a=t.data.hits;g(a),i<t.data.total/t.config.params.per_page&&y();return}s.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",position:"center",messageColor:"#fafafb",messageSize:"16px",progressBarColor:"#b51b1b"})}).catch(t=>{s.show({message:t.message,backgroundColor:"#EF4040",position:"center",messageColor:"#fafafb",messageSize:"16px",progressBarColor:"#b51b1b"})}),b.reset()}async function $(){i++;try{B(),h();const o=await f(l,i);if(i<o.data.total/o.config.params.per_page){g(o.data.hits);const a=document.querySelector(".card").getBoundingClientRect().height;window.scrollBy({top:a*2,behavior:"smooth"}),d(),y();return}d(),s.show({message:"We're sorry, but you've reached the end of search results",backgroundColor:"#C8E3E3",position:"topRight",messageColor:"#000",messageSize:"16px",progressBarColor:"#fff"})}catch(o){s.show({message:o.message,backgroundColor:"#EF4040",position:"center",messageColor:"#fafafb",messageSize:"16px",progressBarColor:"#b51b1b"})}}
//# sourceMappingURL=index.js.map
