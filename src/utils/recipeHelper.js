
function seedDefaultRecipes(){
    let recipes = [
        {
            recipeName: 'Stewed lamb',
            ingredients: ['6 lamb leg steaks', '50g plain flour', '6 tbsp olive oil','150ml white wine']
        },
        {
            recipeName: 'Ajo blanco',
            ingredients: ['200g blanched almonds', '50ml extra virgin olive oil']
        },
        {
            recipeName: 'Classic spaghetti Bolognese',
            ingredients: ['2 tbsp oil', 'Onions', 'Carrots','White Wine']
        }
    ]

    localStorage.setItem('recipes',JSON.stringify(recipes));
}

export function getRecipes(){
    console.log('in recipes');
    if(localStorage.getItem('recipes')){
        let recipes = localStorage.getItem('recipes');
        return JSON.parse(recipes);
    }else{
        //Seed default recipes
        seedDefaultRecipes();

        let recipes = localStorage.getItem('recipes');
        return JSON.parse(recipes);
    }
}

export function deleteRecipe(recipeName){
    console.log('Reached delete recipe');
    let recipes = getRecipes();

    let newRecipes = recipes.filter(function(recipe){
        return recipe.recipeName !== recipeName;
    });

    localStorage.setItem('recipes',JSON.stringify(newRecipes));
}

export function saveRecipe(recipe){
    let recipes = getRecipes();

    let existingRecipes = recipes.filter(function(current){
        return recipe.recipeName===current.recipeName;
    });

    if(existingRecipes.length>0){
        //update
        for(let i=0;i<recipes.length;i++){
            if(recipes[i].recipeName===recipe.recipeName){
                recipes[i].ingredients=recipe.ingredients;
            }
        }

    }else{
        recipes.push(recipe);
    }

    localStorage.setItem('recipes',JSON.stringify(recipes));
}

export function getRecipeByName(recipeName){
    let recipes = getRecipes();
    let filteredRecipes = recipes.filter(function(recipe){
        return recipe.recipeName===recipeName;
    });

    if(filteredRecipes.length>0){
        return filteredRecipes[0];
    }
    else{
        return null;
    }
}


