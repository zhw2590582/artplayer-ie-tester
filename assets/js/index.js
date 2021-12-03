var vConsole = new VConsole();

var art = new Artplayer({
  container: ".artplayer-app",
  url: "./assets/sample/video.mp4",
});

Artplayer.config.events.forEach(function (item) {
  art.on("video:" + item, function (event) {
    console.log("video: " + event.type);
  });
});
