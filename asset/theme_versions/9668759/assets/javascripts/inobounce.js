/*! iNoBounce - v0.1.0
* https://github.com/lazd/iNoBounce/
* Copyright (c) 2013 Larry Davis <lazdnet@gmail.com>; Licensed BSD */
!function(e){var a=0,t=!1,o=function(e){for(var t=e.target;t!==document.body;){var o=window.getComputedStyle(t);if(!o)break;var n=o.getPropertyValue("-webkit-overflow-scrolling"),r=o.getPropertyValue("overflow-y"),i=parseInt(o.getPropertyValue("height"),10),u="touch"===n&&("auto"===r||"scroll"===r),l=t.scrollHeight>t.offsetHeight;if(u&&l){var c=e.touches?e.touches[0].screenY:e.screenY,d=a<=c&&0===t.scrollTop,s=c<=a&&t.scrollHeight-t.scrollTop===i;return void((d||s)&&e.preventDefault())}t=t.parentNode}e.preventDefault()},n=function(e){a=e.touches?e.touches[0].screenY:e.screenY},r=function(){window.addEventListener("touchstart",n,!1),window.addEventListener("touchmove",o,!1),t=!0},i=function(){window.removeEventListener("touchstart",n,!1),window.removeEventListener("touchmove",o,!1),t=!1},u=function(){return t},l=document.createElement("div");document.documentElement.appendChild(l),l.style.WebkitOverflowScrolling="touch";var c="getComputedStyle"in window&&"touch"===window.getComputedStyle(l)["-webkit-overflow-scrolling"];document.documentElement.removeChild(l),c&&r();var d={enable:r,disable:i,isEnabled:u};"undefined"!=typeof module&&module.exports&&(module.exports=d),"function"==typeof e.define?(0,e.define)(function(){return d}):e.iNoBounce=d}(this);