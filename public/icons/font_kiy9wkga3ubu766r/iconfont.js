(function(window){var svgSprite='<svg><symbol id="icon-gouwucheman" viewBox="0 0 1024 1024"><path d="M346.112 806.912q19.456 0 36.864 7.168t30.208 19.968 20.48 30.208 7.68 36.864-7.68 36.864-20.48 30.208-30.208 20.48-36.864 7.68q-20.48 0-37.888-7.68t-30.208-20.48-20.48-30.208-7.68-36.864 7.68-36.864 20.48-30.208 30.208-19.968 37.888-7.168zM772.096 808.96q19.456 0 37.376 7.168t30.72 19.968 20.48 30.208 7.68 36.864-7.68 36.864-20.48 30.208-30.72 20.48-37.376 7.68-36.864-7.68-30.208-20.48-20.48-30.208-7.68-36.864 7.68-36.864 20.48-30.208 30.208-19.968 36.864-7.168zM944.128 227.328q28.672 0 44.544 7.68t22.528 18.944 6.144 24.064-3.584 22.016-13.312 37.888-22.016 62.976-23.552 68.096-18.944 53.248q-13.312 40.96-33.28 56.832t-49.664 15.872l-35.84 0-65.536 0-86.016 0-96.256 0-253.952 0 14.336 92.16 517.12 0q49.152 0 49.152 41.984 0 20.48-9.728 35.328t-38.4 14.848l-49.152 0-94.208 0-118.784 0-119.808 0-99.328 0-55.296 0q-20.48 0-34.304-9.216t-23.04-24.064-14.848-32.256-8.704-32.768q-1.024-6.144-5.632-29.696t-11.264-58.88-14.848-78.848-16.384-87.552q-19.456-103.424-44.032-230.4l-76.8 0q-15.36 0-25.6-7.68t-16.896-18.432-9.216-23.04-2.56-22.528q0-20.48 13.824-33.792t37.376-13.312l21.504 0 21.504 0 25.6 0 34.816 0q20.48 0 32.768 6.144t19.456 15.36 10.24 19.456 5.12 17.408q2.048 8.192 4.096 23.04t4.096 30.208q3.072 18.432 6.144 38.912l700.416 0zM867.328 194.56l-374.784 0 135.168-135.168q23.552-23.552 51.712-24.064t51.712 23.04z"  ></path></symbol><symbol id="icon-unie036" viewBox="0 0 1024 1024"><path d="M426.656 64q78.016 0 149.152 30.496t122.496 81.824 81.824 122.496 30.496 149.152q0 67.008-21.824 128.32t-62.176 111.328l242.336 242.016q12.32 12.32 12.32 30.336 0 18.336-12.16 30.496t-30.496 12.16q-18.016 0-30.336-12.32l-242.016-242.336q-50.016 40.32-111.328 62.176t-128.32 21.824q-78.016 0-149.152-30.496t-122.496-81.824-81.824-122.496-30.496-149.152 30.496-149.152 81.824-122.496 122.496-81.824 149.152-30.496zM426.656 149.344q-60.672 0-116 23.68t-95.328 63.68-63.68 95.328-23.68 116 23.68 116 63.68 95.328 95.328 63.68 116 23.68 116-23.68 95.328-63.68 63.68-95.328 23.68-116-23.68-116-63.68-95.328-95.328-63.68-116-23.68z"  ></path></symbol><symbol id="icon-yonghu-tianchong" viewBox="0 0 1024 1024"><path d="M593.066667 499.2C695.466667 465.066667 768 369.066667 768 256c0-140.8-115.2-256-256-256S256 115.2 256 256c0 113.066667 72.533333 209.066667 174.933333 243.2C249.6 535.466667 85.333333 689.066667 85.333333 874.666667c0 83.2 66.133333 149.333333 149.333334 149.333333h554.666666c83.2 0 149.333333-66.133333 149.333334-149.333333 0-185.6-164.266667-339.2-345.6-375.466667z" fill="#666767" ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)