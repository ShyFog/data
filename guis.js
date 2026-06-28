// Helper function to add all hotbar + inventory slots to the GUI
function addInventory(offsetX, offsetY) {
  var result = [];
  for (var y = 0; y < 3; y++) {
    for (var x = 0; x < 9; x++) {
      result.push({
        "type": "player_slot",
        "slot": `inventory.${(y * 9) + x}`,
        "x": offsetX + (x * 18),
        "y": offsetY + (y * 18),
        "width": 18,
        "height": 18
      });
    }
  }
  for (var x = 0; x < 9; x++) {
    result.push({
      "type": "player_slot",
      "slot": `hotbar.${x}`,
      "x": offsetX + (x * 18),
      "y": offsetY + (3 * 18) + 4,
      "width": 18,
      "height": 18
    });
  }
  return result;
}

var guis = {
  "shyfog:inventory": {
    "background": "/gui/container/inventory.png",
    "backgroundWidth": 176,
    "backgroundHeight": 166,
    "content": [
      ...addInventory(7, 83)
    ]
  }
};

if (typeof game !== "undefined") {
  game.guis = guis;
}
if (typeof module !== "undefined") {
  module.exports = guis;
}