import React from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
// import { userActions } from '../../actions/userActions'
import { ingredients } from '../../../static/ingredientsData';
import Ingredient from './Ingredient';

const PizzaConstructor = (props) => {
    const { logout, loggedIn } = props;
    return (
        <div id="exTab2" className="container">
            <ul className="nav nav-tabs">
                <li className="active">
                    <a href="#MeatAndFishConstructor" className="pizza-constructor-tab" data-toggle="tab">Meat and fish</a>
                </li>
                <li><a href="#CheesesConstructor" className="pizza-constructor-tab" data-toggle="tab">Cheeses</a>
                </li>
                <li><a href="#VegetablesConstructor" className="pizza-constructor-tab" data-toggle="tab">Vegetables</a>
                </li>
                <li><a href="#SaucesConstructor" className="pizza-constructor-tab" data-toggle="tab">Sauces</a>
                </li>
            </ul>

            <div className="tab-content ">
                <div className="tab-pane active" id="MeatAndFishConstructor">
                    <div className="tab-pane-content">
                        <ul className = "ingredient-list">
                            {ingredients.filter((ingredient) => ingredient.type === "Meat").map((ingredient, ind) => {
                                return <Ingredient
                                    key={ind}
                                    {...ingredient}
                                />
                            })}
                        </ul>
                    </div>
                </div>
                <div className="tab-pane" id="CheesesConstructor">
                    <div className="tab-pane-content">
                        <ul className = "ingredient-list">
                            {ingredients.filter((ingredient) => ingredient.type === "Cheese").map((ingredient, ind) => {
                                return <Ingredient
                                    key={ind}
                                    {...ingredient}
                                />
                            })}
                        </ul>
                    </div>
                </div>
                <div className="tab-pane" id="VegetablesConstructor">
                    <div className="tab-pane-content">
                        <ul className = "ingredient-list">
                            {ingredients.filter((ingredient) => ingredient.type === "Vegetables").map((ingredient, ind) => {
                                return <Ingredient
                                    key={ind}
                                    {...ingredient}
                                />
                            })}
                        </ul>
                    </div>
                </div>
                <div className="tab-pane" id="SaucesConstructor">
                    <div className="tab-pane-content">
                        <ul className = "ingredient-list">
                            {ingredients.filter((ingredient) => ingredient.type === "Sauce").map((ingredient, ind) => {
                                return <Ingredient
                                    key={ind}
                                    {...ingredient}
                                />
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default connect()(PizzaConstructor);

