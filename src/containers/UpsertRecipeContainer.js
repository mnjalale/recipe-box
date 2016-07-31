import React from 'react';
import UpsertRecipe from '../components/UpsertRecipe';
import {saveRecipe} from '../utils/recipeHelper';

class UpsertRecipeContainer extends React.Component{
    constructor(){
        super();
        this.state={
            recipeName:'',
            ingredientsString:''
        };
    }

    handleUpdateRecipeName(e){
        e.preventDefault();
        this.setState({
            recipeName:e.target.value
        });
    }

    handleUpdateIngredients(e){
        e.preventDefault();
        this.setState({
            ingredientsString:e.target.value
        });
    }

    handleSubmit(e){
        e.preventDefault();
        let ingredients=[];
        let ingredientsString = this.state.ingredientsString;

        if(this.state.ingredientsString.indexOf(',')>0){
            ingredients= ingredientsString.split(',');
        }else{
            ingredients.push(ingredientsString);
        }

        let recipe = {
            recipeName: this.state.recipeName,
            ingredients: ingredients
        };

        saveRecipe(recipe);

    }

    render(){

        return(
           <UpsertRecipe mode={this.props.mode}
                         onUpdateRecipeName={(e)=> this.handleUpdateRecipeName(e)}
                         onUpdateIngredients={(e)=> this.handleUpdateIngredients(e)}
                         onSubmit={(e)=> this.handleSubmit(e)}
                         recipeName={this.state.recipeName}
                         ingredientsString={this.state.ingredientsString}/>
        )
    }
}

UpsertRecipeContainer.propTypes={
    mode:React.PropTypes.string.isRequired
}

export default UpsertRecipeContainer;