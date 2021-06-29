/*
	name:
	description:
	Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?

	Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

	Examples:

	// must return 2
	cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200});
	// must return 0
	cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000});
	link: https://www.codewars.com/kata/525c65e51bf619685c000059/train/javascript
*/
function cakes(recipe, available) {
	var nItems = 0;
	var recipeInventory = getInventory(recipe);
	var availableInventory = getInventory(available);
	var indexesItems = validateExistingAllIngredients(availableInventory[0], recipeInventory[0]);
	var nItemsArray = [];
	if ((indexesItems.length > 0) && (recipeInventory[1].length === indexesItems.length)) {
		for (let x = 0; x < recipeInventory[1].length; x++) {
			var valueItemAvailable = availableInventory[1][indexesItems[x]];
			var valueItemRecipe = recipeInventory[1][x];
			nItemsArray.push(getNumberTimes(valueItemAvailable, valueItemRecipe));
		}
		nItems = Math.min.apply(null, nItemsArray);
	}

	return nItems;
}

var getNumberTimes = (available, recipe) => available !== 0 && recipe !== 0 ? Math.floor(available / recipe) : 0;

var validateExistingAllIngredients = (itemsAvailables, itemsReceip) => {
	var indexes = [];
	itemsReceip.forEach(item => {
		var index = itemsAvailables.indexOf(item);
		if (index > -1) {
			indexes.push(index);
		} else {
			indexes = [];
		}
	});
	return indexes;
};

var getInventory = items => [Object.keys(items), Object.values(items)];

const inputRecibe = { sugar: 1000, oil: 2000, butter: 124, orange: 10 };
const inputAvalible = { oil: 7500, sugar: 10550, canela: 50, butter: 500, orange: 50, itemA: 245, itemB: 233 };

let numberCakes = cakes(inputRecibe, inputAvalible);

console.log(numberCakes);