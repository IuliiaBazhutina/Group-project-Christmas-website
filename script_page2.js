// JSON object with recipes

const recipesJSON = [{
    "category": "Drinks",
    "name": "The Grinch Coctail",
    "recipe": "To make the Grinch Cocktail, combine vodka, blue curaçao, pineapple juice, lemon juice, simple syrup, and a few drops of green food coloring in a cocktail shaker filled with ice. Shake well, strain into a glass filled with ice, and garnish with a maraschino cherry. For an extra festive touch, you can rim the glass with sprinkles using simple syrup to make them stick​",
    "url": "https://www.crowdedkitchen.com/wp-content/uploads/2017/12/Grinch-Cocktail-8.jpg"
  },
  
  {
    "category": "Cookies",
    "name": "Christmas Sugar Cookies",
    "recipe": "Cream together butter and sugar until fluffy. Add eggs, sourdough starter, and vanilla, mixing until combined. Combine flour, baking powder, and salt in a separate bowl, then mix into the wet ingredients. Roll out dough, cut into shapes, and bake at 350°F for 8-10 minutes or until edges are lightly golden.",
    "url": "https://www.madetobeamomma.com/wp-content/uploads/2021/12/Santa-Cookeis-sm-8.jpg"
  },
  
  {
    "category": "Cookies",
    "name": "Christmas Danish",
    "recipe": "Preheat the oven to 350°F and line a baking sheet with parchment paper. Roll out one can of crescent dough on the sheet, pressing seams together. Mix cream cheese, sugar, and vanilla, then spread over the dough. Add cherry pie filling evenly on top. Roll out the second can of crescent dough and place it over the filling, sealing the edges. Bake for 35-40 minutes until golden. Cool, dust with powdered sugar ",
    "url": "https://www.momontimeout.com/wp-content/uploads/2020/09/top-down-view-of-cherry-danishes.jpg"
  },
  
  {
    "category": "Drinks",
    "name": "Christmas Punch",
    "recipe": "Pour Hawaiian Punch, orange juice, cranberry juice, pomegranate juice, and pineapple juice into a large bowl or pitcher. Stir in optional Angostura bitters and luster dust if desired. Serve over ice, topping each glass with lemon-lime soda or ginger ale just before serving to keep the carbonation fresh. Garnish with orange slices, maraschino cherries, and rosemary sprigs for a festive touch.",
    "url": "https://www.sugarandsoul.co/wp-content/uploads/2016/12/christmas-punch-recipe-1.jpg"
  },
  
  {
    "category": "Drinks",
    "name": "Grinch green Hot Chocolate",
    "receipe": "Melt white chocolate chips in a saucepan with milk and condense milk, stirring until smooth. Add green food coloring to achieve your desired shade. Pour into mugs and top with whipped cream and decorations if desired",
    "url": "https://onmykidsplate.com/wp-content/uploads/2023/10/Grinch-Hot-chocolate-18.jpg"
  },
  
  {
    "category": "Drinks",
    "name": "Creamiest Christmas Eggnot",
    "receipe": "Simmer milk, sugar, baking soda, cinnamon, cloves, and nutmeg in a saucepan. Let the spices steep for 15 minutes after turning off the heat. Whisk egg yolks in a bowl, then mix into the milk while stirring constantly. Heat the mixture until it thickens slightly, then strain to remove spices and curds. Stir in rum or brandy and vanilla extract, then chill it or serve it warm.",
    "url": "https://thestayathomechef.com/wp-content/uploads/2020/09/Old-Fashioned-Homemade-Eggnog-4.jpg"
  },
  
  {
    "category": "Cookies",
    "name": "christmas Coconut Balls",
    "receipe": "To make Hungarian Kokuszgolyo (Coconut Balls), mix dry ingredients like crushed biscuits, sugar, vanilla sugar, cocoa, and a bit of rum essence in a bowl. Add melted butter and coconut milk, then knead until the sugar dissolves. Shape the mixture into small balls, then roll them in shredded coconut. Let them cool in the fridge for a few hours.",
    "url": "https://www.sutimamohr.hu/wp-content/uploads/2019/11/78063863_1883282565149741_6352679556213637120_o.jpg"
  },
  
  {
    "category": "Snacks",
    "name": "Rudolph Rice Krispies",
    "receipe": "Melt butter and marshmallows in a saucepan, mix in Rice Krispies, and press the mixture into a greased pan. Let it cool and cut into rectangles. (or use prepackaged Rice Krispies treats). Insert a wooden stick into each treat to create a handle. Melt chocolate in the microwave, stirring until smooth. Use it to draw antlers on the treats. Attach candy eyes and a red candy nose with drops of melted chocolate. Let the treats cool until the chocolate hardens before serving ",
    "Url": "https://www.devourdinner.com/wp-content/uploads/2021/12/Rice-Krispie-Reindeer-Pops_Devour-Dinner-109.jpg"
  },
  
  {
    "category": "Snacks",
    "name": "Grinch-Marshmallow",
    "receipe": "To make Grinch Marshmallow Pops, first thread four marshmallows onto a skewer. Melt white candy melts and coat the marshmallows, letting the excess drip off, then allow them to dry. Melt green candy melts and drizzle over the marshmallows, adding heart sprinkles before the candy hardens.",
    "url": "https://www.lovinglivinglancaster.com/wp-content/uploads/2019/11/Grinch-Marshmallow-Pops-Sample-4-2-scaled.jpg.webp"
  },
  
  {
    "Category": "Snacks",
    "name": "Grinch-Cake pop",
    "receipe": "To make Grinch Cake Pops, mix crumbled chocolate cake with frosting until it forms a firm batter. Roll it into 1.5-inch balls and set aside. Melt green candy melts and dip cake pop sticks into it, then insert them into the cake balls. Coat the cake balls in the melted candy, scraping off excess, and let them harden. Add a red candy heart to each pop to represent the Grinch's small heart.",
    "url": "https://kathrynskitchenblog.com/grinch-cake-pops/"
  }]
  
  
  // 1. parse JSON object into array of objects
  
  const stringJSON = JSON.stringify(recipesJSON)
  const recipes = JSON.parse(stringJSON);

  // 2. Once recipe category is selected on page 2 call function createDropdownMenu  

const selectCategory = document.getElementById("select-category");

selectCategory.addEventListener("change", function () {
  // get selected category
  const selectedCategory = selectCategory.options[selectCategory.selectedIndex].text;
  // call function createDropdownMenupass with 2 parameters: array recipes and string selected category
  createDropdownMenu(recipes, selectedCategory);
});



// function selects recipes of passed category and create a new dropdown menu with recipes' names

function createDropdownMenu(recipes, category) {

  // remove target options in select-recipes (clear dropdown list)
  clearDropdownMenu();

  // add the first option with the name of category in a new list
  addTargetOption(`Choose ${category}`);

  // select recipes by the category and passes them to function addTargetOption (function add new target option in the drop-down list)
  recipes.forEach(recipe => {
    if (recipe.category === category) {

      // pass recipe name as a parameter to addTargetOption (creates new target option)
      addTargetOption(recipe.name);
    }
  })
}