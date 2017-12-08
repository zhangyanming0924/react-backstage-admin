import { combineReducers } from 'redux';

export const user=(state={isAuth:false}, action={})=> {
	console.log("action.isAuth==="+action.isAuth)
	switch (action.type) {
		case "LOGIN":
			return {...state, isAuth: action.isAuth}
		case "LOGOUT":
			return {...state, isAuth: action.isAuth}
		default:
			return {...state}
	}
}
export default combineReducers({
	user
})
