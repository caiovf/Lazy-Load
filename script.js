"use strict";var LazyLoad=function(){function e(e){return"PICTURE"==e.parentElement.nodeName?(w=!0,o=e.parentElement.querySelectorAll("source")):w=!1,w}function t(e){e.src=e.dataset.lazyimg}function n(n){if(e(n))for(var r=o.length-1;r>=0;r--)l=o[r].getAttribute("media"),l=l.split(/[^\w\s]/,4),l=l.filter(function(e){return""!=e}),a=o[r].getAttribute("srcset"),console.log(l);else t(n)}function r(e){var t=e.getBoundingClientRect(),n=t.top,r=t.bottom,i=t.left,o=t.right;return n<=s&&r>=d&&i<=f&&o>=u}function i(e){e instanceof Event&&(e=c);for(var t=0,i=e.length;t<i;t++)e[t].onload||r(e[t])&&n(e[t])}var o,l,a,c=document.querySelectorAll("[data-lazyimg]"),d=0,s=window.innerHeight-window.innerHeight/6,u=0,f=window.innerWidth,w=!1;return window.addEventListener("load",i,!1),window.addEventListener("scroll",i,!1),window.addEventListener("resize",i,!1),{start:n,isElementOnScreen:r,checkElementsOnScreen:i}}();
//# sourceMappingURL=script.js.map
