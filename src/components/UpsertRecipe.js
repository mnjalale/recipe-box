import React from 'react';

function UpsertRecipe(props){
    return (
        <div>
            <div className="modal fade" id="upsertRecipeModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 className="modal-title" id="myModalLabel">{props.mode}</h4>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group row">
                                   <div className="col-xs-12">
                                       <label>Recipe</label>
                                       <input type="text"
                                              placeholder="Recipe name"
                                              className="form-control"
                                              onChange={props.onUpdateRecipeName}
                                              value={props.recipeName}
                                              required
                                                />
                                   </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-xs-12">
                                        <label>Ingredients</label>
                                        <input type="text"
                                               placeholder="Enter ingredients separated by commas"
                                               className="form-control"
                                               onChange={props.onUpdateIngredients}
                                               value={props.ingredientsString}
                                               required/>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={props.onSubmit}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

UpsertRecipe.propTypes={
    mode:React.PropTypes.string.isRequired,
    onSubmit:React.PropTypes.func.isRequired,
    onUpdateRecipeName:React.PropTypes.func.isRequired,
    onUpdateIngredients:React.PropTypes.func.isRequired,
    recipeName:React.PropTypes.string.isRequired,
    ingredientsString:React.PropTypes.string.isRequired
};

export default UpsertRecipe;
