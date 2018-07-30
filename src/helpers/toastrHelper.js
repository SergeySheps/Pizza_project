import {toastr} from 'react-redux-toastr'

export const toastrNotification = (type, data) => {
  toastr[type](data.title, data.message)
}
