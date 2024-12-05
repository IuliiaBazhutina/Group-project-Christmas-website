
checkLocalStorage();



// function checkLocalStorage calls function displayRecipes if any savedRecipes are available in the local storage
// If there is no available savedRecipes the function creates an article with a message that there is no recipes

function checkLocalStorage() {

    // check if any recipes are available in the local storage
    if (localStorage.getItem("savedRecipes") === undefined || localStorage.getItem("savedRecipes") === "[]" || localStorage.getItem("savedRecipes") === null) {

        // create a new article with a message, that there is no new posts
        addArticle("No recipes available", "Click 'Recipes' and choose recipes which you like", "", "");
    }
    else {
        displayRecipes();
    }
}



// Function displayRecipes retrieves savedRecipes from the local storage, and calls addArticle to create a new article for every recipe

function displayRecipes() {

    //retrieve savedRecipes from local storage and convert them to array of objects
    const recipes = JSON.parse(localStorage.getItem("savedRecipes") || "[]");

    //get value of name, description, image and alt for every recipe
    recipes.forEach(element => {
        let name = element.name;
        let recipe = element.recipe;
        let image = element.url;
        let alt = element.alt;

        // pass title, content and image as parameters to create a new article with content
        addArticle(name, recipe, image, alt);
    });
}