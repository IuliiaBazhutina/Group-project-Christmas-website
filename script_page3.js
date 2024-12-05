
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



// Function addArticle creates a new article (with <H2>, <P>, and <img> inside) and adds content from parameters

function addArticle(name, recipe, image, alt) {

    // create a new article
    const article = document.createElement("article");

    // create a new title and its content from local storage
    var h2Element = document.createElement('h2');
    h2Element.innerText = name;
    article.appendChild(h2Element);

    // create a new paragraph and its content from local storage 
    var pElement = document.createElement('p');
    pElement.innerText = recipe;
    article.appendChild(pElement);

    // create a new image and its content from local storage 
    var imageElement = document.createElement('img');
    imageElement.src = `${image}`;
    imageElement.alt = `${alt}`;
    imageElement.style.height = '200px';
    article.appendChild(imageElement);

    const main = document.getElementById("main");
    main.appendChild(article);
}



// once "Clear my recipes" link is clicked function clearRecipes is called

const clearLink = document.getElementById('clear-link');
clearLink.addEventListener('click', function () { clearRecipes(); })



// function removes all the articles from the main and creates a new article with a message that there is no saved recipes

function clearRecipes() {
    localStorage.clear();

    const mainElement = document.querySelector('main');

    const articles = mainElement.querySelectorAll('article');

    articles.forEach(article => article.remove())

    // create a new article with a message, that there is no new posts
    addArticle("No recipes available", "Click 'Recipes' and choose recipes which you like", "", "");
}