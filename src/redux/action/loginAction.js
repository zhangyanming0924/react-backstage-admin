import $ from "axios";
export const [LOGIN, LOGOUT] = ["LOGIN", "LOGOUT"];

export const login=(name,pwd,authCode)=> {
	return dispatch=> {
		// $.post("/Admin/Public/checkLogin.html", {
		// 		username: name,
		// 		password: pwd,
		// 		verify: authCode
		// }).then((res)=>{
			dispatch({type:"LOGIN", isAuth: true})
		// })
	}
};

export const logout=()=> {
	return dispatch=> {
		dispatch({
			type:"LOGOUT"
		})
	}
}