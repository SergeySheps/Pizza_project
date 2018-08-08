import {apiConfig} from '../config/apiConfigs/apiConfig'

export const pizzaSizes = {
  small: 22,
  average: 30,
  big: 36
}

export const pizzaPrices = {
  small: 6,
  average: 10,
  big: 13
}

export const basePizzaPrice = {
  [pizzaSizes.small]: 4,
  [pizzaSizes.average]: 6,
  [pizzaSizes.big]: 8
}

export const pizzaSizeIndexes = {
  [pizzaSizes.small]: 1,
  [pizzaSizes.average]: 2,
  [pizzaSizes.big]: 3
}

export const pizzaIndexeSizes = {
  1: pizzaSizes.small,
  2: pizzaSizes.average,
  3: pizzaSizes.big
}

export const coefficientPrice = 0.5
export const discountPercent = 10
export const minDiscountOrderPrice = 50
export const defaultPagesCount = 3

export const pizzaTypeIngredients = {
  meat: 'Meat',
  cheese: 'Cheese',
  vegetables: 'Vegetables',
  sauce: 'Sauce'
}

export const inputDateRange = {
  min: '1950-01-01',
  max: '2008-12-31'
}

const url = apiConfig.apiUrl

export const routs = {
  registration: `${url}/registration`,
  login: `${url}/login`,
  checkEqualEmail: `${url}/registration?isEqual=true`,
  main: `${url}/main`,
  history: `${url}/main/history`,
  preview: `${url}`
}

export const toastrNotificationData = {
  registrationSuccess: {
    title: 'Registration',
    message: 'Registration is successfully completed'
  },
  registrationError: {
    title: 'Registration',
    message: 'For some reason the registration was failed, please try again'
  },
  loginError: {
    title: 'Sign-In error',
    message: 'For some reason the sign-in was failed, please try again'
  },
  validationError: {
    title: 'ERROR',
    message: 'Server is not available :('
  },
  getproductsError: {
    title: 'ERROR',
    message: 'Server is not available :('
  },
  orderError: {
    title: 'ERROR',
    message: 'Order has not been proceeded'
  },
  orderSuccess: {
    title: 'Order',
    message: 'Order has been proceeded'
  },
}
