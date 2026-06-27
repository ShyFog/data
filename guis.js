var guis = {
  "shyfog:inventory": {
    "background": "/gui/container/inventory.png",
    "backgroundWidth": 176,
    "backgroundHeight": 166
  }
};

if (typeof game !== "undefined") {
  game.guis = guis;
}
if (typeof module !== "undefined") {
  module.exports = guis;
}