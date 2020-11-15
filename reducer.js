export const initialState = {
    searchInput: ''
}

const reducer = (state, action) => {
   
    switch(action.type){
        case 'Search':
            return {
                ...state,
                searchInput: action.searchInput
            }
        default:
            return state
    }
}

export default reducer;