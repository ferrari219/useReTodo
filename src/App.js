import React, { useState, useReducer } from 'react';
import reducer, {
	initialState,
	ADD,
	DEL,
	COMPLETED,
	UNCOMPLETED,
} from './reducer';

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
	const handleComplete = (id) => {
		dispatch({ type: COMPLETED, payload: id });
	};
	const handleUnComplete = (id) => {
		dispatch({ type: UNCOMPLETED, payload: id });
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
								❌
							</button>
							<button onClick={() => handleComplete(item.id)}>
								✅
							</button>
						</li>
					))}
				</ul>
				<p>{JSON.stringify(state.toDos)}</p>
			</section>
			<section>
				<h2>comp</h2>
				<ul>
					{state.completed.map((item) => (
						<li key={item.id}>
							<span>{item.text}</span>
							<button onClick={() => handleDelete(item.id)}>
								❌
							</button>
							<button onClick={() => handleUnComplete(item.id)}>
								❎
							</button>
						</li>
					))}
				</ul>
				<p>{JSON.stringify(state.completed)}</p>
			</section>
		</div>
	);
};

export default App;
