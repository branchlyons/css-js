import React, { Component } from 'react'
import 'antd/dist/antd.css'
import store from './store/index.js'
import { Getsaga, getInputChangeAction, getitempush, itemDelete, axiosGet, Getapi } from './store/actionCreaters'
import TodoListUI from './TodoListUI'
import axios from 'axios'

// import { CHANGE_INPUT_VALUE, ON_CLICK, ITEM_CLICK } from './store/actiontypes.js'

// const data = [
//     'Racing car sprays burning fuel into crowd.',
//     'Japanese princess to wed commoner.',
//     'Australian walks 100km after outback crash.',
//     'Man charged over missing wedding girl.',
//     'Los Angeles battles huge wildfires.',
// ];

class TodoList extends Component {

  constructor(props) {
    super(props)
    this.state = store.getState()
    this.handleINputChange = this.handleINputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
    store.subscribe(this.handleStoreChange)
  }
  componentDidMount() {
    // const action=Getapi()
    // store.dispatch(action)
    const action = Getsaga()
    store.dispatch(action)
    // axios.get('https://reqres.in/api/users/2')
    //   .then((res) => {
    //     const data = res.data
    //     const action = axiosGet(data)
    //     store.dispatch(action)
    //   })

  }
  render() {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        list={this.state.list}
        handleINputChange={this.handleINputChange}
        handleClick={this.handleClick}
        handleItemDelete={this.handleItemDelete}
      />
    )
  }
  handleINputChange(e) {
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action)
  }
  handleStoreChange() {
    this.setState(store.getState())

  }
  handleClick() {
    const action = getitempush()
    store.dispatch(action)
  }
  handleItemDelete(index) {
    const action = itemDelete(index)
    store.dispatch(action)
  }
}

export default TodoList