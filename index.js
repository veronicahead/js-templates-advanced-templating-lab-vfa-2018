function initForm() {
  var formTemplate = document.getElementById("recipe-form-template").innerHTML
  var template = Handlebars.compile(formTemplate)
  document.getElementsByTagName("main")[0].innerHTML = template({'submitAction': 'createRecipe()'})
}

function getRecipeVals() {
  var ingredientsNodes = document.getElementsByName("ingredients")
  var ingredients = []
  for(var i=0;i<ingredientsNodes.length;i++) {
    if(ingredientsNodes[i].value !== "") {
      ingredients.push(ingredientsNodes[i].value)
    }
  }
  var name = document.getElementById("name").value
  var description = document.getElementById("description").value
  var recipe = {name, ingredients, description}
  return(recipe)
}

function createRecipe() {
  var recipeTemplate = document.getElementById("recipe-template").innerHTML
  var recipe = getRecipeVals()
  var template = Handlebars.compile(recipeTemplate)
  document.getElementById("main").innerHTML = template(recipe)
}

function updateRecipe() {
  var recipe = getRecipeVals()
  var recipeTemplate = document.getElementById("recipe-template").innerHTML
  var template = Handlebars.compile(recipeTemplate)
  document.getElementById("main").innerHTML = template(recipe)
}

function displayEditForm() {
  var name = document.getElementById("nameHeader").innerText
  var description = document.getElementById("recipeDescription").innerText
  var ingredientsNodes = document.getElementsByName("ingredientsList")
  var ingredients = []
  for(var i=0;i<ingredientsNodes.length;i++) {
    ingredients.push(ingredientsNodes[i].innerText)
  }

  var recipe = {name, description, ingredients, submitAction: 'createRecipe()'}

  var recipeFormTemplate = document.getElementById("recipe-form-template").innerHTML
  var template = Handlebars.compile(recipeFormTemplate)
  document.getElementById("main").innerHTML = template(recipe)
}



function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerPartial('recipeDetailsPartial', '{{description}}', '{{#each ingredients}}');
  Handlebars.registerHelper('displayIngredient');
  Handlebars.registerPartial('recipeFormPartial', '{{name}}', '{{description}}', '{{ingredients}}');
  initForm()
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

