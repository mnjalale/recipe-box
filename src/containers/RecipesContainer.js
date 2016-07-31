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

    componentDidMount(){
        let recipes = getRecipes();
        this.setState({
            recipes:recipes
        });
    }

    render(){
        return <Recipes recipes={this.state.recipes}/>
    }

}

export default RecipesContainer;