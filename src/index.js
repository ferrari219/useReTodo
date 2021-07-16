import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import todoContextProvider from './context';

ReactDOM.render(
	<React.StrictMode>
		<todoContextProvider>
			<App />
		</todoContextProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
