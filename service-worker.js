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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "057a55287b84dbf2f542053c86f4e7b5"
  },
  {
    "url": "assets/css/0.styles.12e12611.css",
    "revision": "f88c49ea53feedd53e1d3ce848abd4fa"
  },
  {
    "url": "assets/img/accordion.c53c2160.png",
    "revision": "c53c2160beaff1bf09e2d7c68b9c428a"
  },
  {
    "url": "assets/img/active_plugins.f753cef9.png",
    "revision": "f753cef93c12b2ac64a11839ad158459"
  },
  {
    "url": "assets/img/background.be51f66e.png",
    "revision": "be51f66ead40f19762c1499a260dfddc"
  },
  {
    "url": "assets/img/button_set.e1c5f873.png",
    "revision": "e1c5f87341d8616302a9e875c98e5009"
  },
  {
    "url": "assets/img/checkbox.8ff588d8.png",
    "revision": "8ff588d87c0766105a694c700e80868d"
  },
  {
    "url": "assets/img/codemirror.c0516047.png",
    "revision": "c05160471955a0426f8da4a5d0b46087"
  },
  {
    "url": "assets/img/color_gradient.3bcd0cb8.png",
    "revision": "3bcd0cb817006399542865e811551825"
  },
  {
    "url": "assets/img/color_rgba.a7a2975a.png",
    "revision": "a7a2975aac49bf53bc9a1621a49afc18"
  },
  {
    "url": "assets/img/color_schemes_picker_color.4506076b.png",
    "revision": "4506076b88c5cc5df3ee4708df433466"
  },
  {
    "url": "assets/img/color_schemes_picker.5ca88a95.png",
    "revision": "5ca88a9593b59d6ce795f3cf5119536f"
  },
  {
    "url": "assets/img/color_schemes.2b73ff48.png",
    "revision": "2b73ff48d1ac4ff299eba52827647beb"
  },
  {
    "url": "assets/img/color.f1100a7f.png",
    "revision": "f1100a7f0b926c3e03a562283b0b12e3"
  },
  {
    "url": "assets/img/copy.461f2286.svg",
    "revision": "461f22861ca3b3207f41f4914639140e"
  },
  {
    "url": "assets/img/editor.0e39ed42.png",
    "revision": "0e39ed428e8debd9d069bd7fdc0f2249"
  },
  {
    "url": "assets/img/gallery.db07115f.png",
    "revision": "db07115fa418bb7e697ebad58dfec802"
  },
  {
    "url": "assets/img/google_maps.60a06a00.png",
    "revision": "60a06a000a4013727f40f8b4055f4b0a"
  },
  {
    "url": "assets/img/hints_alignment.63b7effc.jpg",
    "revision": "63b7effc1a8575d280f8f6b730f74378"
  },
  {
    "url": "assets/img/hints.f21699b3.png",
    "revision": "f21699b328a9bd6965a2e5ad998564b4"
  },
  {
    "url": "assets/img/icon_select.fcf0619c.png",
    "revision": "fcf0619c47a2ab496846458980a2a734"
  },
  {
    "url": "assets/img/image_select.4e71f892.png",
    "revision": "4e71f89281b32d8817ccfc329e7917c7"
  },
  {
    "url": "assets/img/imex.ffc40e5c.png",
    "revision": "ffc40e5c7617e49405e8159e1dc91a39"
  },
  {
    "url": "assets/img/media.157e2614.png",
    "revision": "157e26141bcec2553dfa08a2d284139b"
  },
  {
    "url": "assets/img/multi_text.29cbde62.png",
    "revision": "29cbde62bdeb76a9e52b82521db8ae6d"
  },
  {
    "url": "assets/img/palette_color.eeac131a.png",
    "revision": "eeac131a92b1ed2408981db8791c35a7"
  },
  {
    "url": "assets/img/radio.209501f2.png",
    "revision": "209501f2fa4cb72bd6febaabbfcc144a"
  },
  {
    "url": "assets/img/raw_full_width.52d22ecf.png",
    "revision": "52d22ecf53886f0d9d8a4f20c18c559f"
  },
  {
    "url": "assets/img/raw_sectioned.cdd956b1.png",
    "revision": "cdd956b1f2fd197b6e87508b3a585730"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/section.309ec967.png",
    "revision": "309ec967c4769899b632e64e7c7caad9"
  },
  {
    "url": "assets/img/slider.82e0bf9a.png",
    "revision": "82e0bf9a2183def90b87728b42f4c789"
  },
  {
    "url": "assets/img/slides.8b60ff5a.png",
    "revision": "8b60ff5a17111c97f8cdb058739a903c"
  },
  {
    "url": "assets/img/support_hash.e4e84d3d.png",
    "revision": "e4e84d3d9b5219b4a91e657de563b8c5"
  },
  {
    "url": "assets/img/text-multidimensional.9034ca24.png",
    "revision": "9034ca24d0bda48c0533b362fdfc85b2"
  },
  {
    "url": "assets/img/text-simple.08f2a147.png",
    "revision": "08f2a14727cb26b3bd4778dc7c17b1ec"
  },
  {
    "url": "assets/img/textarea.8550ef5d.png",
    "revision": "8550ef5da1606f4da02ef25d1a5aec70"
  },
  {
    "url": "assets/img/typography.9680d7a0.png",
    "revision": "9680d7a0bc5f1b5cf2a4ee160c660637"
  },
  {
    "url": "assets/js/10.92bcb47c.js",
    "revision": "796da6cf482283de4832a426203998b4"
  },
  {
    "url": "assets/js/100.6ba6500d.js",
    "revision": "a6575011fb95fc8ee90cf1c5c0265dae"
  },
  {
    "url": "assets/js/101.b37b8359.js",
    "revision": "e4385d3c70082186d229c4ba9b756b12"
  },
  {
    "url": "assets/js/102.5706a147.js",
    "revision": "e6b2e26a882e3abc86e754e49f9bf625"
  },
  {
    "url": "assets/js/103.5c534e60.js",
    "revision": "5cfbd7974634939e86d0b44e1d3b12d2"
  },
  {
    "url": "assets/js/104.3a1aee0c.js",
    "revision": "efd428fdb1086c0c5ac207fd1982e9a6"
  },
  {
    "url": "assets/js/105.ab9d9aff.js",
    "revision": "f1c19c6cf3f8dcfd261103fd4c94dfcc"
  },
  {
    "url": "assets/js/106.c6295538.js",
    "revision": "28bf39b1d21ff690ae77ece1fde4a6bd"
  },
  {
    "url": "assets/js/107.9f5ece96.js",
    "revision": "b6888ff1347518d13cfc2ba213d87268"
  },
  {
    "url": "assets/js/108.2e1b77b0.js",
    "revision": "d6914864306cf4c6ad4c8f885ae93ffc"
  },
  {
    "url": "assets/js/109.4700d7e8.js",
    "revision": "76433b7c49ba30a9dbd3168859e15b3b"
  },
  {
    "url": "assets/js/11.ae23bb65.js",
    "revision": "67833acc6d301b35775df6587ed02b52"
  },
  {
    "url": "assets/js/110.a5865133.js",
    "revision": "35527bac63c9f898251bdc93e2d8a08c"
  },
  {
    "url": "assets/js/12.4f712508.js",
    "revision": "30249ddb7d3d283109b3df7885c0b9b5"
  },
  {
    "url": "assets/js/13.465418c8.js",
    "revision": "a4fa36b2934bedb161f35a3eb21ea4e6"
  },
  {
    "url": "assets/js/14.e5c43232.js",
    "revision": "82ac9dc81bc145d8d76878de5efc79d1"
  },
  {
    "url": "assets/js/15.40ea6622.js",
    "revision": "1de0261c6ea6344cd579bef80163b813"
  },
  {
    "url": "assets/js/16.af40aeb9.js",
    "revision": "b4d90afb6adeb2eea02c3e846c9611a3"
  },
  {
    "url": "assets/js/17.0b09ca82.js",
    "revision": "ace32b602e936c81ac038612e44476d5"
  },
  {
    "url": "assets/js/18.d34ceffc.js",
    "revision": "bda84db0cbed3a1622f67a91f0c7cbc4"
  },
  {
    "url": "assets/js/19.a5678237.js",
    "revision": "fb2a08898c3db491add4165fd1d690c1"
  },
  {
    "url": "assets/js/20.bd819338.js",
    "revision": "100d00a56454424cced3145091097077"
  },
  {
    "url": "assets/js/21.470cdf2f.js",
    "revision": "41596855a4f53705137089efaed47fa0"
  },
  {
    "url": "assets/js/22.f7c65635.js",
    "revision": "7875fd04432cd8ad241a7666e03850e7"
  },
  {
    "url": "assets/js/23.b46c2861.js",
    "revision": "e0f56049837f579caa7f9f8e1808fa78"
  },
  {
    "url": "assets/js/24.b8360d7c.js",
    "revision": "a14941bcb7e6b078ab6b916b758f4d32"
  },
  {
    "url": "assets/js/25.32d8b410.js",
    "revision": "5d66e5a8891f85c57178ae59bf03f728"
  },
  {
    "url": "assets/js/26.bd7b7a0d.js",
    "revision": "eac0aa840a1fc15b67aa2cb31be4758c"
  },
  {
    "url": "assets/js/27.a88a232e.js",
    "revision": "3554ea04c6ccb27fc0bd97624f32a69a"
  },
  {
    "url": "assets/js/28.dc74aba8.js",
    "revision": "b5fcc89973bf6d4585d04edd0eb5678d"
  },
  {
    "url": "assets/js/29.acd3d1d2.js",
    "revision": "897b2d7e2fb1fc75b4e6c520406b28a3"
  },
  {
    "url": "assets/js/3.8b41d974.js",
    "revision": "6202cbdf30c2f1eca4f4ea6a84374f9d"
  },
  {
    "url": "assets/js/30.e24d22d8.js",
    "revision": "153d887f3b9a9c20b2f4baee4002175d"
  },
  {
    "url": "assets/js/31.0c59ce6c.js",
    "revision": "c1f61a8a27951f3f831aa7808c8d6b1b"
  },
  {
    "url": "assets/js/32.1e425496.js",
    "revision": "697e9dce95d828c7ba22b21184b1063e"
  },
  {
    "url": "assets/js/33.93c4062c.js",
    "revision": "22f52b674a3cfbd4a91b93ce728d2f4e"
  },
  {
    "url": "assets/js/34.7084348b.js",
    "revision": "cd535c27760d3e230e27573b929bda2b"
  },
  {
    "url": "assets/js/35.6756d09f.js",
    "revision": "e9d67123d6dc5b28f5222a1c7280a9cd"
  },
  {
    "url": "assets/js/36.adf4e114.js",
    "revision": "8a61f4cfe9c4ab48fe6907564c9bc7ad"
  },
  {
    "url": "assets/js/37.d9b4fde1.js",
    "revision": "bc4d0ef6de510f97f3118ef4547bb964"
  },
  {
    "url": "assets/js/38.aead4c4f.js",
    "revision": "c223fddc051a726b6887a533676db818"
  },
  {
    "url": "assets/js/39.5fb43f0b.js",
    "revision": "fa4fd2620d004d1b6b1b80b2e34eb7d5"
  },
  {
    "url": "assets/js/4.1557fc26.js",
    "revision": "5dc3f7c85f5598322db2375ecbe82458"
  },
  {
    "url": "assets/js/40.0c77d024.js",
    "revision": "ae7cee8cd54784b781d4630e75375d6b"
  },
  {
    "url": "assets/js/41.c170a701.js",
    "revision": "8d1e1f7a2e8d2ae08dcda9ccea170f2e"
  },
  {
    "url": "assets/js/42.299ffe85.js",
    "revision": "7163818d8d8af8b5506da45508e4fae7"
  },
  {
    "url": "assets/js/43.1de3acf7.js",
    "revision": "d9d142da46182d47ce79e2b3459a6fab"
  },
  {
    "url": "assets/js/44.c8a8cb5f.js",
    "revision": "6c05c6ad8ca7726fcf2783c8d19f175c"
  },
  {
    "url": "assets/js/45.611e2a2a.js",
    "revision": "2427e64aac67c243f4a34025a2ba9579"
  },
  {
    "url": "assets/js/46.e25c472a.js",
    "revision": "cf5485c1bc6399ce60a964f4655e2934"
  },
  {
    "url": "assets/js/47.2d585874.js",
    "revision": "0e2ff69ac131fd5dbf1ad6ad2647bf13"
  },
  {
    "url": "assets/js/48.d21f1238.js",
    "revision": "d9111b5cc2614652608f9c4b4c56e392"
  },
  {
    "url": "assets/js/49.9b1d1b63.js",
    "revision": "e413bcc50d864d0fd47612a5a2630e23"
  },
  {
    "url": "assets/js/5.d89a144c.js",
    "revision": "762c77518c31402ff0f8acbec3fcaa7b"
  },
  {
    "url": "assets/js/50.ad95889b.js",
    "revision": "56952d360afaa110348bd0ee129a7d81"
  },
  {
    "url": "assets/js/51.f110b994.js",
    "revision": "00985a70ed37fad23a115df3ad1a417d"
  },
  {
    "url": "assets/js/52.1e6e1e03.js",
    "revision": "a1acbe3e87c64e60d4048137de1909c1"
  },
  {
    "url": "assets/js/53.0f17f6c9.js",
    "revision": "0f2739ec4c685563175a9668d59e16e9"
  },
  {
    "url": "assets/js/54.4ed15413.js",
    "revision": "6b49d67e3dca8787293891640df6f250"
  },
  {
    "url": "assets/js/55.45df7e57.js",
    "revision": "eb9641b52c2fe04d0bda74eb47f3c119"
  },
  {
    "url": "assets/js/56.730f74a3.js",
    "revision": "8d7fc33c12e4b1d651efac5cb1958678"
  },
  {
    "url": "assets/js/57.d58ebe70.js",
    "revision": "78c90c2c0f4ff8a701ef9c599555184d"
  },
  {
    "url": "assets/js/58.d01b78c1.js",
    "revision": "a345572b105b5090114dd81344d35c18"
  },
  {
    "url": "assets/js/59.fe4057d9.js",
    "revision": "aa1f9879bd4417f26b084e07713de71e"
  },
  {
    "url": "assets/js/6.d89c78d0.js",
    "revision": "30fc3413e2e6ffda6aa9173b35399920"
  },
  {
    "url": "assets/js/60.8b4feb46.js",
    "revision": "c74e4349bc9f22fe7295418bdf42b175"
  },
  {
    "url": "assets/js/61.4dc45863.js",
    "revision": "75fdc2f5dce5ab268d1bb6f217b400eb"
  },
  {
    "url": "assets/js/62.fa0213a4.js",
    "revision": "68d2a4c35974508415613c85c01b2ca9"
  },
  {
    "url": "assets/js/63.3101b6e2.js",
    "revision": "da11e0f6700a11c5b1107d6b3dad64b9"
  },
  {
    "url": "assets/js/64.8e2e0ec9.js",
    "revision": "8834675a8d070d68ad57642661c96b52"
  },
  {
    "url": "assets/js/65.f9267e3e.js",
    "revision": "994a5b955e07dcff53395f006f7ba447"
  },
  {
    "url": "assets/js/66.3adb18a2.js",
    "revision": "0c9bf3ad074c596292f8cb94675ce7d2"
  },
  {
    "url": "assets/js/67.5c9161eb.js",
    "revision": "676b4ab0af112d6d34c014fcd44c8a15"
  },
  {
    "url": "assets/js/68.ac753e4d.js",
    "revision": "cbab2f5c5f1367e7b760f0aee3b469ea"
  },
  {
    "url": "assets/js/69.59342f08.js",
    "revision": "46eea361c57d09ac75deb1c19614387a"
  },
  {
    "url": "assets/js/7.e4e83a3a.js",
    "revision": "aa26d987f9f975875c00813b3d47c3ac"
  },
  {
    "url": "assets/js/70.8c954d9f.js",
    "revision": "2a0f07ff8dda4292aef51335466a70d4"
  },
  {
    "url": "assets/js/71.c75aef4e.js",
    "revision": "c2633afc99386cb94610aae6d178c117"
  },
  {
    "url": "assets/js/72.e8346f74.js",
    "revision": "0bc15681f6747a6b7e4585a05df1f4e9"
  },
  {
    "url": "assets/js/73.09fe9ab9.js",
    "revision": "0f73237eb51aff8d1c626379e2a21a8d"
  },
  {
    "url": "assets/js/74.4518c3d6.js",
    "revision": "09ffa18b9c00b331ad39d090087aaebf"
  },
  {
    "url": "assets/js/75.f23963cf.js",
    "revision": "2091d6e5dba2614cccb5feba154d121a"
  },
  {
    "url": "assets/js/76.b1ff6e96.js",
    "revision": "534b0550ae13c700b3981db62da67876"
  },
  {
    "url": "assets/js/77.be38fa15.js",
    "revision": "99aeaf06cb2fcdc9a6a16bb6756a3b0d"
  },
  {
    "url": "assets/js/78.a181fdb8.js",
    "revision": "2a769325e8980c938d4d160eaae5244d"
  },
  {
    "url": "assets/js/79.3d7636cc.js",
    "revision": "0e8721b67d7b45c763959392b8f7b1d3"
  },
  {
    "url": "assets/js/8.2bb06836.js",
    "revision": "cb032ae853c4e6d0fd7afec9bf3db5bd"
  },
  {
    "url": "assets/js/80.b6895cbb.js",
    "revision": "8b3a6f73377994b165b987c7f0f8858a"
  },
  {
    "url": "assets/js/81.bf10ddb8.js",
    "revision": "47a46487be250d1a96415a8122b5555b"
  },
  {
    "url": "assets/js/82.f528cea1.js",
    "revision": "8dd08ff14e44b954589c9234bd1f3565"
  },
  {
    "url": "assets/js/83.8178ab79.js",
    "revision": "cdd4a435eb865b4a8553e5e3075dae45"
  },
  {
    "url": "assets/js/84.d94dd6ea.js",
    "revision": "5e95161dc0817a38815230fc6173cfdb"
  },
  {
    "url": "assets/js/85.d0c03f76.js",
    "revision": "23881c785fde3417eb6bd1e0be34e61e"
  },
  {
    "url": "assets/js/86.f288ad91.js",
    "revision": "0e116441a533f20d0be7fa24c498cea4"
  },
  {
    "url": "assets/js/87.b1d4c198.js",
    "revision": "29d233d61398108ef97e5fea239a0017"
  },
  {
    "url": "assets/js/88.ba5c3727.js",
    "revision": "fc2f410a769c9166d29bffe5b2720ac4"
  },
  {
    "url": "assets/js/89.6799ba26.js",
    "revision": "787aeb6b7770222ab93afca1bf5396fa"
  },
  {
    "url": "assets/js/9.2c878e51.js",
    "revision": "5c1b3302b42aa3b008ff92b05f8e4dbd"
  },
  {
    "url": "assets/js/90.b6176985.js",
    "revision": "1513e850bd309ecebeccc3bee5d487e4"
  },
  {
    "url": "assets/js/91.7f81e264.js",
    "revision": "833b3868cf515eeca4671a4a741a2ba9"
  },
  {
    "url": "assets/js/92.942470be.js",
    "revision": "f2c2806649f61d84b879f3f5ee2db690"
  },
  {
    "url": "assets/js/93.59a1361b.js",
    "revision": "8cd0847cec4c024423d91b4f1e705349"
  },
  {
    "url": "assets/js/94.6f3f3a1c.js",
    "revision": "ee57f7a00f3602c702a59e59e3520124"
  },
  {
    "url": "assets/js/95.f9b52341.js",
    "revision": "c1838a97d30fceff5b13349916c8b485"
  },
  {
    "url": "assets/js/96.d827fc7d.js",
    "revision": "031d4d7dcbcd8d455f014e60b950c210"
  },
  {
    "url": "assets/js/97.a2f71208.js",
    "revision": "3905f6fed6c091662b7a353215601332"
  },
  {
    "url": "assets/js/98.8989c819.js",
    "revision": "93f0939ea8272f944eb3856f66ebc0b1"
  },
  {
    "url": "assets/js/99.d17caf1d.js",
    "revision": "e9792e78e6ee6b6288af07635170dc54"
  },
  {
    "url": "assets/js/app.9009e7e8.js",
    "revision": "a72c90b4ff1a64fab5e3dac55960d86b"
  },
  {
    "url": "assets/js/vendors~docsearch.9c05f166.js",
    "revision": "73a072600e24d64b16856ce08ee36b28"
  },
  {
    "url": "configuration/api.html",
    "revision": "3cf22dc2458b05535acbc5b2286ea3be"
  },
  {
    "url": "configuration/fields/arguments.html",
    "revision": "f080aa7d2ef81ed5e014d348e36092f0"
  },
  {
    "url": "configuration/fields/attributes.html",
    "revision": "d3cfab257acb47ca672cf8f0d5ad4e4c"
  },
  {
    "url": "configuration/fields/compiler.html",
    "revision": "3622bd4eebb7d13dcaf072c178a5b002"
  },
  {
    "url": "configuration/fields/data.html",
    "revision": "aeaab54c0b14fb7c82fc912666970af1"
  },
  {
    "url": "configuration/fields/hints.html",
    "revision": "39ab764cb54258a47bfa3bda331c0eb0"
  },
  {
    "url": "configuration/fields/output-variables.html",
    "revision": "4e56fc82abd7b4721b7ec0bbd515cefe"
  },
  {
    "url": "configuration/fields/output.html",
    "revision": "40b705ca4488c54bde2d83edb37b5c9d"
  },
  {
    "url": "configuration/fields/permissions.html",
    "revision": "786077183be75f1a8ee77c85b7fce8ef"
  },
  {
    "url": "configuration/fields/required.html",
    "revision": "aac9195dca78b8fecdfba557b05a276a"
  },
  {
    "url": "configuration/fields/validate.html",
    "revision": "7d364fffd3cd9ce67103a12a83c492ea"
  },
  {
    "url": "configuration/global_arguments.html",
    "revision": "ba1575645d2990143551621111023470"
  },
  {
    "url": "configuration/hooks/hooks-action.html",
    "revision": "d18ff6c9e17d21943e58c8fdb3bc88cb"
  },
  {
    "url": "configuration/hooks/hooks-filter.html",
    "revision": "8a8d47171731d52130b1a23da1eb109f"
  },
  {
    "url": "configuration/index.html",
    "revision": "880feb1d6fcc57d0745bc7b614bf81e9"
  },
  {
    "url": "configuration/objects/field.html",
    "revision": "a6fa1dd495bc2d9dd348b895b4cb268e"
  },
  {
    "url": "configuration/objects/section.html",
    "revision": "016279e00f8001146bc369686f973efd"
  },
  {
    "url": "contributing.html",
    "revision": "40622b06b65e2ceece752923e577886b"
  },
  {
    "url": "core-extensions/customizer-lite.html",
    "revision": "5dd4e463046a773b8531f2c5ecf9ed9e"
  },
  {
    "url": "core-extensions/import-export.html",
    "revision": "1e3a254739dfb098b8e02803bcc8f94e"
  },
  {
    "url": "core-extensions/index.html",
    "revision": "873a7e4743d4b3c2af2d0074a4ae0196"
  },
  {
    "url": "core-extensions/metaboxes-lite.html",
    "revision": "5f04553545adb068cb845be988f11563"
  },
  {
    "url": "core-extensions/options-object.html",
    "revision": "154231beb21c211a0ed57e4fcbb9b029"
  },
  {
    "url": "core-fields/ace-editor.html",
    "revision": "20b77dc7ae09bb963733408397fe0eb0"
  },
  {
    "url": "core-fields/background.html",
    "revision": "f4cf9f5bf3f6f8a608f26813d86c85cd"
  },
  {
    "url": "core-fields/border.html",
    "revision": "d1f0d441e2b07d1e57fc1ce16f9cb1c6"
  },
  {
    "url": "core-fields/button-set.html",
    "revision": "f7290b043cc973652f17f31d9f3cdbff"
  },
  {
    "url": "core-fields/checkbox.html",
    "revision": "74092554cdf3aca4742f4e4407cdcecd"
  },
  {
    "url": "core-fields/color-gradient.html",
    "revision": "35745023974203d61e3c7e2a59da07c4"
  },
  {
    "url": "core-fields/color-rgba.html",
    "revision": "bfe43626814dcd5902dc79ee646a7520"
  },
  {
    "url": "core-fields/color.html",
    "revision": "77f97594d011d38226b7425de1a8acee"
  },
  {
    "url": "core-fields/date.html",
    "revision": "3155e93ca95bee1e99b47b72119c950b"
  },
  {
    "url": "core-fields/dimensions.html",
    "revision": "c20cc87514b9f1b7da14b80013dbe7ff"
  },
  {
    "url": "core-fields/divide.html",
    "revision": "229431adc3bcbcec1f4210df70b3ee61"
  },
  {
    "url": "core-fields/editor.html",
    "revision": "e895b92f10e063023f0174959d14b68e"
  },
  {
    "url": "core-fields/gallery.html",
    "revision": "cb17b5f3d61b743b2c5407c3da5d833d"
  },
  {
    "url": "core-fields/image-select.html",
    "revision": "fd42d02bd1fe22702a0814197749ead8"
  },
  {
    "url": "core-fields/index.html",
    "revision": "3b5b82dd255df46549a7aa567533842c"
  },
  {
    "url": "core-fields/info.html",
    "revision": "aa7530df14e208e23e6e7301a3bade1c"
  },
  {
    "url": "core-fields/link-color.html",
    "revision": "f2013c3884041b96cebb31ad3b52d980"
  },
  {
    "url": "core-fields/media.html",
    "revision": "5ad082f432be8ce60424bc0db5fdfb46"
  },
  {
    "url": "core-fields/multi-text.html",
    "revision": "384d541e205439c54071c0e94e0e7bde"
  },
  {
    "url": "core-fields/palette-color.html",
    "revision": "1a6a5612c3648b06f179a50525c30d4f"
  },
  {
    "url": "core-fields/password.html",
    "revision": "caa6441d30e0b4c78ee090c7d0bb72a5"
  },
  {
    "url": "core-fields/radio.html",
    "revision": "6c9838a731cac5451a4aec7fa6afa119"
  },
  {
    "url": "core-fields/raw.html",
    "revision": "61b533b90ab73226dc3341ce8f12dfd2"
  },
  {
    "url": "core-fields/section.html",
    "revision": "f8b038a9d854452c6f67ecd7c6b33559"
  },
  {
    "url": "core-fields/select-image.html",
    "revision": "c7a1bcf84c01ea86c27f40222c6b9eff"
  },
  {
    "url": "core-fields/select.html",
    "revision": "e50057f055716d9fe0653a4f468b60a6"
  },
  {
    "url": "core-fields/slider.html",
    "revision": "dbca78607f0ff2d10e0999f159787c4e"
  },
  {
    "url": "core-fields/slides.html",
    "revision": "1634c820c45026c2a2cf7c8fdcaad23a"
  },
  {
    "url": "core-fields/sortable.html",
    "revision": "8324bfaf17de18c717cf619e4dfec164"
  },
  {
    "url": "core-fields/sorter.html",
    "revision": "5c0b465bd8749b00a7ccca0bc95d873c"
  },
  {
    "url": "core-fields/spacing.html",
    "revision": "534facbb74e26bd75f8b470f10a42fe4"
  },
  {
    "url": "core-fields/spinner.html",
    "revision": "d2dd5b48fd6972b2c161ea9363f07178"
  },
  {
    "url": "core-fields/switch.html",
    "revision": "16da95d4c818cea9ff3c380de1564eb8"
  },
  {
    "url": "core-fields/text.html",
    "revision": "164c3e0741016ed2b31dfa062c5015dc"
  },
  {
    "url": "core-fields/textarea.html",
    "revision": "18b058e5c078bbb376cd6cba07789404"
  },
  {
    "url": "core-fields/typography.html",
    "revision": "d0a8054ba1f1717ba5865a53f313d7a0"
  },
  {
    "url": "core/index.html",
    "revision": "e455e65feacb4775304669b9f2a4d0d4"
  },
  {
    "url": "faq/index.html",
    "revision": "1d555e7e16f69a61a39bf375e1f4b1a3"
  },
  {
    "url": "guides/advanced/embedding-redux.html",
    "revision": "ae982e8aa82508397bf542a5acfe647c"
  },
  {
    "url": "guides/advanced/health-status-report.html",
    "revision": "2649c6892d73872647044205655d38f2"
  },
  {
    "url": "guides/advanced/increasing-the-memory-limit.html",
    "revision": "d923f2120aca681b3cae1df074b3a532"
  },
  {
    "url": "guides/advanced/overriding-default-css.html",
    "revision": "6e3c6855c895fafde0d6f99319028dd5"
  },
  {
    "url": "guides/advanced/panel-templates.html",
    "revision": "476bf2cbece45f04148661f43d0cc607"
  },
  {
    "url": "guides/advanced/updating-an-option-manually.html",
    "revision": "b9505bdc243f90177d0a43b72b2a1d30"
  },
  {
    "url": "guides/advanced/using-another-icon-web-font.html",
    "revision": "0369525fd1c3eaa93b606c6ae64f7368"
  },
  {
    "url": "guides/advanced/wp-filesystem-proxy.html",
    "revision": "ada167d1df4b268689368820247bf875"
  },
  {
    "url": "guides/advanced/wpml-integration.html",
    "revision": "ce39972cf8de2999fd3adf7e83923855"
  },
  {
    "url": "guides/basics/core-concepts.html",
    "revision": "d5d9386f3dfee6b7b5863733d0ab8579"
  },
  {
    "url": "guides/basics/customizer-integration.html",
    "revision": "10e232ed15a56ce4b64013ada3ea67b5"
  },
  {
    "url": "guides/basics/generating-a-support-hash.html",
    "revision": "feae08837b4f0df2e9b5779761585aa8"
  },
  {
    "url": "guides/basics/getting-started.html",
    "revision": "4fb993ef927f5ab252dbd4154b2d7cc3"
  },
  {
    "url": "guides/basics/install.html",
    "revision": "a75c0db7167327eda92d03451fcd37fe"
  },
  {
    "url": "guides/basics/removing-demo-mode-notice.html",
    "revision": "df5cf70308cb2b6617e565d6b7fbbb02"
  },
  {
    "url": "guides/basics/support-defined.html",
    "revision": "a12deddff9843a969dbc5297ed345192"
  },
  {
    "url": "guides/basics/using-extensions.html",
    "revision": "59ec053ea2ab7b2bf1f6a729638b44f4"
  },
  {
    "url": "guides/basics/using-tgm-plugin-activation.html",
    "revision": "151ee88bd252c9a852ffac88c691a4a9"
  },
  {
    "url": "guides/index.html",
    "revision": "3d8db4823e178d17a7df14a9da895b85"
  },
  {
    "url": "guides/other/ide-snippets-and-templates.html",
    "revision": "c3ba9f1e666f931ab9d16c653d5f2fab"
  },
  {
    "url": "guides/other/migration-guide.html",
    "revision": "34ab879a39892481d41276cf8ce42301"
  },
  {
    "url": "guides/other/redux-converter.html",
    "revision": "88d412540b8f6024034b9e00ed19b9d3"
  },
  {
    "url": "guides/other/theme-check-warnings-and-errors.html",
    "revision": "6917f884aa0793410d811f54694748c9"
  },
  {
    "url": "guides/other/wordpress.org-submissions.html",
    "revision": "25ff2401f7049460919b317ca0493e36"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "c47a27aa861dad9cda10f0f7e80e1858"
  },
  {
    "url": "logo.png",
    "revision": "31e024deb70868393ff0b974e35d1e34"
  },
  {
    "url": "premium/accordion.html",
    "revision": "30c5216eb0ee7213408aac8ab58bbbfa"
  },
  {
    "url": "premium/codemirror.html",
    "revision": "94b744978dc72216e873819ced679303"
  },
  {
    "url": "premium/color-schemes.html",
    "revision": "307648dabcf749c7f377ce20d730d5c4"
  },
  {
    "url": "premium/css-layout.html",
    "revision": "9a8799b6c98b28f8c92bc2182c7172e9"
  },
  {
    "url": "premium/custom-fonts.html",
    "revision": "d7e95526cac770fe5e889fd9af20c294"
  },
  {
    "url": "premium/date-time-picker.html",
    "revision": "c87af0e7b43dd37b14710d54c4a75865"
  },
  {
    "url": "premium/google-maps.html",
    "revision": "2f7fbbb18ca159ba8883adbd4aff4ef4"
  },
  {
    "url": "premium/icon-select.html",
    "revision": "0bb724543aa5e48c614cb5f432cf72dd"
  },
  {
    "url": "premium/index.html",
    "revision": "e3054f7e6d56bf9221a1eea829d0f2cc"
  },
  {
    "url": "premium/js-button.html",
    "revision": "86398abbd9b5f21e1c6b0e524d12f980"
  },
  {
    "url": "premium/metaboxes.html",
    "revision": "48798c13c28d0061f869177db02d23cd"
  },
  {
    "url": "premium/multi-media.html",
    "revision": "2f8555122c84b65314e400422b0a5877"
  },
  {
    "url": "premium/repeater.html",
    "revision": "07100f5d807e35559e8f559c7fe76174"
  },
  {
    "url": "premium/social-profiles.html",
    "revision": "20c6e5a1b6e14132ed9a0a0f2ff9da34"
  },
  {
    "url": "premium/taxonomy.html",
    "revision": "966c57d7eedf9458e8a8c270c75f629b"
  },
  {
    "url": "redux-2x.png",
    "revision": "a3c7a8b9bdaf7c90d53cb80df4ddf319"
  },
  {
    "url": "redux.png",
    "revision": "73ee94cef04626971d17266e344ba958"
  },
  {
    "url": "top_logo-2x.png",
    "revision": "5fa8e8952709be452e415f738b0f4c15"
  },
  {
    "url": "top_logo.png",
    "revision": "12b361357b610542d3baeb79947cba6c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
