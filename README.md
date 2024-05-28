# Forkify

<img src="https://user-images.githubusercontent.com/112414082/210066803-89a9c1c5-d318-4f81-8508-520f39545e84.png" style="height: 600px; margin: 0 auto" >

Recipe application with custom recipe uploads. 

You can view the project live here:
[Forkify]

---

### Table of Contents

- [Description](#description)
- [Getting Started](#getting-started)
- [References](#references)
- [License](#license)

---

## Description

The application provides the user with:

 -  Comprehensive Recipe Search: Users can search for any recipe through an API, displaying a wide range of recipes for their desired dish. The search results are paginated, ensuring a smooth user experience by displaying up to ten recipes per page.
    Interactive Recipe Details: Users can click on a recipe to view detailed ingredients and instructions. Additionally, the application includes a portion calculator, allowing users to adjust the number of servings and automatically update ingredient        quantities accordingly.

 -  Personalized Recipe Saving: Users can save their favorite recipes to local storage. These saved recipes are persistently available, providing easy access to preferred dishes every time the user returns to the application.
    
 -  User Recipe Upload: The application allows users to contribute by uploading their own recipes. This feature includes a form where users can enter all necessary ingredients and details, enriching the recipe database with user-generated content.

## The application provides the user with:

#### Technologies

- HTML
- SASS
- JS (API, OOP, AJAX)

[Back To The Top](#forkify)

---

## Getting Started

To start the project, it is necessary to download the files from the github, after that you must install npm and script in console.

### Instalation

`npm install` <br> `npm start`

[Back To The Top](#forkify)

---

## References

You can see the documentation for the api here, where you can find all the recipes you can search: [Forkify API v2 Documentation](https://forkify-api.herokuapp.com/v2)

### API References

- This function calls the recipes entered by the user<br>
  `export const loadSearchResults = async function (query) {...};`

- This function calls a recipe by its ID
  <br>
  `export const loadRecipe = async function (id) {...};`
- Through this function, we transfer the new recipe entered by the user to the server. It checks whether the data entered by the user is correct, if so, it uploads the data to the server<br>
  `export const uploadRecipe = async function (newRecipe){...};`

- Every contact with the server takes place through this function, whether you submitted the recipe on the server or requested its access from the server
  <br>
  `export const AJAX = async function (url, uploadData = undefined){...};`

[Back To The Top](#forkify)

---

## License



[Back To The Top](#forkify)
