function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerPartial('recipeDetailsPartial', '{{description}}', '{{#each ingredients}}');
  Handlebars.registerHelper('displayIngredient');
  Handlebars.registerPartial('recipeFormPartial', '{{name}}', '{{description}}', '{{ingredients}}');

}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

