import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import TodoContextProvider from './context';

ReactDOM.render(
	<React.StrictMode>
		<TodoContextProvider>
			<App />
		</TodoContextProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
