const initState = {
    filter: '',
}

const navReducer = (state = initState, action) => {
    if (action.type == 'FILTER_SEARCH') {
        return {...state, filter:action.filter}
    }
    return state
}

export default navReducer