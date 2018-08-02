import React, {Component} from 'react'
import PizzaCard from './PizzaCard'
import Paginator from './Paginator'
import {Loader} from 'semantic-ui-react'
import {pizzaActions} from '../../../../actions/pizzaActions'
import {connect} from 'react-redux'
import '../../../../styles/cardField.css'

class CardField extends Component {
  state = {
    activePage: 1
  }

  componentWillMount() {
    const {getProductsFromDB} = this.props
    const {activePage} = this.state

    getProductsFromDB(`?numPage=${activePage}`)
  }

  componentWillUpdate(nextProps, nextState) {
    const {getProductsFromDB, changePatinationPage, pages} = this.props
    const {activePage} = this.state

    if (nextState.activePage !== activePage) {
      changePatinationPage(pages)
      getProductsFromDB(`?numPage=${nextState.activePage}`)
    }
  }

  chooseActivePage = (e, {activePage}) => {
    this.setState({activePage})
  }

  render() {
    const {pizzas, pages, hasStopLoadingPizzas} = this.props

    return (
      <React.Fragment>
        {pizzas ? (
          <div className="pizza-card-field">
            <div className="pizza-card-field__content">
              {hasStopLoadingPizzas ? (
                pizzas.map(pizza => <PizzaCard {...pizza} key={pizza.id} />)
              ) : (
                <div className="wrapper-loader-pizzas">
                  <Loader active className="loader-pizzas" />
                </div>
              )}
            </div>
            <Paginator handlePaginationChange={this.chooseActivePage} pages={pages} className="paginator" />
          </div>
        ) : (
          <Loader active />
        )}
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  const {pizzas, hasGetProductsFailed, pages, hasStopLoadingPizzas} = state.pizza

  return {
    pizzas,
    hasGetProductsFailed,
    pages,
    hasStopLoadingPizzas
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getProductsFromDB: queryString => dispatch(pizzaActions.getProductsFromDB(queryString)),
    changePatinationPage: page => dispatch(pizzaActions.changePatinationPage(page))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardField)
