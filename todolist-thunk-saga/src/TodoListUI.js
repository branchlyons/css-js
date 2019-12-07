import React from 'react'
import { Input, Button, List, Typography } from 'antd'

const TodoListUI = (props) => {
  return (
    <div style={{ marginTop: '10px', marginLeft: '10px' }}>
      <div >
        <Input
          value={props.inputValue}
          placeholder='Todo info'
          style={{ marginRight: '10px', width: '300px' }}
          onChange={props.handleINputChange}
        />
        <Button
          onClick={props.handleClick}
          type="primary">submmit</Button>
      </div>
      <List
        style={{ marginTop: '10px', width: '300px' }}
        bordered
        dataSource={props.list}
        renderItem={(item, index) => (
          <List.Item onClick={(() => { props.handleItemDelete(index) })}>
            <Typography.Text mark></Typography.Text> {item}
          </List.Item>
        )}
      />
    </div>)
}

// class TodoListUI extends Component {
//   render() {
//     return (
//       <div style={{ marginTop: '10px', marginLeft: '10px' }}>
//         <div >
//           <Input
//             value={this.props.inputValue}
//             placeholder='Todo info'
//             style={{ marginRight: '10px', width: '300px' }}
//             onChange={this.props.handleINputChange}
//           />
//           <Button
//             onClick={this.props.handleClick}
//             type="primary">submmit</Button>
//         </div>
//         <List
//           style={{ marginTop: '10px', width: '300px' }}
//           bordered
//           dataSource={this.props.list}
//           renderItem={(item, index) => (
//             <List.Item onClick={((index)=>{this.props.handleItemDelete(index)})}>
//               <Typography.Text mark></Typography.Text> {item}
//             </List.Item>
//           )}
//         />
//       </div>
//     )
//   }
// }
export default TodoListUI