import * as model from './model.js';
import { MODAL_CLOSE_SEC } from './config.js';
import recipeView from './views/recipeVeiw.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import bookmarksView from './views/bookmarksView.js';
import paginationView from './views/paginationView.js';
import addRecipeView from './views/addRecipeView.js';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { async } from 'regenerator-runtime';

// if(module.hot){
// module.hot.accept();
// }


const controlRecipes = async function() {

  try{
    const id = window.location.hash.slice(1);
    if (!id) return;
   recipeView.renderSpinner();

   // 0) Update results view to mark selected search results
   resultsView.update(model.getSearchResultsPage());
   bookmarksView.update(model.state.bookmarks);

    // 1) Loading recipe
    await model.loadRecipe(id);
   
  //2 Rendering recipe
  recipeView.render(model.state.recipe);
  } catch(err) {

    recipeView.renderError();
  }
  
};

const controlSearchResults = async function(){
  try {
    
   
    resultsView.renderSpinner();
    // 1)get search query
    const query = searchView.getQuery();

    if (!query) return;
   
   
   // 2)Load search results
   await model.loadSearchResults(query);
  
  //3)Render results
  // resultsView.render(model.state.search.results);

  resultsView.render(model.getSearchResultsPage());
   //4) Render initial pagination buttons
       paginationView.render(model.state.search);

   
  } catch (err) {
    console.log(err);
  }
};

const controlPagination = function(goToPage){
  //1)Render NEW results

  // resultsView.render(model.state.search.results);
  resultsView.render(model.getSearchResultsPage(goToPage));


   //2) Render NEW pagination buttons
       paginationView.render(model.state.search);
}


const controlServings = function(newServings){
  //Update the recipe servings(in state)
  model.updateServings(newServings);
 


  //Update the  reciepe view
  // recipeView.render(model.state.recipe);
  recipeView.update(model.state.recipe);
};

const controlAddBookmark = function(){
  /// Add/remove bookmark
  if (!model.state.recipe.bookmarked)model.addBookmark(model.state.recipe);
  else model.deleteBookmark(model.state.recipe.id);
   
  // Update recipe view
  recipeView.update(model.state.recipe);

  //3 Render bookmarks
  bookmarksView.render(model.state.bookmarks);
}

const controlBookmarks = function(){
  
  bookmarksView.render(model.state.bookmarks);
};

const controlAddRecipe = async function( newRecipe){
  
   try{

    // Show loading spinner
    addRecipeView.renderSpinner();
   //Upload the new Recipe data
   await model.uploadRecipe(newRecipe);
   console.log(model.state.recipe);

    //Render recipe
    recipeView.render(model.state.recipe);


    //Success message
    addRecipeView.renderMessage();

    //Close form window
    setTimeout(function(){
      addRecipeView.toggleWindow()
    }, MODAL_CLOSE_SEC * 1000);

   }catch(err){
    console.error(err);
    addRecipeView.renderError(err.message);
   }
 
 
};

const init = function(){
  bookmarksView.addHandlerRender(controlBookmarks);
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
  addRecipeView.addHandlerUpload(controlAddRecipe);
 
};
init();

