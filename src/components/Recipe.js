import React from 'react';
import Ingredient from './Ingredient';
import UpsertRecipe from './UpsertRecipe';

function IngredientsWrapper(props){
    let ingredients = props.recipe.ingredients.map(function(ingredient,index){
        return <Ingredient key={index} ingredient={ingredient}/>
    });

    return(
        <div>
            <div className="panel panel-info" style={{margin:'3px'}}>
                <div className="panel-heading">
                    <h4 className="panel-title">
                        <a className={'link ' + props.panelClasses.panelHeaderClass} onClick={props.onHeaderClick}>{props.recipe.recipeName}</a>
                    </h4>
                </div>

                <div id={'collapse' + props.recipe.recipeName} className={props.panelClasses.panelBodyClass}>
                    <div className="panel-body">
                        <div>
                            <h4 className="text-center">Ingredients</h4>
                            <hr/>
                        </div>
                        <div className="ingredients-container">
                            {ingredients}
                        </div>
                        <div>
                            <button type="button" className="btn btn-danger">Delete</button>
                            <button type="button" className="btn btn-success" data-toggle="modal" data-target="#upsertRecipeModal">Edit</button>
                        </div>
                    </div>
                </div>
            </div>

            <UpsertRecipe mode={'Edit'}/>
        </div>
    )
}

IngredientsWrapper.propTypes = {
    recipe:React.PropTypes.object.isRequired,
    onHeaderClick: React.PropTypes.func.isRequired,
    panelClasses: React.PropTypes.object.isRequired
}

export default IngredientsWrapper;