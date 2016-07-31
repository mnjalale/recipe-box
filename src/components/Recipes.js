import React from 'react';
import RecipeContainer from '../containers/RecipeContainer';
import UpsertRecipeContainer from '../containers/UpsertRecipeContainer';

function Recipes(props){
    let recipes = props.recipes.map(function(recipe,index){
        return (
            <RecipeContainer key={index} recipe={recipe} onUpdateRecipesAfterDeletion={props.onUpdateRecipesAfterDeletion}/>
        )
    });

    return(

        <div>
            <div className="centering">
                <div className="recipes-panel">
                    <div className="panel-group">
                        {recipes}
                    </div>
                </div>
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#upsertRecipeModal">Add Recipe</button>
            </div>

            <UpsertRecipeContainer mode={'Edit'}/>

        </div>
    )
}

Recipes.propTypes = {
    recipes: React.PropTypes.array.isRequired,
    onUpdateRecipesAfterDeletion: React.PropTypes.func.isRequired
}

export default Recipes;