class t{constructor(t="https://type.fit/api/quotes"){this.baseUrl=t}quotes(){return fetch(this.baseUrl).then((t=>t.json()))}}class e{constructor(t="https://www.colr.org/json/"){this.baseUrl=t}colors(t=7,e=4){return fetch(`${this.baseUrl}schemes/random/${t}?scheme_size_limit=${e}`).then((t=>t.json()))}tagged(t="pastel"){return fetch(`${this.baseUrl}tag/${t}`).then((t=>t.json()))}}document.addEventListener("DOMContentLoaded",(function(){!function(t){const[e,n,o,s]=[500,300,20,44],r=document.getElementById("svg");r.setAttribute("width",`${e}px`),r.setAttribute("height",`${n}px`);const c=document.getElementById("text");c.setAttribute("x",e/2+"px"),c.setAttribute("y",n/2+"px"),c.setAttribute("font-size",`${o}px`);const u=document.getElementById("author");u.setAttribute("y",""+.8*n),u.setAttribute("x",""+.9*e),u.setAttribute("font-size",o-2+"px");const i=document.getElementById("background");i.setAttribute("height",`${n}`),i.setAttribute("width",`${e}`)}();document.getElementById("next_but").onclick=r;(new t).quotes().then((t=>n=t));(new e).tagged().then((t=>t.colors.forEach((t=>o.push(t)))))}));let n,o=[],s=0;function r(){const t=o.length,[e,r]=[Math.floor(Math.random()*t/2),Math.floor(Math.random()*t/2+t/2)];!function(t,e=[]){const n=document.getElementById("text"),o=document.getElementById("author"),s=document.getElementById("gradient-left"),r=document.getElementById("gradient-right");n.innerHTML=t.text,o.innerHTML=t.author,s.setAttribute("stop-color",`#${e[0].hex}`),r.setAttribute("stop-color",`#${e[1].hex}`),console.log("draw"),console.log(e)}(n[s],[o[e],o[r]]),s+=1}