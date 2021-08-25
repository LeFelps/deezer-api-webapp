// setting a initialState so state does not return 'undefined'
const initState = {
    filter: '',
}

// defining the reducer to watch for dispatched actions
const navReducer = (state = initState, action) => {
    if (action.type === 'FILTER_SEARCH') {
        return {...state, filter:action.filter}
    }
    return state
}

export default navReducer