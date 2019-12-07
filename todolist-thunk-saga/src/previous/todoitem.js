import React, { Component } from 'react'
import PropTypes from 'prop-types'


class TodoItem extends Component {
    constructor(props) {

        super(props);
        this.handleclickdelete = this.handleclickdelete.bind(this)
    }
    // UNSAFE_componentWillReceiveProps() {
    //     console.log('componentWillReceiveProps child');

    // }

    // componentWillUnmount(){
    //     console.log('componentWillUnmount child');
        
    // }
    shouldComponentUpdate(nextProps,nextState){
        if(nextProps.content!==this.props.content){
            return true
        }else{
            return false
        }
        
    }

    render() {
        console.log('render 2');
        
        return (
            <div onClick={this.handleclickdelete}
                dangerouslySetInnerHTML={{ __html: this.props.content }}>
            </div>
        )
    }
    handleclickdelete() {
        const { index } = this.props;
        this.props.delete(index)

    }
}
TodoItem.propTypes = {
    content: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.object]),
    index: PropTypes.number,
    delete: PropTypes.func
}
TodoItem.defaultProps = {

}
export default TodoItem