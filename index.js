import{a as S,S as x,i}from"./assets/vendor-BjRz3xa9.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const v="49653024-3e206daf7693dc60176f31220";async function u(o,t=1){return await S.get("https://pixabay.com/api/",{params:{key:v,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t}})}const m=document.querySelector(".gallery"),p=document.querySelector(".loader"),g=document.querySelector(".load-more"),q=new x(".gallery a",{captionsData:"alt",captionDelay:250});function h(o){const t=o.map(({webformatURL:a,largeImageURL:s,tags:e,likes:r,views:c,comments:w,downloads:C})=>`
        <li class="card" id="">
            <div class="card-img">
                <a href=${s}><img src=${a} alt=${e} title=""/></a>
            </div>
            <ul class="card-info-list">
                <li class="card-info-item">
                    <p class="card-info-title">Likes</p>
                    <p class="card-info-text">${r}</p>
                </li>
                <li class="card-info-item">
                    <p class="card-info-title">Views</p>
                    <p class="card-info-text">${c}</p>
                </li>
                <li class="card-info-item">
                    <p class="card-info-title">Comments</p>
                    <p class="card-info-text">${w}</p>
                </li>
                <li class="card-info-item">
                    <p class="card-info-title">Downloads</p>
                    <p class="card-info-text">${C}</p>
                </li>
            </ul>
        </li>`).join("");m.insertAdjacentHTML("beforeend",t),q.refresh()}function B(){m.innerHTML=""}function y(){p.classList.remove("hidden")}function l(){p.classList.add("hidden")}function b(){g.classList.remove("hidden")}function f(){g.classList.add("hidden")}l();const L=document.querySelector(".form"),E=document.querySelector(".load-more");L.addEventListener("submit",M);E.addEventListener("click",$);let d,n;function M(o){if(f(),i.destroy(),B(),y(),o.preventDefault(),n=1,d=o.target.elements["search-text"].value.toLowerCase(),l(),d.trim()==="")return i.show({message:"Search query cannot be empty"});u(d,n).then(t=>{if(t.data.hits.length){const a=t.data.hits;h(a),n<t.data.totalHits/t.config.params.per_page&&b();return}f(),i.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",position:"center",messageColor:"#fafafb",messageSize:"16px",progressBarColor:"#b51b1b"})}).catch(t=>{i.show({message:t.message,backgroundColor:"#EF4040",position:"center",messageColor:"#fafafb",messageSize:"16px",progressBarColor:"#b51b1b"})}),L.reset()}async function $(){n++;try{f(),y();const o=await u(d,n),t=o.data.totalHits/o.config.params.per_page;if(o.data.hits.length){h(o.data.hits);const s=document.querySelector(".card").getBoundingClientRect().height;window.scrollBy({top:s*2,behavior:"smooth"}),l(),n<t&&b();return}l(),i.show({message:"We're sorry, but you've reached the end of search results",backgroundColor:"#C8E3E3",position:"topRight",messageColor:"#000",messageSize:"16px",progressBarColor:"#fff"})}catch(o){l(),i.show({message:o.message,backgroundColor:"#EF4040",position:"center",messageColor:"#fafafb",messageSize:"16px",progressBarColor:"#b51b1b"})}}
//# sourceMappingURL=index.js.map
