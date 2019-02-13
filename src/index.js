import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import {HashRouter , Route} from 'react-router-dom';
import './index.css';
import Comments from "./components/Comments";


ReactDOM.render(( 	
	<HashRouter>
		<div>
			<Route exact path="/react-app" component={App} />
			<Route path="/react-app/comments" component={Comments} />
		</div>
	</HashRouter>	
	), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
