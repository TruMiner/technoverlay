// ==UserScript==
// @name        not even close
// @namespace   Violentmonkey Scripts
// @match       https://garlic-bread.reddit.com/embed*
// @icon        https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @grant       none
// @version     2.2.0
// @author      Luckanio, credits to r/Osuplace and r/Titanfolk
// @description NOT EVEN CLOSE BABY TECHNOBLADE NEVER DIES
// ==/UserScript==
if (window.top !== window.self) {
    window.addEventListener('load', () => {
      document
        .getElementsByTagName("garlic-bread-embed")[0]
        .shadowRoot
        .children[0]
        .getElementsByTagName("garlic-bread-share-container")[0]
        .getElementsByTagName("garlic-bread-camera")[0]
        .getElementsByTagName("garlic-bread-canvas")[0]
        .shadowRoot
        .children[0]
        .appendChild(
          (function () {
              const img = document.createElement("img");
              img.src = "https://cdn.discordapp.com/attachments/1131350320056909874/1131766956085760000/dotted_test8.png";
              img.style = "position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 1000px;height: 1000px;";
              console.log(img);
              return img;
          })())
  }, false);
}