if(!self.define){let e,a={};const i=(i,n)=>(i=new URL(i+".js",n).href,a[i]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=a,document.head.appendChild(e)}else e=i,importScripts(i),a()})).then((()=>{let e=a[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,s)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(a[r])return;let o={};const d=e=>i(e,r),c={module:{uri:r},exports:o,require:d};a[r]=Promise.all(n.map((e=>c[e]||d(e)))).then((e=>(s(...e),o)))}}define(["./workbox-07a7b4f2"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"72bd4aa33725ef0be4c9f26d1fba7d86"},{url:"/_next/static/YY1uLFOjAiRafqrXa2weC/_buildManifest.js",revision:"e0a21c7d7f93d89dce16df0231dc76f2"},{url:"/_next/static/YY1uLFOjAiRafqrXa2weC/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/69-c292296505fe2927.js",revision:"YY1uLFOjAiRafqrXa2weC"},{url:"/_next/static/chunks/749-ee24ea6cd9dfd86e.js",revision:"YY1uLFOjAiRafqrXa2weC"},{url:"/_next/static/chunks/app/_not-found-bd7d7a8ca562cd4d.js",revision:"YY1uLFOjAiRafqrXa2weC"},{url:"/_next/static/chunks/app/layout-6145208ce06fabe8.js",revision:"YY1uLFOjAiRafqrXa2weC"},{url:"/_next/static/chunks/app/page-73a88ce070709614.js",revision:"YY1uLFOjAiRafqrXa2weC"},{url:"/_next/static/chunks/fd9d1056-c7082c319cc53ced.js",revision:"YY1uLFOjAiRafqrXa2weC"},{url:"/_next/static/chunks/framework-aec844d2ccbe7592.js",revision:"YY1uLFOjAiRafqrXa2weC"},{url:"/_next/static/chunks/main-8f6b9d3a1f4371bf.js",revision:"YY1uLFOjAiRafqrXa2weC"},{url:"/_next/static/chunks/main-app-e65c13cf0881e3fc.js",revision:"YY1uLFOjAiRafqrXa2weC"},{url:"/_next/static/chunks/pages/_app-75f6107b0260711c.js",revision:"YY1uLFOjAiRafqrXa2weC"},{url:"/_next/static/chunks/pages/_error-9a890acb1e81c3fc.js",revision:"YY1uLFOjAiRafqrXa2weC"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-d1577528c58b920b.js",revision:"YY1uLFOjAiRafqrXa2weC"},{url:"/_next/static/css/23b58ee226f7573c.css",revision:"23b58ee226f7573c"},{url:"/_next/static/css/8c04984e96826ffb.css",revision:"8c04984e96826ffb"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/android/android-launchericon-144-144.png",revision:"d267e624a3e56bec2cf95284acd635ef"},{url:"/android/android-launchericon-192-192.png",revision:"031d60ce842e3f1b21783c6baf1d6764"},{url:"/android/android-launchericon-48-48.png",revision:"7fb76d3865ae974ad2c184b29bc9de64"},{url:"/android/android-launchericon-512-512.png",revision:"6356d275f13d4300508a94de710d189a"},{url:"/android/android-launchericon-72-72.png",revision:"af7e0360b6859e20c77767bc9117e540"},{url:"/android/android-launchericon-96-96.png",revision:"3777809a224a083d5192b9efedce9e43"},{url:"/ios/100.png",revision:"334eff50f1364ace1507edbbf5ffa3ac"},{url:"/ios/1024.png",revision:"6935963de403939b1bab434c2f976f1f"},{url:"/ios/114.png",revision:"a2c63a024bec40663254c4061fa52c00"},{url:"/ios/120.png",revision:"af752f933c355ac9c23ca8af3b79b85c"},{url:"/ios/128.png",revision:"ffa5d15ee0879cd5458a2c1aa661828e"},{url:"/ios/144.png",revision:"d267e624a3e56bec2cf95284acd635ef"},{url:"/ios/152.png",revision:"2575b2a67c9d59f7a9254d0df36d29d1"},{url:"/ios/16.png",revision:"866d02b3df8911648cfbf8610d018c41"},{url:"/ios/167.png",revision:"131d36ed4b36518ee94b367e56960a74"},{url:"/ios/180.png",revision:"56908d21c5beccd2a1ddb2d7116328d0"},{url:"/ios/192.png",revision:"031d60ce842e3f1b21783c6baf1d6764"},{url:"/ios/20.png",revision:"14bbdaf194edb6373f2b2fceaa464d3c"},{url:"/ios/256.png",revision:"b3edffff4dd42809059cf813b04b5f47"},{url:"/ios/29.png",revision:"eb08f442a7e2368c14953fa59c908fc9"},{url:"/ios/32.png",revision:"1511d7e7a5a2295910c8b43b670c7749"},{url:"/ios/40.png",revision:"d70b31cbd420b86a5160a66ed0e3c716"},{url:"/ios/50.png",revision:"abdd74e5cda3ae016895afa2488505e6"},{url:"/ios/512.png",revision:"6356d275f13d4300508a94de710d189a"},{url:"/ios/57.png",revision:"c1a04fab862a3c66b2446cb22fb7b80e"},{url:"/ios/58.png",revision:"628536fb9be19d2f86b449fee8443f1b"},{url:"/ios/60.png",revision:"1b5a3be8851f23200861a06bf473cf1e"},{url:"/ios/64.png",revision:"fdb2b8ce37cc9a7de86b18fe90259635"},{url:"/ios/72.png",revision:"af7e0360b6859e20c77767bc9117e540"},{url:"/ios/76.png",revision:"cd56291d58b519a506f92b14586d9550"},{url:"/ios/80.png",revision:"47bb30441542b88baa1f63f005822831"},{url:"/ios/87.png",revision:"510560dbdf470f4b09c63d285870e1ca"},{url:"/manifest.json",revision:"478214a52290603e589e57d9fe0a6d8d"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"},{url:"/windows11/LargeTile.scale-100.png",revision:"182c73ba930b15f87d7cbecfbc471f85"},{url:"/windows11/LargeTile.scale-125.png",revision:"58eca28072e15177db87d8a52205eaac"},{url:"/windows11/LargeTile.scale-150.png",revision:"4b106a5d9e663de8912558011685ce76"},{url:"/windows11/LargeTile.scale-200.png",revision:"629cf1f0589a0c37cf01626ae3325e42"},{url:"/windows11/LargeTile.scale-400.png",revision:"8a8b996e126966528b70adff468312bc"},{url:"/windows11/SmallTile.scale-100.png",revision:"6a567e82557edd3ac8f590f44eff3a0e"},{url:"/windows11/SmallTile.scale-125.png",revision:"e7efb2fe2cc8b5206ae7922a13a442bc"},{url:"/windows11/SmallTile.scale-150.png",revision:"2f2f81422c9d3ac96ced1da55cfa1310"},{url:"/windows11/SmallTile.scale-200.png",revision:"4f2d8269e1db3ee3e46d046e1d78e5af"},{url:"/windows11/SmallTile.scale-400.png",revision:"57409945fb57d804c9a0395448645902"},{url:"/windows11/SplashScreen.scale-100.png",revision:"d0c5cebf5b85f35cf349a953dddfb3f5"},{url:"/windows11/SplashScreen.scale-125.png",revision:"24315f3dbcd165f3921cab1a6c858a87"},{url:"/windows11/SplashScreen.scale-150.png",revision:"6821c159ed150f804e4e1ade6f350781"},{url:"/windows11/SplashScreen.scale-200.png",revision:"ebf33e7dc99681c6b9d46f6d7c2a6155"},{url:"/windows11/SplashScreen.scale-400.png",revision:"6b5f9be77b363238f9266cf602821599"},{url:"/windows11/Square150x150Logo.scale-100.png",revision:"0ff6a93e5c2c1cd6fb85c389380e8271"},{url:"/windows11/Square150x150Logo.scale-125.png",revision:"afe90c83ed9b587a084013305b4172d7"},{url:"/windows11/Square150x150Logo.scale-150.png",revision:"c24eeeef3bd06fc9c4fa778325d73fa1"},{url:"/windows11/Square150x150Logo.scale-200.png",revision:"9d5bac7e01ae94212a5fd96190be92f3"},{url:"/windows11/Square150x150Logo.scale-400.png",revision:"ab10bdc6cf7c8c48308da4f3d56a63c8"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-16.png",revision:"605b538f4e12f0ad0e7f46c029b0204c"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-20.png",revision:"3998fb7f4b7728d0d3c3c84a35b7ad95"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-24.png",revision:"3f0faf8862ef27f270eeb19a73f0a45d"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-256.png",revision:"d31544ada81f758a22f3bd7c6a084cfb"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-30.png",revision:"33d38c3de3e888bbcea535cd7a2f3f06"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-32.png",revision:"225933036d9fc5beeed39e25c7f4fea9"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-36.png",revision:"58fa41a071ae845c58ec4671b2640670"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-40.png",revision:"05fe30314c846dfa17e3a8f0e6fc1e53"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-44.png",revision:"3f5ea84cb696d2a30a16768b9a4c3ad5"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-48.png",revision:"e4dc0dfe9046e45b7097a998aa868e68"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-60.png",revision:"348fb116984fa5a9f240d522c06ea2ae"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-64.png",revision:"db924b502d0733871581425564d26732"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-72.png",revision:"463acbe2c83147b68f20541b3d95dde8"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-80.png",revision:"e07242f84b00addce29727076b4a5a38"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-96.png",revision:"c79f3583bdc590b2403c4ac5676095dd"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-16.png",revision:"605b538f4e12f0ad0e7f46c029b0204c"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-20.png",revision:"3998fb7f4b7728d0d3c3c84a35b7ad95"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-24.png",revision:"3f0faf8862ef27f270eeb19a73f0a45d"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-256.png",revision:"d31544ada81f758a22f3bd7c6a084cfb"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-30.png",revision:"33d38c3de3e888bbcea535cd7a2f3f06"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-32.png",revision:"225933036d9fc5beeed39e25c7f4fea9"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-36.png",revision:"58fa41a071ae845c58ec4671b2640670"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-40.png",revision:"05fe30314c846dfa17e3a8f0e6fc1e53"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-44.png",revision:"3f5ea84cb696d2a30a16768b9a4c3ad5"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-48.png",revision:"e4dc0dfe9046e45b7097a998aa868e68"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-60.png",revision:"348fb116984fa5a9f240d522c06ea2ae"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-64.png",revision:"db924b502d0733871581425564d26732"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-72.png",revision:"463acbe2c83147b68f20541b3d95dde8"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-80.png",revision:"e07242f84b00addce29727076b4a5a38"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-96.png",revision:"c79f3583bdc590b2403c4ac5676095dd"},{url:"/windows11/Square44x44Logo.scale-100.png",revision:"3f5ea84cb696d2a30a16768b9a4c3ad5"},{url:"/windows11/Square44x44Logo.scale-125.png",revision:"e0b2be05e823bd3f65d25e5d9bcb49f5"},{url:"/windows11/Square44x44Logo.scale-150.png",revision:"1121bda0cf968a878df6862ef060c63b"},{url:"/windows11/Square44x44Logo.scale-200.png",revision:"c855589dc0dd2046063a23c3c62da065"},{url:"/windows11/Square44x44Logo.scale-400.png",revision:"13495f7e379231a85cc7282e58c58cf5"},{url:"/windows11/Square44x44Logo.targetsize-16.png",revision:"605b538f4e12f0ad0e7f46c029b0204c"},{url:"/windows11/Square44x44Logo.targetsize-20.png",revision:"3998fb7f4b7728d0d3c3c84a35b7ad95"},{url:"/windows11/Square44x44Logo.targetsize-24.png",revision:"3f0faf8862ef27f270eeb19a73f0a45d"},{url:"/windows11/Square44x44Logo.targetsize-256.png",revision:"d31544ada81f758a22f3bd7c6a084cfb"},{url:"/windows11/Square44x44Logo.targetsize-30.png",revision:"33d38c3de3e888bbcea535cd7a2f3f06"},{url:"/windows11/Square44x44Logo.targetsize-32.png",revision:"225933036d9fc5beeed39e25c7f4fea9"},{url:"/windows11/Square44x44Logo.targetsize-36.png",revision:"58fa41a071ae845c58ec4671b2640670"},{url:"/windows11/Square44x44Logo.targetsize-40.png",revision:"05fe30314c846dfa17e3a8f0e6fc1e53"},{url:"/windows11/Square44x44Logo.targetsize-44.png",revision:"3f5ea84cb696d2a30a16768b9a4c3ad5"},{url:"/windows11/Square44x44Logo.targetsize-48.png",revision:"e4dc0dfe9046e45b7097a998aa868e68"},{url:"/windows11/Square44x44Logo.targetsize-60.png",revision:"348fb116984fa5a9f240d522c06ea2ae"},{url:"/windows11/Square44x44Logo.targetsize-64.png",revision:"db924b502d0733871581425564d26732"},{url:"/windows11/Square44x44Logo.targetsize-72.png",revision:"463acbe2c83147b68f20541b3d95dde8"},{url:"/windows11/Square44x44Logo.targetsize-80.png",revision:"e07242f84b00addce29727076b4a5a38"},{url:"/windows11/Square44x44Logo.targetsize-96.png",revision:"c79f3583bdc590b2403c4ac5676095dd"},{url:"/windows11/StoreLogo.scale-100.png",revision:"abdd74e5cda3ae016895afa2488505e6"},{url:"/windows11/StoreLogo.scale-125.png",revision:"a789794be25f6afdae87b6e157e98a0d"},{url:"/windows11/StoreLogo.scale-150.png",revision:"5e125abde693957f9bfca98b9c0d3043"},{url:"/windows11/StoreLogo.scale-200.png",revision:"334eff50f1364ace1507edbbf5ffa3ac"},{url:"/windows11/StoreLogo.scale-400.png",revision:"adf624bf051678c076c78de37c629c51"},{url:"/windows11/Wide310x150Logo.scale-100.png",revision:"65bbdad0610c1d82a93386f454b1c4fb"},{url:"/windows11/Wide310x150Logo.scale-125.png",revision:"b9d19d97a97eb93ed7395a0fd44d8186"},{url:"/windows11/Wide310x150Logo.scale-150.png",revision:"aa41843d54a05c10b86934f84d47b613"},{url:"/windows11/Wide310x150Logo.scale-200.png",revision:"d0c5cebf5b85f35cf349a953dddfb3f5"},{url:"/windows11/Wide310x150Logo.scale-400.png",revision:"ebf33e7dc99681c6b9d46f6d7c2a6155"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:i,state:n})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
