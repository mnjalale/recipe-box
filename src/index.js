import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/style.scss'
import Main from './components/Main';
import RecipesContainer from './containers/RecipesContainer';

ReactDOM.render(<RecipesContainer/>,document.getElementById('app'));
