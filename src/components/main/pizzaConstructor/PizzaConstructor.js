import React, { Component } from 'react';
import { connect } from "react-redux";
import { pizzaActions } from '../../../actions/pizzaActions'
import Ingredient from './Ingredient';
import AddedIngredient from './AddedIngredient';

class PizzaConstructor extends Component {

    state = {
        pizza_size: 22
    }

    componentDidUpdate(prevProps, prevState) {
        const { pizza_size } = this.state;
        const { priceFromSize, createPizzaPrice, updateIngredients } = this.props;

        if (pizza_size !== prevState.pizza_size) {
            createPizzaPrice({ pizza_size });
        }
        
        if (priceFromSize !== prevProps.priceFromSize) {
            updateIngredients(priceFromSize.ingredients);
        }
    }

    addIngredientFromUi = (event) => {
        const { addIngredient, priceFromSize } = this.props;
        const ingredient = priceFromSize.ingredients.find((ingridient) => ingridient.name ===
            event.target.closest(".ingredient-list__ingredient-text-info").querySelector(".ingredient-list__ingredient-name").textContent.trim());
        if (ingredient) {
            addIngredient(ingredient);
        }
    }

    reduceIngredientFromUi = (event) => {
        const { reduceIngredient, priceFromSize } = this.props;
        const ingredient = priceFromSize.ingredients.find((ingridient) => ingridient.name ===
            event.target.closest(".ingredient-list__ingredient-text-info").querySelector(".ingredient-list__ingredient-name").textContent.trim());
        if (ingredient) {
            reduceIngredient(ingredient)
        }
    }

    handleChoosePizzaSize = (target) => {
        if (!target) {
            return;
        }
        const { name, value } = target;

        this.setState({
            [name]: value
        });
    }

    handleConstructorClicks = (event) => {
        const { classList } = event.target;

        if (classList.contains("button-add-inrgedient")) {
            this.addIngredientFromUi(event);
        }

        if (classList.contains("button-reduce-inrgedient")) {
            this.reduceIngredientFromUi(event);
        }
    }

    addToPizzaBox = () => {
        const { priceFromSize, addedIngredients } = this.props;
        let pizzaBoxContent = JSON.parse(localStorage.getItem("ContentPizzaBox")) || [];
        const pizzaData = {
            urlImage: "url",
            name: "base",
            totalPrice: priceFromSize.basePizzaPrice + (addedIngredients.reduce((prev, curr) => prev + curr.price, 0)),
            size: this.state.pizza_size,
            amount: 1,
            ingredients: addedIngredients
        }
        pizzaBoxContent.push(pizzaData);
        localStorage.setItem("ContentPizzaBox", JSON.stringify(pizzaBoxContent));
    }

    render() {
        const { priceFromSize, addedIngredients } = this.props;
        const { pizza_size } = this.state;
        return (
            <React.Fragment>
                <div className="sizes_pizza" onClick={(e) => this.handleChoosePizzaSize(e.target.querySelector("input[type='radio']"))}>
                    <div className="btn-group btn-group-toggle" data-toggle="buttons">
                        <label className="btn btn-light active">
                            <input type="radio" name="pizza_size" id="option1" autoComplete="off" value={22} onChange={() => { }}
                                checked={pizza_size === 22} /> 22 cm
                        </label>
                        <label className="btn btn-light" >
                            <input type="radio" name="pizza_size" id="option2" autoComplete="off" value={30} onChange={() => { }}
                                checked={pizza_size === 30} /> 30 cm
                        </label>
                        <label className="btn btn-light">
                            <input type="radio" name="pizza_size" id="option3" autoComplete="off" value={36} onChange={() => { }}
                                checked={pizza_size === 36} /> 36 cm
                        </label>
                    </div>
                </div>
                <div className="pizza-constructor">
                    <div id="exTab2" className="container pizza-constructor__container">
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
                        <div className="tab-content " onClick={this.handleConstructorClicks}>
                            <div className="tab-pane active" id="MeatAndFishConstructor">
                                <div className="tab-pane-content">
                                    <ul className="ingredient-list">
                                        {priceFromSize.ingredients.filter((ingredient) => ingredient.type === "Meat").map((ingredient, ind) => {
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
                                    <ul className="ingredient-list">
                                        {priceFromSize.ingredients.filter((ingredient) => ingredient.type === "Cheese").map((ingredient, ind) => {
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
                                    <ul className="ingredient-list">
                                        {priceFromSize.ingredients.filter((ingredient) => ingredient.type === "Vegetables").map((ingredient, ind) => {
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
                                    <ul className="ingredient-list">
                                        {priceFromSize.ingredients.filter((ingredient) => ingredient.type === "Sauce").map((ingredient, ind) => {
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
                    <div className="pizza-constructor__logging-price">
                        <div>Base pizza price {priceFromSize.basePizzaPrice} $</div>
                        <ul className="logging-price-list">
                            {addedIngredients.map((addedIngredient, ind) => {
                                return <AddedIngredient
                                    key={ind}
                                    {...addedIngredient}
                                />
                            })}
                        </ul>
                        <div className="pizza-constructor__total-price">Total price of pizza :
                        {priceFromSize.basePizzaPrice + (addedIngredients.reduce((prev, curr) => prev + curr.price, 0))}
                            $</div>
                        <div className="btn btn-primary add-to-pizza-box-button" onClick={this.addToPizzaBox}>Add to pizza box</div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToprops = (state, ownProps) => {
    return {
        priceFromSize: state.pizza.prices || ownProps.prices,
        addedIngredients: state.ingredients
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        reduceIngredient: (ingredient) => dispatch(pizzaActions.reduceIngredient(ingredient)),
        addIngredient: (ingredient) => dispatch(pizzaActions.addIngredient(ingredient)),
        createPizzaPrice: (price) => dispatch(pizzaActions.createPizzaPrice(price)),
        updateIngredients: (ingredients) => dispatch(pizzaActions.updateIngredients(ingredients)),
    }
}

export default connect(mapStateToprops, mapDispatchToProps)(PizzaConstructor);

