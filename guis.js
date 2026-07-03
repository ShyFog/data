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
      // Armor slots
      {
        "type": "image",
        "file": "/gui/sprites/container/slot/helmet.png",
        "x": 8,
        "y": 8,
        "width": 16,
        "height": 16
      },
      {
        "type": "player_slot",
        "slot": "armor.head",
        "x": 7,
        "y": 7,
        "width": 18,
        "height": 18
      },
      {
        "type": "image",
        "file": "/gui/sprites/container/slot/chestplate.png",
        "x": 8,
        "y": 26,
        "width": 16,
        "height": 16
      },
      {
        "type": "player_slot",
        "slot": "armor.chest",
        "x": 7,
        "y": 25,
        "width": 18,
        "height": 18
      },
      {
        "type": "image",
        "file": "/gui/sprites/container/slot/leggings.png",
        "x": 8,
        "y": 44,
        "width": 16,
        "height": 16
      },
      {
        "type": "player_slot",
        "slot": "armor.legs",
        "x": 7,
        "y": 43,
        "width": 18,
        "height": 18
      },
      {
        "type": "image",
        "file": "/gui/sprites/container/slot/boots.png",
        "x": 8,
        "y": 62,
        "width": 16,
        "height": 16
      },
      {
        "type": "player_slot",
        "slot": "armor.feet",
        "x": 7,
        "y": 61,
        "width": 18,
        "height": 18
      },
      {
        "type": "current_player",
        "x": 36,
        "y": 14,
        "width": 28,
        "height": 59
      },
      {
        "type": "image",
        "file": "/gui/sprites/container/slot/shield.png",
        "x": 77,
        "y": 62,
        "width": 16,
        "height": 16
      },
      {
        "type": "player_slot",
        "slot": "weapon.offhand",
        "x": 76,
        "y": 61,
        "width": 18,
        "height": 18
      },
      // 2x2 craft slots
      {
        "type": "player_slot",
        "slot": "craft.0",
        "x": 97,
        "y": 17,
        "width": 18,
        "height": 18
      },
      {
        "type": "player_slot",
        "slot": "craft.1",
        "x": 115,
        "y": 17,
        "width": 18,
        "height": 18
      },
      {
        "type": "player_slot",
        "slot": "craft.2",
        "x": 97,
        "y": 35,
        "width": 18,
        "height": 18
      },
      {
        "type": "player_slot",
        "slot": "craft.3",
        "x": 115,
        "y": 35,
        "width": 18,
        "height": 18
      },
      // Craft result slot
      {
        "type": "player_slot",
        "slot": "craft.result",
        "x": 153,
        "y": 27,
        "width": 18,
        "height": 18
      },
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