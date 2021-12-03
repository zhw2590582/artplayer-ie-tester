var vConsole = new VConsole();

var art = new Artplayer({
  container: ".artplayer-app",
  url: "./assets/sample/video.mp4",
  container: ".artplayer-app",
  url: "./assets/sample/video.mp4",
  title: "One More Time One More Chance",
  poster: "./assets/sample/poster.jpg",
  volume: 0.5,
  isLive: false,
  muted: false,
  autoplay: false,
  pip: true,
  autoSize: true,
  autoMini: true,
  screenshot: true,
  setting: true,
  loop: true,
  flip: true,
  rotate: true,
  playbackRate: true,
  aspectRatio: true,
  fullscreen: true,
  fullscreenWeb: true,
  subtitleOffset: true,
  miniProgressBar: true,
  localVideo: true,
  localSubtitle: true,
  mutex: true,
  backdrop: true,
  theme: "#23ade5",
  lang: navigator.language.toLowerCase(),
//   moreVideoAttr: {
//     crossOrigin: "anonymous",
//   },
//   settings: [
//     {
//       index: 1,
//       html: "Custom setting",
//       click: function (setting) {
//         console.info("You clicked on the custom setting");
//         setting.show = false;
//       },
//     },
//   ],
//   contextmenu: [
//     {
//       html: "Custom menu",
//       click: function (contextmenu) {
//         console.info("You clicked on the custom menu");
//         contextmenu.show = false;
//       },
//     },
//   ],
//   layers: [
//     {
//       html: `<img style="width: 100px" src="./assets/sample/layer.png">`,
//       click: function () {
//         console.info("You clicked on the custom layer");
//       },
//       style: {
//         position: "absolute",
//         top: "20px",
//         right: "20px",
//         opacity: ".9",
//       },
//     },
//   ],
//   quality: [
//     {
//       default: true,
//       html: "SD 480P",
//       url: "./assets/sample/video.mp4",
//     },
//     {
//       html: "HD 720P",
//       url: "./assets/sample/video.mp4",
//     },
//   ],
//   thumbnails: {
//     url: "./assets/sample/thumbnails.png",
//     number: 100,
//     width: 160,
//     height: 90,
//     column: 10,
//   },
//   subtitle: {
//     url: "./assets/sample/subtitle.srt",
//     style: {
//       color: "#03A9F4",
//     },
//     encoding: "utf-8",
//     bilingual: true,
//   },
//   highlight: [
//     {
//       time: 60,
//       text: "One more chance",
//     },
//     {
//       time: 120,
//       text: "谁でもいいはずなのに",
//     },
//     {
//       time: 180,
//       text: "夏の想い出がまわる",
//     },
//     {
//       time: 240,
//       text: "こんなとこにあるはずもないのに",
//     },
//     {
//       time: 300,
//       text: "终わり",
//     },
//   ],
//   controls: [
//     {
//       position: "right",
//       html: "Control",
//       click: function () {
//         console.info("You clicked on the custom control");
//       },
//     },
//   ],
//   icons: {
//     indicator: '<img width="16" heigth="16" src="./assets/img/indicator.svg">',
//     loading: '<img src="./assets/img/ploading.gif">',
//     state: '<img width="150" heigth="150" src="./assets/img/state.svg">',
//   },
});

Artplayer.config.events.forEach(function (item) {
  art.on("video:" + item, function (event) {
    console.log("video: " + event.type);
  });
});
