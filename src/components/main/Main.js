import React from 'react';
import { connect } from "react-redux";
import PizzaConstructor from './pizzaConstructor/PizzaConstructor';
import { pizzaActions } from '../../actions/pizzaActions'
import { pizzaConstants } from '../../actions/types'

const Main = (props) => {
  const { createYourself, isCreateYourself, prices } = props;
  return (
    <main>
      {!isCreateYourself ? <button className="create-pizza-yourself_button" onClick={() => createYourself()}>Create your pizza yourself</button> :
        <PizzaConstructor prices={prices} />}
    </main>
  )
}

const mapStateToProps = (state) => {
  const { isCreateYourself, prices } = state.pizza;
  return {
    isCreateYourself,
    prices
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createYourself: () => dispatch(pizzaActions.createPizzaPrice({ pizza_size: 22 }))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);



