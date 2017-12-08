import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from  "react-redux";
import Routers from "./routers/router";
import { BrowserRouter } from  "react-router-dom";
import store from "./redux/store/store";
import registerServiceWorker from './registerServiceWorker';
import 'element-theme-default';
import './index.css';

ReactDOM.render(
	(<Provider store={store}>
		<BrowserRouter>
			<Routers></Routers>
		</BrowserRouter>
	</Provider>),
	document.getElementById('root')
);
registerServiceWorker();
