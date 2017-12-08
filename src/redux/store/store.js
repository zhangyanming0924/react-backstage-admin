import { createStore, combineReducers, applyMiddleware, compose } from  "redux";
import thunk from "redux-thunk";

import * as DemoAction  from "../action/demoAction";
import * as LoginAction from "../action/loginAction";
import demoReducer from "../reducer/demoReducer";
import loginReducer from "../reducer/loginReducer";

const store = createStore(
	combineReducers({demoReducer, loginReducer}), compose(
	applyMiddleware(thunk),
	window.devToolsExtension?window.devToolsExtension():f=>f
));

export const mapStateToProps =(state)=> {
	return {
		num: state.demoReducer.num,
		cityData: state.demoReducer.cityData,
		user: state.loginReducer.user
	}
}
export const mapDispatchToProps=(dispatch)=> {
	return {
		addGun: () => dispatch(DemoAction.addGun()),
		removeGun: () => dispatch(DemoAction.removeGun()),
		addGunAsync: (url) => dispatch(DemoAction.addGunAsync(url)),
		login: (name,pwd,authCode) => dispatch(LoginAction.login(name,pwd,authCode)),
		logout: () => dispatch(LoginAction.logout())
	}
}
export default store;