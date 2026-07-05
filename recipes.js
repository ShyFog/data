var recipes = {
  "shyfog:oak_planks": {
    "type": "shyfog:crafting_shapeless",
    "ingredients": [
      "#shyfog:oak_logs"
    ],
    "result": {
      "count": 4,
      "id": "shyfog:oak_planks"
    }
  },
  "shyfog:stick": {
    "type": "shyfog:crafting_shaped",
    "key": {
      "#": "#shyfog:planks"
    },
    "pattern": [
      "#",
      "#"
    ],
    "result": {
      "count": 4,
      "id": "shyfog:stick"
    }
  }
};

if (typeof game !== "undefined") {
  game.recipes = recipes;
}
if (typeof module !== "undefined") {
  module.exports = recipes;
}