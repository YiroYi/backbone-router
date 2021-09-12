define(["underscore", "backbone", "models/song", "views/songView"], function (
  _,
  Backbone,
  Song,
  SongView
) {
  var initialize = function () {
    var song = new Song({ title: "Yiro lalala" });

    var songView = new SongView({ el: "#song-container", model: song });
    songView.render();
  };

  return {
    initialize: initialize,
  };
});
