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