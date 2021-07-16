import React from 'react';
import { DEL, COMPLETED, UNCOMPLETED } from '../actions';
import { useDispatch } from '../context';
const ToDo = ({ id, text, isCompleted }) => {
	const dispatch = useDispatch();
	const handleDelete = (id) => {
		dispatch({ type: DEL, payload: id });
	};
	const handleComplete = (id, isCompleted) => {
		dispatch({ type: isCompleted ? UNCOMPLETED : COMPLETED, payload: id });
	};
	return (
		<li key={id}>
			<span>{text}</span>
			<button onClick={() => handleDelete(id)}>❌</button>
			<button onClick={() => handleComplete(id, isCompleted)}>
				{isCompleted ? <span>❎</span> : <span>✅</span>}
			</button>
		</li>
	);
};

export default ToDo;
