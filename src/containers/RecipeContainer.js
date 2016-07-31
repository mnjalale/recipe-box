import React from 'react';
import Recipe from '../components/Recipe'
import * as recipeHelper from '../utils/recipeHelper'

class RecipeContainer extends React.Component{
    constructor(){
        super();
        this.state={
            panelClasses:{
                panelHeaderClass:'collapsed',
                panelBodyClass: 'panel-collapse collapse'
            }
        }
    }

    handleHeaderClick(){
        if(this.state.panelClasses.panelBodyClass==='panel-collapse collapse'){
            this.setState({
                panelClasses:{
                    panelHeaderClass:'',
                    panelBodyClass: 'panel-collapse collapse in'
                }
            });
        }else{
            this.setState({
                panelClasses:{
                    panelHeaderClass:'collapsed',
                    panelBodyClass: 'panel-collapse collapse'
                }
            });
        }
    }

    componentDidMount(){

    }

    render(){
        return (
           <Recipe recipe={this.props.recipe}
                    panelClasses={this.state.panelClasses}
                    onHeaderClick={()=> this.handleHeaderClick()}/>
        )
    }
}

RecipeContainer.propTypes={
    recipe:React.PropTypes.object.isRequired
}

export default RecipeContainer