import React, { useState, useReducer } from 'react';

const initialState = {
	toDos: [],
};

const ADD = 'add';
const DEL = 'del';
const reducer = (state, action) => {
	switch (action.type) {
		case ADD:
			// console.log(state);
			// console.log(Date.now());
			return {
				toDos: [
					...state.toDos,
					{ text: action.payload, id: Date.now() },
				],
			};
		case DEL:
			// console.log(state);
			return {
				toDos: state.toDos.filter((item) => item.id !== action.payload),
			};
		default:
			return;
	}
};

const App = () => {
	const [value, setValue] = useState('');
	const [state, dispatch] = useReducer(reducer, initialState);

	const onChange = (e) => {
		const value = e.target.value;
		setValue(value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		// console.log('submit');
		dispatch({ type: ADD, payload: value });
		setValue('');
	};
	const handleDelete = (id) => {
		dispatch({ type: DEL, payload: id });
	};
	return (
		<div>
			<h1>Title</h1>
			<form onSubmit={handleSubmit}>
				<input type="text" value={value} onChange={onChange} />
			</form>
			<section>
				<h2>list</h2>
				<ul>
					{state.toDos.map((item) => (
						<li key={item.id}>
							<span>{item.text}</span>
							<button onClick={() => handleDelete(item.id)}>
								X
							</button>
						</li>
					))}
				</ul>
				<p>{JSON.stringify(state.toDos)}</p>
			</section>
		</div>
	);
};

export default App;
