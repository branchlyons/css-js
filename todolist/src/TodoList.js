import React from 'react'
import { connect } from 'react-redux'

const TodoList = (props) => {
  const { inputValue, handleBtnClick, changeInputValue, deleteitem, list } = props
  return (
    <div>
      <div>
        <input value={inputValue} onChange={changeInputValue} />
        <button onClick={handleBtnClick}>submmit</button>
      </div>
      <ul>
        {list.map((item, index) => {
          return <li onClick={() => { deleteitem(index) }} key={index}>{item}</li>
        })}
      </ul>
    </div>
  )

}


const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}
//       store.dispatch, props
const mapDispatchToProps = (dispatch) => {
  return {
    changeInputValue(e) {
      const action = {
        type: 'change_input_value',
        value: e.target.value
      }
      dispatch(action)
    },
    handleBtnClick() {
      const action = {
        type: 'click_button'
      }
      dispatch(action)
    },
    deleteitem(index) {
      const action = {
        type: 'item_delete',
        index
      }
      dispatch(action)
    }
  }


}
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)