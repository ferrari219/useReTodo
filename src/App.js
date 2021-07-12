import React, { useReducer } from 'react';

const initialState = {
	counter: 0,
};

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const reducer = (state, action) => {
	switch (action.type) {
		case INCREMENT:
			return { counter: state.counter + 1 };
		case DECREMENT:
			return { counter: state.counter - 1 };
		default:
			return;
	}
};
const App = () => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const handleIncrement = (e) => {
		e.preventDefault();
		dispatch({ type: INCREMENT });
	};
	const handleDecrement = (e) => {
		e.preventDefault();
		dispatch({ type: DECREMENT });
	};
	return (
		<div>
			<h1>{state.counter}</h1>
			<button onClick={handleIncrement}>+</button>
			<button onClick={handleDecrement}>-</button>
		</div>
	);
};

export default App;
