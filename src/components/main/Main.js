import React from 'react';
import { connect } from "react-redux";
import PizzaConstructor from './pizzaConstructor/PizzaConstructor';
import { pizzaActions } from '../../actions/pizzaActions'
import { pizzaConstants } from '../../constants/pizzaConstants'

const Main = (props) => {
  const {createYourself, isCreateYourself } = props;
  return (
    <main>
      <button className="create-pizza-yourself_button" onClick={() => createYourself()}>Create your pizza yourself</button>
      {isCreateYourself && <PizzaConstructor />}
    </main>
  )
}

const mapStateToProps = (state) => {
  const { isCreateYourself } = state.pizza;
  return {
      isCreateYourself
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    createYourself: () => dispatch(pizzaActions.createPizza(pizzaConstants.PIZZA_CREATE_YOURSELF))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Main);



