import React from 'react';

function Ingredient(props){
    return(
        <div className="ingredient-container">
            {props.ingredient}
        </div>
    )
}

Ingredient.propTypes={
    ingredient:React.PropTypes.string.isRequired
}

export default Ingredient;
