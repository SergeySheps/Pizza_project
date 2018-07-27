import {apiConfig} from '../config/apiConfigs/apiConfig'
export const basePizzaPrice = {
  '22': 4,
  '30': 6,
  '36': 8
}

export const inputDateRange = {
  min: '1950-01-01',
  max: '2008-12-31'
}

const url = apiConfig.apiUrl

export const routs = {
  registration: `${url}/registration?`,
  login: `${url}/login`,
  checkEqualEmail: `${url}/registration?isEqual=true`,
  main: `${url}/main`
}
