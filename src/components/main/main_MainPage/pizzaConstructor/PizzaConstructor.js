import React, {Component} from 'react'
import {connect} from 'react-redux'
import {pizzaActions} from '../../../../actions/pizzaActions'
import {Tab, Loader, Button, Sticky} from 'semantic-ui-react'
import {
  pizzaSizes,
  pizzaTypeIngredients,
  pizzaSizeIndexes,
  pizzaIndexeSizes,
  toastrNotificationData,
  coefficientPrice
} from '../../../../constants/constants'
import {RadioGroupSizes} from './RadioGroupSizes'
import {getLocalStorageItem, setLocalStorageItem} from '../../../../helpers/authorizationHelper'
import Ingredient from './Ingredient'
import '../../../../styles/constructor.css'
import AddedIngredient from './AddedIngredient'
import {toastrNotification} from '../../../../helpers/toastrHelper'

class PizzaConstructor extends Component {
  state = {
    pizzaSizeIndex: pizzaSizeIndexes[pizzaSizes.small]
  }

  componentWillUpdate(nextProps, nextState) {
    const {products, createPriceFromSize} = this.props
    const {pizzaSizeIndex} = this.state

    if (nextState.pizzaSizeIndex !== pizzaSizeIndex) {
      const updatedPriceProducts = products.map(product => {
        const newPriceIngredient = Object.assign({}, product)
        const coefficientDifferencePrice = Math.abs(nextState.pizzaSizeIndex - pizzaSizeIndex)
        if (nextState.pizzaSizeIndex > pizzaSizeIndex) {
          newPriceIngredient.price += coefficientDifferencePrice * coefficientPrice
        } else {
          newPriceIngredient.price -= coefficientDifferencePrice * coefficientPrice
        }
        return newPriceIngredient
      })

      createPriceFromSize(updatedPriceProducts, nextState.pizzaSizeIndex)
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const {products, refreshIngredients} = this.props

    if (products !== prevProps.products) {
      refreshIngredients(products)
    }
  }

  createListOfIngredients = (products, type) => {
    return (
      <ul className="all-ingredients-list">
        {products ? (
          products
            .filter(ingredient => ingredient.type === type)
            .map(ingredient => <Ingredient key={ingredient.id} {...ingredient} />)
        ) : (
          <Loader active />
        )}
      </ul>
    )
  }

  createListOfAddedIngredients = () => {
    const {addedIngredients} = this.props

    return (
      <ul className="added-ingredients-list">
        {addedIngredients
          ? addedIngredients.map((ingredient, ind) => <AddedIngredient key={ind} {...ingredient} />)
          : false}
      </ul>
    )
  }

  addToPizzaBox = () => {
    const {addedIngredients, basePizzaPrice} = this.props
    let pizzaBoxContent = JSON.parse(getLocalStorageItem('ContentPizzaBox')) || []
    const pizzaData = {
      urlImage: 'url',
      name: 'base',
      totalPrice: basePizzaPrice + addedIngredients.reduce((prev, curr) => prev + curr.price, 0),
      size: pizzaIndexeSizes[this.state.pizzaSizeIndex],
      amount: 1,
      ingredients: addedIngredients
    }

    pizzaBoxContent.push(pizzaData)
    setLocalStorageItem('ContentPizzaBox', JSON.stringify(pizzaBoxContent))
  }

  choosePizzaSize = (e, {value}) => {
    this.setState({
      // prevPizzaSizeIndex: this.state.pizzaSizeIndex,
      pizzaSizeIndex: value
    })
  }

  handleAddReduceIngredients = event => {
    const {classList} = event.target

    if (classList.contains('button-add-inrgedient') || classList.contains('button-reduce-inrgedient')) {
      const {addIngredient, reduceIngredient, products, addedIngredients, addUpdateIngredient} = this.props
      const ingredient = products.find(
        ingridient =>
          ingridient.name ===
          event.target
            .closest('.ingredient-list__ingredient-text-info')
            .querySelector('.ingredient-list__ingredient-name')
            .textContent.trim()
      )

      if (ingredient) {
        if (classList.contains('button-add-inrgedient')) {
          const repeatingIngredient = addedIngredients.find(el => el.name === ingredient.name)
          if (repeatingIngredient) {
            addUpdateIngredient(repeatingIngredient)
          } else {
            addIngredient(ingredient)
          }
        }

        if (classList.contains('button-reduce-inrgedient')) {
          reduceIngredient(ingredient)
        }
      }
    }
  }

  render() {
    const {products, basePizzaPrice, addedIngredients, hasGetProductsFailed} = this.props
    if (hasGetProductsFailed) {
      toastrNotification('error', toastrNotificationData.getproductsError)
      return null
    }
    const panes = [
      {
        menuItem: pizzaTypeIngredients.meat,
        render: () => <Tab.Pane>{this.createListOfIngredients(products, pizzaTypeIngredients.meat)}</Tab.Pane>
      },
      {
        menuItem: pizzaTypeIngredients.cheese,
        render: () => <Tab.Pane>{this.createListOfIngredients(products, pizzaTypeIngredients.cheese)}</Tab.Pane>
      },
      {
        menuItem: pizzaTypeIngredients.vegetables,
        render: () => <Tab.Pane>{this.createListOfIngredients(products, pizzaTypeIngredients.vegetables)}</Tab.Pane>
      },
      {
        menuItem: pizzaTypeIngredients.sauce,
        render: () => <Tab.Pane>{this.createListOfIngredients(products, pizzaTypeIngredients.sauce)}</Tab.Pane>
      }
    ]

    return (
      <div className="pizza-constructor">
        <RadioGroupSizes choosePizzaSize={this.choosePizzaSize} statePizzaConstuctor={this.state} />
        <div className="pizza-constructor__content">
          <Tab
            panes={panes}
            onClick={this.handleAddReduceIngredients}
            className="pizza-constructor__content-tab-panel"
          />
          <div className="pizza-constructor__content-logging-price">
            Base pizza price: <b>{basePizzaPrice}$</b>
            {this.createListOfAddedIngredients()}
            <div className="pizza-constructor__content-total-price">
              Total price of pizza :{' '}
              <b>{basePizzaPrice + addedIngredients.reduce((prev, curr) => prev + curr.price, 0)}$</b>
            </div>
            <Button className="add-to-pizza-box-button" primary onClick={this.addToPizzaBox}>
              Add to pizza box
            </Button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const {products, basePizzaPrice, hasGetProductsFailed} = state.pizza
  const addedIngredients = state.addedIngredients

  return {
    products,
    basePizzaPrice,
    addedIngredients,
    hasGetProductsFailed
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createPriceFromSize: (products, nextSizeIndex) => dispatch(pizzaActions.createPriceFromSize(products, nextSizeIndex)),
    reduceIngredient: ingredient => dispatch(pizzaActions.reduceIngredient(ingredient)),
    addIngredient: ingredient => dispatch(pizzaActions.addIngredient(ingredient)),
    addUpdateIngredient: ingredient => dispatch(pizzaActions.addUpdateIngredient(ingredient)),
    refreshIngredients: ingredients => dispatch(pizzaActions.refreshIngredients(ingredients))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PizzaConstructor)
