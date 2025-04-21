/**
 * Diet plans database organized by country and goal
 * Includes meals with cost and preparation time
 */
module.exports = {
  // Default plans for when no country is specified
  "default": {
    weightLoss: {
      breakfast: [
        {
          meal: "Oatmeal with berries",
          cost: "Low",
          prepTime: "5 mins"
        },
        {
          meal: "Greek yogurt with fruits and nuts",
          cost: "Medium",
          prepTime: "3 mins"
        },
        {
          meal: "Avocado toast on whole grain bread",
          cost: "Medium",
          prepTime: "7 mins"
        }
      ],
      lunch: [
        {
          meal: "Grilled chicken salad",
          cost: "Medium",
          prepTime: "15 mins"
        },
        {
          meal: "Lentil soup with vegetables",
          cost: "Low",
          prepTime: "20 mins"
        },
        {
          meal: "Tuna wrap with mixed greens",
          cost: "Medium",
          prepTime: "10 mins"
        }
      ],
      dinner: [
        {
          meal: "Baked salmon with steamed vegetables",
          cost: "High",
          prepTime: "25 mins"
        },
        {
          meal: "Turkey and vegetable stir-fry",
          cost: "Medium",
          prepTime: "20 mins"
        },
        {
          meal: "Vegetable soup with quinoa",
          cost: "Low",
          prepTime: "30 mins"
        }
      ]
    },
    muscleGain: {
      breakfast: [
        {
          meal: "Protein smoothie with banana and peanut butter",
          cost: "Medium",
          prepTime: "5 mins"
        },
        {
          meal: "Egg white omelette with vegetables and cheese",
          cost: "Medium",
          prepTime: "10 mins"
        },
        {
          meal: "Protein pancakes with honey",
          cost: "Medium",
          prepTime: "15 mins"
        }
      ],
      lunch: [
        {
          meal: "Chicken breast with brown rice and vegetables",
          cost: "Medium",
          prepTime: "20 mins"
        },
        {
          meal: "Tuna salad sandwich on whole grain bread",
          cost: "Medium",
          prepTime: "10 mins"
        },
        {
          meal: "Beef and vegetable bowl with quinoa",
          cost: "High",
          prepTime: "25 mins"
        }
      ],
      dinner: [
        {
          meal: "Grilled steak with sweet potatoes and broccoli",
          cost: "High",
          prepTime: "30 mins"
        },
        {
          meal: "Salmon with quinoa and asparagus",
          cost: "High",
          prepTime: "25 mins"
        },
        {
          meal: "Chicken pasta with olive oil and vegetables",
          cost: "Medium",
          prepTime: "20 mins"
        }
      ]
    },
    maintenance: {
      breakfast: [
        {
          meal: "Whole grain toast with eggs",
          cost: "Low",
          prepTime: "7 mins"
        },
        {
          meal: "Fruit smoothie with protein powder",
          cost: "Medium",
          prepTime: "5 mins"
        },
        {
          meal: "Overnight oats with nuts and fruits",
          cost: "Low",
          prepTime: "5 mins (plus overnight)"
        }
      ],
      lunch: [
        {
          meal: "Mediterranean salad with chicken",
          cost: "Medium",
          prepTime: "15 mins"
        },
        {
          meal: "Veggie wrap with hummus",
          cost: "Low",
          prepTime: "10 mins"
        },
        {
          meal: "Bean and vegetable soup",
          cost: "Low",
          prepTime: "20 mins"
        }
      ],
      dinner: [
        {
          meal: "Grilled fish with roasted vegetables",
          cost: "Medium",
          prepTime: "25 mins"
        },
        {
          meal: "Stir-fry with tofu and brown rice",
          cost: "Medium",
          prepTime: "20 mins"
        },
        {
          meal: "Lean meat with quinoa and steamed vegetables",
          cost: "Medium",
          prepTime: "25 mins"
        }
      ]
    },
    balanced: {
      breakfast: [
        {
          meal: "Breakfast burrito with eggs and vegetables",
          cost: "Medium",
          prepTime: "10 mins"
        },
        {
          meal: "Whole grain cereal with milk and fruit",
          cost: "Low",
          prepTime: "3 mins"
        },
        {
          meal: "Yogurt parfait with granola and berries",
          cost: "Medium",
          prepTime: "5 mins"
        }
      ],
      lunch: [
        {
          meal: "Turkey sandwich on whole grain bread",
          cost: "Medium",
          prepTime: "7 mins"
        },
        {
          meal: "Quinoa bowl with mixed vegetables",
          cost: "Medium",
          prepTime: "15 mins"
        },
        {
          meal: "Pasta salad with vegetables and olive oil",
          cost: "Medium",
          prepTime: "15 mins"
        }
      ],
      dinner: [
        {
          meal: "Baked chicken with roasted potatoes",
          cost: "Medium",
          prepTime: "45 mins"
        },
        {
          meal: "Fish tacos with cabbage slaw",
          cost: "Medium",
          prepTime: "20 mins"
        },
        {
          meal: "Vegetarian chili with cornbread",
          cost: "Low",
          prepTime: "30 mins"
        }
      ]
    }
  },
  
  // Pakistan-specific plans
  "pakistan": {
    weightLoss: {
      breakfast: [
        {
          meal: "Boiled eggs with toast",
          cost: "Low",
          prepTime: "5 mins"
        },
        {
          meal: "Oats with banana",
          cost: "Medium",
          prepTime: "7 mins"
        },
        {
          meal: "Smoothie with yogurt",
          cost: "High",
          prepTime: "5 mins"
        }
      ],
      lunch: [
        {
          meal: "Daal with half chapati",
          cost: "Low",
          prepTime: "20 mins"
        },
        {
          meal: "Grilled chicken with salad",
          cost: "Medium",
          prepTime: "25 mins"
        },
        {
          meal: "Vegetable curry with brown rice",
          cost: "Low",
          prepTime: "30 mins"
        }
      ],
      dinner: [
        {
          meal: "Chicken tikka with cucumber salad",
          cost: "Medium",
          prepTime: "30 mins"
        },
        {
          meal: "Fish curry with half chapati",
          cost: "Medium",
          prepTime: "25 mins"
        },
        {
          meal: "Daal with vegetable curry",
          cost: "Low",
          prepTime: "25 mins"
        }
      ]
    },
    muscleGain: {
      breakfast: [
        {
          meal: "Paratha with eggs and lassi",
          cost: "Medium",
          prepTime: "15 mins"
        },
        {
          meal: "Chana chaat with yogurt",
          cost: "Low",
          prepTime: "10 mins"
        },
        {
          meal: "Almond milk with protein powder and dates",
          cost: "High",
          prepTime: "5 mins"
        }
      ],
      lunch: [
        {
          meal: "Chicken biryani with raita",
          cost: "Medium",
          prepTime: "45 mins"
        },
        {
          meal: "Mutton curry with two chapatis",
          cost: "High",
          prepTime: "40 mins"
        },
        {
          meal: "Chicken tikka with naan and salad",
          cost: "Medium",
          prepTime: "30 mins"
        }
      ],
      dinner: [
        {
          meal: "Beef kebabs with rice and salad",
          cost: "High",
          prepTime: "35 mins"
        },
        {
          meal: "Fish curry with chapati",
          cost: "Medium",
          prepTime: "30 mins"
        },
        {
          meal: "Chicken karahi with naan",
          cost: "Medium",
          prepTime: "40 mins"
        }
      ]
    },
    maintenance: {
      breakfast: [
        {
          meal: "Anda paratha with tea",
          cost: "Low",
          prepTime: "15 mins"
        },
        {
          meal: "Dahi with fruit and nuts",
          cost: "Medium",
          prepTime: "5 mins"
        },
        {
          meal: "Suji halwa with milk",
          cost: "Low",
          prepTime: "15 mins"
        }
      ],
      lunch: [
        {
          meal: "Mixed vegetable rice with yogurt",
          cost: "Low",
          prepTime: "30 mins"
        },
        {
          meal: "Chicken sandwich with cucumber",
          cost: "Medium",
          prepTime: "10 mins"
        },
        {
          meal: "Daal with chapati and vegetable",
          cost: "Low",
          prepTime: "25 mins"
        }
      ],
      dinner: [
        {
          meal: "Aloo qeema with chapati",
          cost: "Medium",
          prepTime: "30 mins"
        },
        {
          meal: "Chicken tikka with naan",
          cost: "Medium",
          prepTime: "35 mins"
        },
        {
          meal: "Vegetable curry with rice",
          cost: "Low",
          prepTime: "25 mins"
        }
      ]
    },
    balanced: {
      breakfast: [
        {
          meal: "Halwa puri with chana",
          cost: "Medium",
          prepTime: "20 mins"
        },
        {
          meal: "Aloo paratha with yogurt",
          cost: "Low",
          prepTime: "20 mins"
        },
        {
          meal: "Nihari with naan (weekend special)",
          cost: "High",
          prepTime: "overnight + 20 mins"
        }
      ],
      lunch: [
        {
          meal: "Chicken pulao with raita",
          cost: "Medium",
          prepTime: "40 mins"
        },
        {
          meal: "Chapati with daal and vegetable curry",
          cost: "Low",
          prepTime: "30 mins"
        },
        {
          meal: "Chicken roll with mint chutney",
          cost: "Medium",
          prepTime: "20 mins"
        }
      ],
      dinner: [
        {
          meal: "Beef nihari with naan",
          cost: "High",
          prepTime: "3 hours"
        },
        {
          meal: "Fish curry with rice",
          cost: "Medium",
          prepTime: "35 mins"
        },
        {
          meal: "Chicken karahi with chapati",
          cost: "Medium",
          prepTime: "40 mins"
        }
      ]
    }
  },
  
  // Add more countries as needed...
  "india": {
    weightLoss: {
      breakfast: [
        {
          meal: "Idli with sambar",
          cost: "Low",
          prepTime: "20 mins"
        },
        {
          meal: "Vegetable upma",
          cost: "Low",
          prepTime: "15 mins"
        },
        {
          meal: "Moong dal cheela",
          cost: "Low",
          prepTime: "15 mins"
        }
      ],
      lunch: [
        {
          meal: "Roti with dal and vegetable curry",
          cost: "Low",
          prepTime: "30 mins"
        },
        {
          meal: "Brown rice with rajma",
          cost: "Low",
          prepTime: "25 mins"
        },
        {
          meal: "Vegetable khichdi with curd",
          cost: "Low",
          prepTime: "20 mins"
        }
      ],
      dinner: [
        {
          meal: "Multigrain roti with palak paneer",
          cost: "Medium",
          prepTime: "25 mins"
        },
        {
          meal: "Vegetable soup with grilled paneer",
          cost: "Medium",
          prepTime: "20 mins"
        },
        {
          meal: "Millet dosa with coconut chutney",
          cost: "Low",
          prepTime: "15 mins"
        }
      ]
    },
    muscleGain: {
      breakfast: [
        {
          meal: "Paneer paratha with curd",
          cost: "Medium",
          prepTime: "20 mins"
        },
        {
          meal: "Masala omelette with whole grain toast",
          cost: "Medium",
          prepTime: "10 mins"
        },
        {
          meal: "Chana masala with poori",
          cost: "Low",
          prepTime: "25 mins"
        }
      ],
      lunch: [
        {
          meal: "Chicken biryani with raita",
          cost: "Medium",
          prepTime: "45 mins"
        },
        {
          meal: "Roti with egg curry and dal",
          cost: "Medium",
          prepTime: "30 mins"
        },
        {
          meal: "Jeera rice with dal makhani and paneer tikka",
          cost: "Medium",
          prepTime: "40 mins"
        }
      ],
      dinner: [
        {
          meal: "Butter chicken with naan",
          cost: "High",
          prepTime: "35 mins"
        },
        {
          meal: "Lamb curry with rice",
          cost: "High",
          prepTime: "40 mins"
        },
        {
          meal: "Tandoori fish with mixed vegetable curry",
          cost: "Medium",
          prepTime: "30 mins"
        }
      ]
    },
    // Add more goals for India...
    maintenance: {
      breakfast: [
        {
          meal: "Poha with peanuts",
          cost: "Low",
          prepTime: "15 mins"
        },
        {
          meal: "Uttapam with coconut chutney",
          cost: "Medium",
          prepTime: "20 mins"
        },
        {
          meal: "Besan cheela with mint chutney",
          cost: "Low",
          prepTime: "15 mins"
        }
      ],
      lunch: [
        {
          meal: "Rice with sambar and vegetable curry",
          cost: "Low",
          prepTime: "30 mins"
        },
        {
          meal: "Roti with dal and aloo gobi",
          cost: "Low",
          prepTime: "25 mins"
        },
        {
          meal: "Curd rice with pickle",
          cost: "Low",
          prepTime: "10 mins"
        }
      ],
      dinner: [
        {
          meal: "Roti with mix vegetable curry",
          cost: "Low",
          prepTime: "30 mins"
        },
        {
          meal: "Millet khichdi with yogurt",
          cost: "Low",
          prepTime: "25 mins"
        },
        {
          meal: "Vegetable pulao with raita",
          cost: "Medium",
          prepTime: "30 mins"
        }
      ]
    }
  }
};
