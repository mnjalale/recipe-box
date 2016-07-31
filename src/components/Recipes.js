import React from 'react';
import RecipeContainer from '../containers/RecipeContainer'

function Recipes(props){
    let recipes = props.recipes.map(function(recipe,index){
        return (
            <RecipeContainer key={index} recipe={recipe}/>
        )
    });

    return(

        <div>
            <div className="centering">
                <div className="panel-group">
                    {recipes}
                </div>
            </div>

        </div>
    )
}

Recipes.propTypes = {
    recipes: React.PropTypes.array.isRequired
}

export default Recipes;