# **Group-Project: Christmas Website**  
---
## **Video Showcasing Our Website With Team Commentary (Final Presentation)**  

[![Watch the video](https://img.youtube.com/vi/4ilDSuqqBis/0.jpg)](https://www.youtube.com/watch?v=4ilDSuqqBis)  
--
## Short Overview of Our Website
[![Watch the video](https://img.youtube.com/vi/qNORDdNGO0U/0.jpg)](https://www.youtube.com/watch?v=qNORDdNGO0U)

## [**Check Out the Project Here!**](https://github.com/users/IuliiaBazhutina/projects/2)  
---

The Christmas website offers fun Christmas trivia, a delightful Christmas recipe book, and festive ideas to make your holiday season special! This website is perfect for people of all ages who love Christmas and want to enjoy the joy, creativity, and traditions of the season.

Our only dependencies for our site would have to be, “how far are you from the north pole?”. To provide you with an accurate distance, we need access to your current location via your device's. This allows us to calculate and display the distance from your position to the North Pole.

Christmas website has 3 pages: Christmas website (Home), Recipes, My recipes. All the pages have been implemented.  

---
### On the page Christmas home page (index.html) a user can see 4 sections:

1. **Christmas countdown calendar**. It shows how many days, hours, minutes and seconds until Christmas (December 25th). 
2. **Christmas facts** This section shows one fact about Christmas and a picture for it.  By clicking the button "Next fact" a user can see another fact and a picture for it. 
3. **Christmas recipes** Button “View recipes” links to the page2.html, Christmas recipes. 
4. **North Pole Location** How far are you from the North Pole. When a user clicks the button “Find Out”, the function gets the user’s location and calculates how far it’s from the North Pole. 

--- 
### On the page Christmas Recipes (page2.html) a user can see a form to view, change and save recipes. 

**Select category:** A user can choose a recipe category from the dropdown list. Once the category is chosen the function creates dynamically a dropdown list from recipes of this category. 

**Select recipe:** A user can choose a recipe from the dropdown list. Once the recipe is chosen, a function displays the recipe’s name, description, and image in the form. 

A users can change the name and description of the recipe. 
Once a user clicks the button “**Save**” the recipe with changes will be saved to the local storage. A user can save several recipes.

Once a user clicks the button “**View My recipes**” the page My recipes (page3.html) will be loaded. 

---
### On the page My recipes (page3.html) a user can see all the saved recipes. 

Once the page My recipes is loaded a user can see all the recipes saved in the local storage.
If there are no recipes saved in the local storage a user will see a message, that there are no saved recipes.

To remove all the saved recipes a user should click a link "**Clear my recipes**". After that, the user will see a message, that there are no saved recipes.
