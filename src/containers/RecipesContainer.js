import React from 'react';
import Recipes from '../components/Recipes'
import { getRecipes } from '../utils/recipeHelper'

class RecipesContainer extends React.Component{
    constructor(){
        super();
        this.state={
            recipes:[]
        };

    }

    handleReceiptsUpdateAfterDeleteion(e){
        let deletedRecipe = e;
        console.log('deletion success');
        console.log(deletedRecipe);
        let recipes = this.state.recipes.filter(function(current){
            return current.recipeName !== deletedRecipe.recipeName;
        });

        this.setState({
            recipes:recipes
        });

    }

    componentDidMount(){
        let recipes = getRecipes();
        this.setState({
            recipes:recipes
        });
    }

    render(){
        return <Recipes recipes={this.state.recipes} onUpdateRecipesAfterDeletion={(e)=> this.handleReceiptsUpdateAfterDeleteion(e)} />
    }

}

export default RecipesContainer;