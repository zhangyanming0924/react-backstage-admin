import $ from 'axios'

export const ADD_GUN = "ADD_GUN";
export const REMOVE_GUN = "REMOVE_GUN";
export const GET_DATA = "GET_DATA";
export const INIT_DATA = "INIT_DATA";

export const addGun=()=> {
	return dispatch=>{
		dispatch({
			type: ADD_GUN
		})
	}
}
export const removeGun=()=> {
	return dispatch=>{
		dispatch({
			type: REMOVE_GUN
		})
	}
}
export const addGunAsync=(url)=> {
	return dispatch => {
		// dispatch({type: INIT_DATA,text:""})
		return $.get(url)
		.then(response => {
			dispatch({type: GET_DATA,text:response.data})
		})
		.catch(error => {console.log(error);})
	}
}