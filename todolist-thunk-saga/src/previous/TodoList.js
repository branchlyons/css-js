import React, { Component, Fragment } from 'react';
import axios from 'axios'
import TodoItem from './todoitem'
import './style.css'


class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      list: [2, 5, 8]
    }
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleBtndelete = this.handleBtndelete.bind(this)
    this.handleinoutchange = this.handleinoutchange.bind(this)
  }

  // UNSAFE_componentWillMount(){
  //   console.log('componenentwillmont');  
  // }
  // componentDidMount(){
  //   console.log('componentDidMount');

  // }
  // shouldComponentUpdate(){
  //   console.log('shouldComponent Udate');
  //   return true
  // }
  // UNSAFE_componentWillUpdate(){
  //   console.log('componentWillUpdate');

  // }
  // componentDidUpdate(){
  //   console.log('componentDidUpdate');

  // }
  // UNSAFE_componentWillReceiveProps(){
  //   console.log('componentWillReceiveProps');

  // }

  componentDidMount() {
    axios.get('https://reqres.in/api/users/2')
      .then((res) => {
        console.log(res.data);
        this.setState(() => ({
          list: [...this.state.list, res.data]
        }))
      })
      .catch(() => { alert('error') })
  }


  render() {
    console.log('render 1');

    return (
      <Fragment>
        <div>
          <label htmlFor='insert'>type</label>
          <input
            id='insert'
            className='input'
            value={this.state.inputValue}
            onChange={this.handleinoutchange}
            ref={(input) => { this.input = input }}
          />
          <button onClick={this.handleBtnClick}>submmit</button>
        </div>
        <ul ref={(ul) => { this.ul = ul }}>
          {this.getToDoItem()}
        </ul>

      </Fragment>
    )
  }

  getToDoItem() {
    return this.state.list.map((item, index) => {
      return (
        <div key={index}>
          <TodoItem content={item} index={index}
            delete={this.handleBtndelete} />
        </div>
      )
    })
  }

  handleinoutchange(e) {
    const value = e.target.value
    this.setState(() => ({
      inputValue: value
    }))
  }
  handleBtnClick() {
    this.setState((prevtate) => ({
      list: [...prevtate.list, prevtate.inputValue],
      inputValue: ''
    }),
      () => {
        console.log(this.ul.querySelectorAll('div').length);

      })
  }
  handleBtndelete(index) {
    this.setState((prevtate) => {
      const list = [...prevtate.list]
      list.splice(index, 1);
      return { list: list }
    })
  }

}
export default TodoList