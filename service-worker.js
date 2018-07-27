/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "e7757c0cd1f886060f2e9be6bf25a1b0"
  },
  {
    "url": "assets/css/0.styles.11a5eef9.css",
    "revision": "6fd829cb6f73920640319b993299ac5d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.ea010887.js",
    "revision": "2402e7b40bef5a6de37856d3c0eb6223"
  },
  {
    "url": "assets/js/3.b5fc4edf.js",
    "revision": "c238ba4c02bbffb82c2402d3866557ff"
  },
  {
    "url": "assets/js/4.5249ed66.js",
    "revision": "c2c77d46afe42cdf5c92ced0a639a45c"
  },
  {
    "url": "assets/js/5.a2595fca.js",
    "revision": "08aec089c3368dbd17ab1f74d6cb3370"
  },
  {
    "url": "assets/js/6.a2775793.js",
    "revision": "486e2f17995a18d549e21140ef53dcd6"
  },
  {
    "url": "assets/js/7.191f5519.js",
    "revision": "751f8e4f506b63bcfae3fdb8e59ec5e8"
  },
  {
    "url": "assets/js/app.358c0990.js",
    "revision": "0364a0e496da1d3d12023058b26a2e57"
  },
  {
    "url": "blog/DOM.html",
    "revision": "71f229855e23a38b8b1cfe6e913fa374"
  },
  {
    "url": "blog/index.html",
    "revision": "474c7adf83e37c45c247d9451e785006"
  },
  {
    "url": "blog/Jenkins.html",
    "revision": "65297c55c01a535ce1d2e9950f2da6fe"
  },
  {
    "url": "blog/mvvm.html",
    "revision": "267fe71ed103bf51edaf72de94ef4b1c"
  },
  {
    "url": "index.html",
    "revision": "84e1bd26674d65d7e3f1ef7d95cb3dcf"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
