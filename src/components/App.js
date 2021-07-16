import React from 'react';
// import { DEL, COMPLETED, UNCOMPLETED } from '../actions';
import { useState } from '../context';
import Add from './Add';
import List from './List';
import ToDo from './ToDo';

const App = () => {
	// const [value, setValue] = useState(''); // Add.js 로 보냄
	// const [state, dispatch] = useReducer(reducer, initialState); //context로 보냄

	// Add.js 로 보냄
	// const onChange = (e) => {
	// 	const value = e.target.value;
	// 	setValue(value);
	// };
	// const handleSubmit = (e) => {
	// 	e.preventDefault();
	// 	// console.log('submit');
	// 	dispatch({ type: ADD, payload: value });
	// 	setValue('');
	// };

	const { toDos, completed } = useState();
	return (
		<div>
			<h1>Title</h1>
			<Add />
			<List name="To Do">
				{toDos.map((item) => (
					<ToDo
						key={item.id}
						id={item.id}
						text={item.text}
						isCompleted={false}
					/>
					// <li key={item.id}>
					// 	<span>{item.text}</span>
					// 	<button onClick={() => handleDelete(item.id)}>
					// 		❌
					// 	</button>
					// 	<button onClick={() => handleComplete(item.id)}>
					// 		✅
					// 	</button>
					// </li>
				))}
			</List>
			<List name="comp">
				{completed.map((item) => (
					<ToDo
						key={item.id}
						id={item.id}
						text={item.text}
						isCompleted={true}
					/>
					// <li key={item.id}>
					// 	<span>{item.text}</span>
					// 	<button onClick={() => handleDelete(item.id)}>
					// 		❌
					// 	</button>
					// 	<button onClick={() => handleUnComplete(item.id)}>
					// 		❎
					// 	</button>
					// </li>
				))}
			</List>
		</div>
	);
};

export default App;
