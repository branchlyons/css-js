import { GET_SAGA,CHANGE_INPUT_VALUE, ON_CLICK, ITEM_CLICK, GET_ITEM } from "./actiontypes";
// import axios from 'axios'

export const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
})

export const getitempush = () => ({
  type: ON_CLICK,
})

export const itemDelete = (index) => ({
  type: ITEM_CLICK,
  index
})
export const axiosGet = (data) => ({
  type: GET_ITEM,
  data
})
export const Getsaga = () => ({
  type: GET_SAGA,

})
// export const Getapi = () => {
//   return (dispatch) => {
//     axios.get('https://reqres.in/api/users/2')
//       .then((res) => {
//         const data = res.data
//         const action = axiosGet(data)
//         dispatch(action)
//       })
//   }
// }