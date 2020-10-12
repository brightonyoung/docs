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
    "revision": "1b23fdeeac55c4ee31c4d00e97d80c7f"
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
    "url": "assets/js/101.8aa9f2f5.js",
    "revision": "842877509e562e4932e037460113b764"
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
    "url": "assets/js/19.990a280f.js",
    "revision": "916fe010ff5124cd552fe863b6af3dad"
  },
  {
    "url": "assets/js/20.94298f44.js",
    "revision": "d12b76818550aff466827cfa8b0cb80e"
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
    "url": "assets/js/26.f2889eca.js",
    "revision": "6ba965f445d0744363d62b17b7fc77de"
  },
  {
    "url": "assets/js/27.1e39bcf0.js",
    "revision": "76009dfe02cb919b08273b66d2165421"
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
    "url": "assets/js/30.6576d3e8.js",
    "revision": "dc1151a9e38999442d61005e5cf548bf"
  },
  {
    "url": "assets/js/31.686484a3.js",
    "revision": "84d85582dcb8760026cc52f600d45b92"
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
    "url": "assets/js/34.456c36ca.js",
    "revision": "486efdd1065ddc7062a9d08246e1d69d"
  },
  {
    "url": "assets/js/35.88b133fc.js",
    "revision": "97126ecdb20e7dc62d32d56151493726"
  },
  {
    "url": "assets/js/36.0124ff5d.js",
    "revision": "73f909b442f79c55b6731c648a6cf58e"
  },
  {
    "url": "assets/js/37.b320a2fc.js",
    "revision": "e31a7190145b576304c53e5ddac2b0f4"
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
    "url": "assets/js/44.8e4193be.js",
    "revision": "1a38d02de08fe60e8a9a1bf983d378cb"
  },
  {
    "url": "assets/js/45.611e2a2a.js",
    "revision": "2427e64aac67c243f4a34025a2ba9579"
  },
  {
    "url": "assets/js/46.8da40e6e.js",
    "revision": "6f6baa7d1d6cb4526b89cbcc5f743dc7"
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
    "url": "assets/js/51.d4d9505b.js",
    "revision": "7e7184a4bea015362b34b4fd9ae23904"
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
    "url": "assets/js/55.053f7e7d.js",
    "revision": "91cd3bc8bcd99e3cd3d0b2e5f085103c"
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
    "url": "assets/js/59.ce2dcde2.js",
    "revision": "c8a46f8fc103cb02c040344fe8a254a4"
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
    "url": "assets/js/62.8438a8d9.js",
    "revision": "e228b6fee608f7a8b6a17a3c5602ba67"
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
    "url": "assets/js/70.e8378753.js",
    "revision": "52ef1c5f2b7e4a858e31e6231a309250"
  },
  {
    "url": "assets/js/71.d83db2fc.js",
    "revision": "c68b9df8e023a3aa94d487d9290cf45f"
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
    "url": "assets/js/81.b01971f7.js",
    "revision": "822a0ca18be6d3d9838d5aca897b4162"
  },
  {
    "url": "assets/js/82.5be90d73.js",
    "revision": "3b17c9891d2923419b54a11beafa1d56"
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
    "url": "assets/js/85.4d023409.js",
    "revision": "ab329d5f214bdc5c40f5e5703ff65886"
  },
  {
    "url": "assets/js/86.8ab816e6.js",
    "revision": "69ad549648b51e56c4b7da687b3cb199"
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
    "url": "assets/js/93.c08a1dd1.js",
    "revision": "2ebf49e961c0cf339be0932ac1dc6743"
  },
  {
    "url": "assets/js/94.be5ab43a.js",
    "revision": "120fe5e27b4ee1e09c6c1881d98a649a"
  },
  {
    "url": "assets/js/95.9a98a886.js",
    "revision": "d33d33ca8f145bff0c7d943e159b5a3b"
  },
  {
    "url": "assets/js/96.66cfd9b1.js",
    "revision": "a4115ff0c991677964870e1baff39d0e"
  },
  {
    "url": "assets/js/97.a2f71208.js",
    "revision": "3905f6fed6c091662b7a353215601332"
  },
  {
    "url": "assets/js/98.0f4b9263.js",
    "revision": "3fb3a633e73041d7615a51e73ef64bc0"
  },
  {
    "url": "assets/js/99.d17caf1d.js",
    "revision": "e9792e78e6ee6b6288af07635170dc54"
  },
  {
    "url": "assets/js/app.dd4ff257.js",
    "revision": "50a303f0d81fc3b92d6947a08897b9e2"
  },
  {
    "url": "assets/js/vendors~docsearch.9c05f166.js",
    "revision": "73a072600e24d64b16856ce08ee36b28"
  },
  {
    "url": "configuration/api.html",
    "revision": "cd97594c0f61fa063f9914b68b3aa62d"
  },
  {
    "url": "configuration/fields/arguments.html",
    "revision": "9db02a609cb3217eec424f455945d64f"
  },
  {
    "url": "configuration/fields/attributes.html",
    "revision": "26cff5da34349c926929ec498f8734e1"
  },
  {
    "url": "configuration/fields/compiler.html",
    "revision": "8698be1d0c304330f970160352667b2d"
  },
  {
    "url": "configuration/fields/data.html",
    "revision": "a266a8e3226c2c8798ef508aed3c6af5"
  },
  {
    "url": "configuration/fields/hints.html",
    "revision": "e927df81683b957ced6a0ee3c4d8d112"
  },
  {
    "url": "configuration/fields/output-variables.html",
    "revision": "9626e2c40cf5cb214c66d37d79c69f3f"
  },
  {
    "url": "configuration/fields/output.html",
    "revision": "38b76b75c9ec521de3c3416c8e3cd2ff"
  },
  {
    "url": "configuration/fields/permissions.html",
    "revision": "e9675653a754df709be51bb5f1332bf0"
  },
  {
    "url": "configuration/fields/required.html",
    "revision": "9aa4bcc8758ae7754af5d4354ccff7cb"
  },
  {
    "url": "configuration/fields/validate.html",
    "revision": "ca86b5cb64ced355c6c95c2c38e56d0b"
  },
  {
    "url": "configuration/global_arguments.html",
    "revision": "87fd69f52eee642e3e0b9ada7e7cc32f"
  },
  {
    "url": "configuration/hooks/hooks-action.html",
    "revision": "0bc3fb86adb03150f5e1987c2125e76b"
  },
  {
    "url": "configuration/hooks/hooks-filter.html",
    "revision": "f44348990feedf66eab613297d02ba03"
  },
  {
    "url": "configuration/index.html",
    "revision": "b6b6e4a92503aa057ccfb2f60a158bdc"
  },
  {
    "url": "configuration/objects/field.html",
    "revision": "d49e49851dca55e52a7fc544e27714b4"
  },
  {
    "url": "configuration/objects/section.html",
    "revision": "5d0a5d2c7b51eeaf966138eee05f4399"
  },
  {
    "url": "contributing.html",
    "revision": "eeaa2aaa704749d7e685eb8d839bacf0"
  },
  {
    "url": "core-extensions/customizer-lite.html",
    "revision": "743b937ac1754b53e1d3580241de7072"
  },
  {
    "url": "core-extensions/import-export.html",
    "revision": "46a720932d1bcde756ff2633fe060bc8"
  },
  {
    "url": "core-extensions/index.html",
    "revision": "428924c0d3836a07d14d044899df024b"
  },
  {
    "url": "core-extensions/metaboxes-lite.html",
    "revision": "e948e96c721bbc2b7a7b56ea962947e5"
  },
  {
    "url": "core-extensions/options-object.html",
    "revision": "27abe34ed226415b8addb4896679ade5"
  },
  {
    "url": "core-fields/ace-editor.html",
    "revision": "90bd5ee3688b999ad2ddb3c42ff923b6"
  },
  {
    "url": "core-fields/background.html",
    "revision": "193ccd80d6b6c46ef4eb5063788893e0"
  },
  {
    "url": "core-fields/border.html",
    "revision": "ba4bacffb20b8cba5326d2e4f2a08b6f"
  },
  {
    "url": "core-fields/button-set.html",
    "revision": "320b2610d4dbb87af73d8efe356b27a1"
  },
  {
    "url": "core-fields/checkbox.html",
    "revision": "cd6499039543e70c5025e87a0661f7a9"
  },
  {
    "url": "core-fields/color-gradient.html",
    "revision": "b142750c2478d1c20ba6acdd09d11bef"
  },
  {
    "url": "core-fields/color-rgba.html",
    "revision": "582dfce99558f7776d697bc1e5a55c3a"
  },
  {
    "url": "core-fields/color.html",
    "revision": "3dab6172e64957fd10812ae384045edc"
  },
  {
    "url": "core-fields/date.html",
    "revision": "aa49c3419678da4f1eada84ce96d801c"
  },
  {
    "url": "core-fields/dimensions.html",
    "revision": "16e77d6a4f0d8e630d548248629bd37a"
  },
  {
    "url": "core-fields/divide.html",
    "revision": "f3e015971066016192ff6d994fb5b313"
  },
  {
    "url": "core-fields/editor.html",
    "revision": "2d256d7a39e2bfe5fe6c232cfd6fde82"
  },
  {
    "url": "core-fields/gallery.html",
    "revision": "c00f7b5c0276b9c87490bbee3b6f3120"
  },
  {
    "url": "core-fields/image-select.html",
    "revision": "ca306416918a4b1dfa4817fbca78aa8d"
  },
  {
    "url": "core-fields/index.html",
    "revision": "f09a568fa2dd6081d3109a1f035f04b2"
  },
  {
    "url": "core-fields/info.html",
    "revision": "7627b6bbf897d7ad69981a36136efe16"
  },
  {
    "url": "core-fields/link-color.html",
    "revision": "40a27c6b4a5730f5e22a7962790e8aa6"
  },
  {
    "url": "core-fields/media.html",
    "revision": "71cc01148e9ba4df9fb94ea8cea21d20"
  },
  {
    "url": "core-fields/multi-text.html",
    "revision": "a319e9ae2958be7983b5b5a360642a93"
  },
  {
    "url": "core-fields/palette-color.html",
    "revision": "0738dff6e82d9250f31f5054294ff28f"
  },
  {
    "url": "core-fields/password.html",
    "revision": "dd1ce6c36f1adefb3b3867ea58ca054a"
  },
  {
    "url": "core-fields/radio.html",
    "revision": "d38627d9904493a5958993b946474e8a"
  },
  {
    "url": "core-fields/raw.html",
    "revision": "b8f9f329cadfa181bd5152f35a590d61"
  },
  {
    "url": "core-fields/section.html",
    "revision": "33995f31d4bf6b1e8ce37a8af3f494ad"
  },
  {
    "url": "core-fields/select-image.html",
    "revision": "1c197882e66e9375348d4f85c00157fe"
  },
  {
    "url": "core-fields/select.html",
    "revision": "61202d59ddce2e71fca775038ea7a35b"
  },
  {
    "url": "core-fields/slider.html",
    "revision": "fd5ae755d2c4211dbc09d44d9d5ccefd"
  },
  {
    "url": "core-fields/slides.html",
    "revision": "0d24266f3a760d35e16151aa5a77b3a4"
  },
  {
    "url": "core-fields/sortable.html",
    "revision": "58526f18d3d2504b0a00c8fc44cf7112"
  },
  {
    "url": "core-fields/sorter.html",
    "revision": "4871e3e885a6448ea37295af4a51b5c6"
  },
  {
    "url": "core-fields/spacing.html",
    "revision": "66ceea0594dfe1c73052bbd4fa878637"
  },
  {
    "url": "core-fields/spinner.html",
    "revision": "74eb3354a60a045744ffd7d2d4fd4313"
  },
  {
    "url": "core-fields/switch.html",
    "revision": "03c8c2e06539aef3e61f913067745d18"
  },
  {
    "url": "core-fields/text.html",
    "revision": "92d0914078f1d0609b513833c085bc4d"
  },
  {
    "url": "core-fields/textarea.html",
    "revision": "cc2118c697d8c8e2ba148b16e1391f62"
  },
  {
    "url": "core-fields/typography.html",
    "revision": "03a2c279f1454751e0952a2035cf7569"
  },
  {
    "url": "core/index.html",
    "revision": "32f9f038953e3e7f885e166dba65536e"
  },
  {
    "url": "faq/index.html",
    "revision": "89240bda72755064e293ad2f475a4268"
  },
  {
    "url": "guides/advanced/embedding-redux.html",
    "revision": "90121314861fa48093a0da6ae71e3e3c"
  },
  {
    "url": "guides/advanced/health-status-report.html",
    "revision": "f09a65361c0f5bebdd81bc61bf82d2a0"
  },
  {
    "url": "guides/advanced/increasing-the-memory-limit.html",
    "revision": "ecd3e26896dbd82b82715ab18473fed0"
  },
  {
    "url": "guides/advanced/overriding-default-css.html",
    "revision": "321a3c2e3ef946bfa79e0b01227f418b"
  },
  {
    "url": "guides/advanced/panel-templates.html",
    "revision": "89841bcf47ca02d58b49ea8fb5fbe98a"
  },
  {
    "url": "guides/advanced/updating-an-option-manually.html",
    "revision": "9ef9c10e3cee42fdb955a9f9503b3e76"
  },
  {
    "url": "guides/advanced/using-another-icon-web-font.html",
    "revision": "3995817507e13dddc4b1fc40b6e9c958"
  },
  {
    "url": "guides/advanced/wp-filesystem-proxy.html",
    "revision": "cf9fe4680744c128c6b3ffbdaccae1ec"
  },
  {
    "url": "guides/advanced/wpml-integration.html",
    "revision": "7ecd6a27a72424f27ca528c73fc88309"
  },
  {
    "url": "guides/basics/core-concepts.html",
    "revision": "7b1edbe6761a95cba5485fbed9aa9c3f"
  },
  {
    "url": "guides/basics/customizer-integration.html",
    "revision": "6bff396663c67f9dad67a4f4cb3d3e6a"
  },
  {
    "url": "guides/basics/generating-a-support-hash.html",
    "revision": "3d49e21c6630b6531e819c279e6d1ebc"
  },
  {
    "url": "guides/basics/getting-started.html",
    "revision": "a459ca7d73cb81e7e2cf917e532ede04"
  },
  {
    "url": "guides/basics/install.html",
    "revision": "c1b8e2d7fb50eb71a4695798cb0b0fd1"
  },
  {
    "url": "guides/basics/removing-demo-mode-notice.html",
    "revision": "ebd74a2611cca16b85a1400804e0566e"
  },
  {
    "url": "guides/basics/support-defined.html",
    "revision": "f7f6ef632fc40595504c77afd8816127"
  },
  {
    "url": "guides/basics/using-extensions.html",
    "revision": "dd1c57353b47b9a53ca5df80106d082d"
  },
  {
    "url": "guides/basics/using-tgm-plugin-activation.html",
    "revision": "5c1821a0dcef67e50f40b06ab779e9c9"
  },
  {
    "url": "guides/index.html",
    "revision": "7193b38da01e48bb3faddbe3b93ba419"
  },
  {
    "url": "guides/other/ide-snippets-and-templates.html",
    "revision": "c5234d03e24023e09c05dac32c15ef57"
  },
  {
    "url": "guides/other/migration-guide.html",
    "revision": "7635f093ffc46443383015060580ea1a"
  },
  {
    "url": "guides/other/redux-converter.html",
    "revision": "2fb76d4345baba6f6b19a53e4f5ef617"
  },
  {
    "url": "guides/other/theme-check-warnings-and-errors.html",
    "revision": "d071f67d4da0ecfe3c7e9523004969b0"
  },
  {
    "url": "guides/other/wordpress.org-submissions.html",
    "revision": "c591a3e5eb2868871d347385ec28ba4f"
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
    "revision": "c085ecf6072e07236d1f9e10f3c51b85"
  },
  {
    "url": "logo.png",
    "revision": "31e024deb70868393ff0b974e35d1e34"
  },
  {
    "url": "premium/accordion.html",
    "revision": "ce8f19feeb1f2c5cc146347fa3f8a8d6"
  },
  {
    "url": "premium/codemirror.html",
    "revision": "df3b1d5d660bc0ea2980eef8c949c9d1"
  },
  {
    "url": "premium/color-schemes.html",
    "revision": "bebbc9eb77e04444007330939c363ef0"
  },
  {
    "url": "premium/css-layout.html",
    "revision": "466299422a218703e26231f3961dc888"
  },
  {
    "url": "premium/custom-fonts.html",
    "revision": "0f90c487bb4a01d2878d91fb57b79aa0"
  },
  {
    "url": "premium/date-time-picker.html",
    "revision": "e841c092dfaf37a8ad8a8da014fa5612"
  },
  {
    "url": "premium/google-maps.html",
    "revision": "a109f258cb63097a5f42da0630b539bf"
  },
  {
    "url": "premium/icon-select.html",
    "revision": "4f1d9bc0605d76da55187cab9d34f775"
  },
  {
    "url": "premium/index.html",
    "revision": "c8420c023825956117a207726c8949d0"
  },
  {
    "url": "premium/js-button.html",
    "revision": "66c2a0c41f52c4ddd4b0bd176f5f2d34"
  },
  {
    "url": "premium/metaboxes.html",
    "revision": "557622d970cc7e4269db1c1c26398510"
  },
  {
    "url": "premium/multi-media.html",
    "revision": "13c0cdb46f54da16e1a6f6ef7364da6a"
  },
  {
    "url": "premium/repeater.html",
    "revision": "ff235d8572cda5074a30b809a489bb6b"
  },
  {
    "url": "premium/social-profiles.html",
    "revision": "4dbe96abc0d14bdc36e56e7a4638b80f"
  },
  {
    "url": "premium/taxonomy.html",
    "revision": "1c9bc3fd2cb336697fa105ad91fc0968"
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
