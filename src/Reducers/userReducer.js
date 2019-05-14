
export const userReducer = (state = {favorites: []}, action) => {
    switch(action.type) {
        case 'ADD_USER': 
            return {...action.user, ...state}
        case 'REMOVE_USER': 
            return action.user
        case 'SET_USER_FAVORITE':
            return { ...state, favorites: action.user}
        default: 
        	return state;
    }
}