function e(e,n,t,o){Object.defineProperty(e,n,{get:t,set:o,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},s=n.parcelRequireca0a;null==s&&((s=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var s={id:e,exports:{}};return t[e]=s,n.call(s.exports,s,s.exports),s.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},n.parcelRequireca0a=s),s.register("27Lyk",(function(n,t){var o,s;e(n.exports,"register",(()=>o),(e=>o=e)),e(n.exports,"resolve",(()=>s),(e=>s=e));var r={};o=function(e){for(var n=Object.keys(e),t=0;t<n.length;t++)r[n[t]]=e[n[t]]},s=function(e){var n=r[e];if(null==n)throw new Error("Could not resolve bundle with id "+e);return n}})),s.register("cOtVG",(function(e,n){e.exports=new URL(s("27Lyk").resolve("3TYs3"),import.meta.url).toString()})),s.register("j4Buu",(function(e,n){e.exports=new URL(s("27Lyk").resolve("aJsSp"),import.meta.url).toString()})),s.register("jgOdn",(function(e,n){e.exports=new URL(s("27Lyk").resolve("5z2gr"),import.meta.url).toString()})),s.register("5SRrt",(function(e,n){e.exports=new URL(s("27Lyk").resolve("4HIA2"),import.meta.url).toString()})),s.register("7UrVv",(function(e,n){e.exports=new URL(s("27Lyk").resolve("7lS75"),import.meta.url).toString()})),s("27Lyk").register(JSON.parse('{"dZpbI":"index.b9954d06.js","3TYs3":"rock.c88f7ccf.svg","aJsSp":"paper.5f79bbf0.svg","5z2gr":"scissors.6a2fdda1.svg","4HIA2":"green-star.1eea6986.svg","7lS75":"red-star.342a139d.svg"}'));const r=[{path:/\/welcome/,component:function(){const e=document.createElement("div");return e.classList.add("welcome"),e.innerHTML='<div class="welcome__container">\n  <h1 class="welcome__title">\n    <span>Piedra Papel </span><span class="welcome__title--eton">ó</span>\n    <span>Tijera</span>\n  </h1>\n\n  <div class="welcome__button">\n    <a class="welcome__link" href="./instructions"\n      ><my-button>Empezar</my-button></a\n    >\n  </div>\n</div>\n\n<div class="welcome__hands">\n  <my-move class="welcome__move" type="scissors"></my-move>\n  <my-move class="welcome__move" type="rock"></my-move>\n  <my-move class="welcome__move" type="paper"></my-move>\n</div>',e.querySelector(".welcome__button")?.addEventListener("click",(()=>{a("/instructions")})),e}()},{path:/\/instructions/,component:function(){const e=document.createElement("div");return e.classList.add("instructions"),e.innerHTML='<div class="instructions__container">\n  <h2 class="instructions__info">\n    Presioná jugar y elegí: piedra, papel o tijera antes de que pasen los 3\n    segundos.\n  </h2>\n\n  <div class="instructions__button">\n    <a class="instructions__link" href="./play"\n      ><my-button>¡Jugar!</my-button></a\n    >\n  </div>\n</div>\n\n<div class="instructions__hands">\n  <my-move class="instructions__move" type="scissors"></my-move>\n  <my-move class="instructions__move" type="rock"></my-move>\n  <my-move class="instructions__move" type="paper"></my-move>\n</div>',console.log("hola"),e}()},{path:/\/play/,component:function(){const e=document.createElement("div");return e.classList.add("play"),e.innerHTML='<div class="play__container">\n  <my-countdown></my-countdown>\n</div>\n\n<div class="play__hands">\n  <my-move class="play__move" type="scissors"></my-move>\n  <my-move class="play__move" type="rock"></my-move>\n  <my-move class="play__move" type="paper"></my-move>\n</div>',e}()}],i="/dwf-m5-desafio";function c(){return location.host.includes("github.io")}function a(e){const n=c()?i+e:e;console.log("complete",n),history.pushState({},"",n),l(n)}function l(e){const n=document.querySelector(".root"),t=c()?e.replace(i,""):e;console.log(t);for(const e of r)if(e.path.test(t)){const t=e.component;console.log("r",e),console.log("element",t),n.firstChild&&(n.firstChild.remove(),console.log("hola remove")),n.appendChild(t),console.log("hola append")}}window.onpopstate=function(){console.log("what"),l(location.pathname)},function(){const e=c()?location.pathname.replace(i,""):location.pathname;console.log("new",e),"/"==e&&a(e+"welcome"),console.log("new2",e),a(e)}(),function(){class e extends HTMLElement{constructor(){super()}connectedCallback(){this.render()}render(){this.classList.add("button");const e=document.createElement("style");e.textContent='.button {\n        font-family: "Odibee Sans";\n        font-weight: 400;\n        font-size: 45px;\n        line-height: 50px;\n        text-align: center;\n        color: var(--light-cyan);\n      \n        width: 100%;\n        height: 100%;\n\n        padding: 9px 0px;\n\n        background-color: var(--brandeis-blue);\n      \n        border: 10px solid var(--imperial-blue);\n        border-radius: 10px;\n\n        display: block;\n      }',this.appendChild(e)}}customElements.define("my-button",e)}(),function(){class e extends HTMLElement{constructor(){super()}connectedCallback(){this.render()}render(){const e=this.getAttribute("type"),n=s("cOtVG"),t=s("j4Buu"),o=s("jgOdn");this.innerHTML=""+("rock"===e?`<img class="image" src="${n}">`:"paper"===e?`<img class="image" src="${t}">`:`<img class="image" src="${o}">`);const r=document.createElement("style");r.textContent=".image {\n        width: 100%;\n        height: 100%;\n      }",this.appendChild(r)}}customElements.define("my-move",e)}(),function(){class e extends HTMLElement{shadow=this.attachShadow({mode:"open"});constructor(){super()}connectedCallback(){this.render()}render(){let e=3;const n=document.createElement("p");n.classList.add("countdown"),n.textContent=e.toString();const t=setInterval((()=>{e--,n.textContent=e.toString(),0==e&&clearInterval(t)}),1e3),o=document.createElement("style");o.innerHTML='.countdown {\n        font-family: "American Typewriter Bold";\n        font-weight: 700;\n        font-size: 100px;\n        line-height: 100%;\n        text-align: center;\n        color: black;\n      }',this.shadow.appendChild(o),this.shadow.appendChild(n)}}customElements.define("my-countdown",e)}(),function(){class e extends HTMLElement{shadow=this.attachShadow({mode:"open"});constructor(){super()}connectedCallback(){this.render()}render(){const e=document.createElement("div");e.classList.add("result");const n=s("5SRrt"),t=s("7UrVv"),o=this.getAttribute("result");e.innerHTML="player"===o?`<img src="${n}" />\n        <h3 class="text">Ganaste</h3>`:"computer"===o?`<img src="${t}" />\n        <h3 class="text">Perdiste</h3>`:`<img src="${n}" />\n        <h3 class="text">Empate</h3>`;const r=document.createElement("style");r.textContent='.result {\n        position: relative;\n        text-align: center;\n      }\n      \n      .text {\n        font-family: "Odibee Sans";\n        font-style: normal;\n        font-weight: 400;\n        font-size: 55px;\n        line-height: 61px;\n        letter-spacing: 0.05em;\n        color: #ffffff;\n      \n        position: absolute;\n        left: 21.09%;\n        right: 15.77%;\n        top: 37.15%;\n        bottom: 39.39%;\n      \n        margin: 0px;\n      }',this.shadow.appendChild(r),this.shadow.appendChild(e)}}customElements.define("my-result",e)}();
//# sourceMappingURL=index.b9954d06.js.map
