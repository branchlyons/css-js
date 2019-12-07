import { CHANGE_INPUT_VALUE, ON_CLICK, ITEM_CLICK, GET_ITEM } from './actiontypes.js'


const defaultstate = {
    inputValue: '123',
    list: [1, 2]
}

export default (state = defaultstate, action) => {
    if (action.type === CHANGE_INPUT_VALUE) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    if (action.type === ON_CLICK) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }
    if (action.type === ITEM_CLICK) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index, 1)
        return newState
    }
    if (action.type === GET_ITEM) {
        var newState = JSON.parse(JSON.stringify(state))
        newState.data=action.data
        console.log(newState);
        
        return newState
    }
    

    return state
}