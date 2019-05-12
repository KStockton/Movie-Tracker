
export const userReducer = (state = {favorites: []}, action) => {
    switch(action.type) {
        case 'ADD_USER': 
            return {...action.user, ...state}
        case 'REMOVE_USER': 
            return action.user
        case 'SET_FAVORITE':
                
            return 
        default: 
        	return state;
    }
}