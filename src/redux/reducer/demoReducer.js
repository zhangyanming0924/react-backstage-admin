import { combineReducers } from 'redux';

export const num=(state=10, action)=> {
	switch (action.type){
		case "ADD_GUN":
			return state + 1;
		case "REMOVE_GUN":
			return state - 1;
		default:
			return state;
	}
}
export const cityData=(state={roomName: "初始数据"}, action={})=> {
	switch (action.type){
		case "GET_DATA":
			return action.text.seatArr;
		default:
			return {...state};
	}
}

export default combineReducers({
	num,
	cityData
})