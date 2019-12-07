import React, { Component, Fragment } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './styles.css'
class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      // show: true
      list: []
    }
    this.handletoggle = this.handletoggle.bind(this)
    this.handleAddItem = this.handleAddItem.bind(this)
  }
  render() {
    return (
      <Fragment>
        <TransitionGroup>
          {/* <CSSTransition
          in={this.state.show}
          timeout={1000}
          classNames='fade'
          unmountOnExit
          onEnter={(el) => {el.style.color='green' }}
          appear={true}
        > */}
          {
            this.state.list.map((item, index) => {
              return (
                <CSSTransition
                  timeout={1000}
                  classNames='fade'
                  unmountOnExit
                  onEnter={(el) => { el.style.color = 'green' }}
                  appear={true}
                  key={index}>
                  <div>{item}</div>
                </CSSTransition>
              )
            })
          }
          {/* </CSSTransition> */}
          {/* <div className={this.state.show ? 'show':'hide'}>hi</div> */}
        </TransitionGroup>
        <button onClick={this.handleAddItem}>toggle</button>
      </Fragment>
    )
  }
  handleAddItem() {
    this.setState((prevState) => {
      return {
        list: [...prevState.list, 'item']
      }
    })
  }

  handletoggle() {
    this.setState(() => ({
      show: this.state.show ? false : true
    }))
  }
}

export default App