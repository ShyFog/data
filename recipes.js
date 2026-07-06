var recipes = {
  // Planks
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
  "shyfog:birch_planks": {
    "type": "shyfog:crafting_shapeless",
    "ingredients": [
      "#shyfog:birch_logs"
    ],
    "result": {
      "count": 4,
      "id": "shyfog:birch_planks"
    }
  },
  "shyfog:spruce_planks": {
    "type": "shyfog:crafting_shapeless",
    "ingredients": [
      "#shyfog:spruce_logs"
    ],
    "result": {
      "count": 4,
      "id": "shyfog:spruce_planks"
    }
  },
  "shyfog:dark_oak_planks": {
    "type": "shyfog:crafting_shapeless",
    "ingredients": [
      "#shyfog:dark_oak_logs"
    ],
    "result": {
      "count": 4,
      "id": "shyfog:dark_oak_planks"
    }
  },
  "shyfog:acacia_planks": {
    "type": "shyfog:crafting_shapeless",
    "ingredients": [
      "#shyfog:acacia_logs"
    ],
    "result": {
      "count": 4,
      "id": "shyfog:acacia_planks"
    }
  },
  "shyfog:jungle_planks": {
    "type": "shyfog:crafting_shapeless",
    "ingredients": [
      "#shyfog:jungle_logs"
    ],
    "result": {
      "count": 4,
      "id": "shyfog:jungle_planks"
    }
  },
  "shyfog:mangrove_planks": {
    "type": "shyfog:crafting_shapeless",
    "ingredients": [
      "#shyfog:mangrove_logs"
    ],
    "result": {
      "count": 4,
      "id": "shyfog:mangrove_planks"
    }
  },
  "shyfog:cherry_planks": {
    "type": "shyfog:crafting_shapeless",
    "ingredients": [
      "#shyfog:cherry_logs"
    ],
    "result": {
      "count": 4,
      "id": "shyfog:cherry_planks"
    }
  },
  "shyfog:pale_oak_planks": {
    "type": "shyfog:crafting_shapeless",
    "ingredients": [
      "#shyfog:pale_oak_logs"
    ],
    "result": {
      "count": 4,
      "id": "shyfog:pale_oak_planks"
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
  },
  "shyfog:crafting_table": {
    "type": "shyfog:crafting_shaped",
    "key": {
      "#": "#shyfog:planks"
    },
    "pattern": [
      "##",
      "##"
    ],
    "result": {
      "id": "shyfog:crafting_table"
    }
  },
  // Axes
  "shyfog:wooden_axe": {
    "type": "minecraft:crafting_shaped",
    "key": {
      "#": "minecraft:stick",
      "X": "#minecraft:wooden_tool_materials"
    },
    "pattern": [
      "XX",
      "X#",
      " #"
    ],
    "result": {
      "id": "minecraft:wooden_axe"
    }
  },
  "shyfog:stone_axe": {
    "type": "minecraft:crafting_shaped",
    "key": {
      "#": "minecraft:stick",
      "X": "#minecraft:stone_tool_materials"
    },
    "pattern": [
      "XX",
      "X#",
      " #"
    ],
    "result": {
      "id": "minecraft:stone_axe"
    }
  },
  "shyfog:copper_axe": {
    "type": "minecraft:crafting_shaped",
    "key": {
      "#": "minecraft:stick",
      "X": "#minecraft:copper_tool_materials"
    },
    "pattern": [
      "XX",
      "X#",
      " #"
    ],
    "result": {
      "id": "minecraft:copper_axe"
    }
  },
  "shyfog:golden_axe": {
    "type": "minecraft:crafting_shaped",
    "key": {
      "#": "minecraft:stick",
      "X": "#minecraft:gold_tool_materials"
    },
    "pattern": [
      "XX",
      "X#",
      " #"
    ],
    "result": {
      "id": "minecraft:golden_axe"
    }
  },
  "shyfog:iron_axe": {
    "type": "minecraft:crafting_shaped",
    "key": {
      "#": "minecraft:stick",
      "X": "#minecraft:iron_tool_materials"
    },
    "pattern": [
      "XX",
      "X#",
      " #"
    ],
    "result": {
      "id": "minecraft:iron_axe"
    }
  },
  "shyfog:diamond_axe": {
    "type": "minecraft:crafting_shaped",
    "key": {
      "#": "minecraft:stick",
      "X": "#minecraft:diamond_tool_materials"
    },
    "pattern": [
      "XX",
      "X#",
      " #"
    ],
    "result": {
      "id": "minecraft:diamond_axe"
    }
  },
  // Pickaxes
  "shyfog:wooden_pickaxe": {
    "type": "shyfog:crafting_shaped",
    "key": {
      "#": "shyfog:stick",
      "X": "#shyfog:wooden_tool_materials"
    },
    "pattern": [
      "XXX",
      " # ",
      " # "
    ],
    "result": {
      "id": "shyfog:wooden_pickaxe"
    }
  },
  "shyfog:stone_pickaxe": {
    "type": "shyfog:crafting_shaped",
    "key": {
      "#": "shyfog:stick",
      "X": "#shyfog:stone_tool_materials"
    },
    "pattern": [
      "XXX",
      " # ",
      " # "
    ],
    "result": {
      "id": "shyfog:stone_pickaxe"
    }
  },
  "shyfog:copper_pickaxe": {
    "type": "shyfog:crafting_shaped",
    "key": {
      "#": "shyfog:stick",
      "X": "#shyfog:copper_tool_materials"
    },
    "pattern": [
      "XXX",
      " # ",
      " # "
    ],
    "result": {
      "id": "shyfog:copper_pickaxe"
    }
  },
  "shyfog:golden_pickaxe": {
    "type": "shyfog:crafting_shaped",
    "key": {
      "#": "shyfog:stick",
      "X": "#shyfog:gold_tool_materials"
    },
    "pattern": [
      "XXX",
      " # ",
      " # "
    ],
    "result": {
      "id": "shyfog:golden_pickaxe"
    }
  },
  "shyfog:iron_pickaxe": {
    "type": "shyfog:crafting_shaped",
    "key": {
      "#": "shyfog:stick",
      "X": "#shyfog:iron_tool_materials"
    },
    "pattern": [
      "XXX",
      " # ",
      " # "
    ],
    "result": {
      "id": "shyfog:iron_pickaxe"
    }
  },
  "shyfog:diamond_pickaxe": {
    "type": "shyfog:crafting_shaped",
    "key": {
      "#": "shyfog:stick",
      "X": "#shyfog:diamond_tool_materials"
    },
    "pattern": [
      "XXX",
      " # ",
      " # "
    ],
    "result": {
      "id": "shyfog:diamond_pickaxe"
    }
  },
  // Shovels
  "shyfog:wooden_shovel": {
    "type": "minecraft:crafting_shaped",
    "key": {
      "#": "minecraft:stick",
      "X": "#minecraft:wooden_tool_materials"
    },
    "pattern": [
      "X",
      "#",
      "#"
    ],
    "result": {
      "id": "minecraft:wooden_shovel"
    }
  },
  "shyfog:stone_shovel": {
    "type": "minecraft:crafting_shaped",
    "key": {
      "#": "minecraft:stick",
      "X": "#minecraft:stone_tool_materials"
    },
    "pattern": [
      "X",
      "#",
      "#"
    ],
    "result": {
      "id": "minecraft:stone_shovel"
    }
  },
  "shyfog:copper_shovel": {
    "type": "minecraft:crafting_shaped",
    "key": {
      "#": "minecraft:stick",
      "X": "#minecraft:copper_tool_materials"
    },
    "pattern": [
      "X",
      "#",
      "#"
    ],
    "result": {
      "id": "minecraft:copper_shovel"
    }
  },
  "shyfog:golden_shovel": {
    "type": "minecraft:crafting_shaped",
    "key": {
      "#": "minecraft:stick",
      "X": "#minecraft:gold_tool_materials"
    },
    "pattern": [
      "X",
      "#",
      "#"
    ],
    "result": {
      "id": "minecraft:golden_shovel"
    }
  },
  "shyfog:iron_shovel": {
    "type": "minecraft:crafting_shaped",
    "key": {
      "#": "minecraft:stick",
      "X": "#minecraft:iron_tool_materials"
    },
    "pattern": [
      "X",
      "#",
      "#"
    ],
    "result": {
      "id": "minecraft:iron_shovel"
    }
  },
  "shyfog:diamond_shovel": {
    "type": "minecraft:crafting_shaped",
    "key": {
      "#": "minecraft:stick",
      "X": "#minecraft:diamond_tool_materials"
    },
    "pattern": [
      "X",
      "#",
      "#"
    ],
    "result": {
      "id": "minecraft:diamond_shovel"
    }
  }
};

if (typeof game !== "undefined") {
  game.recipes = recipes;
}
if (typeof module !== "undefined") {
  module.exports = recipes;
}