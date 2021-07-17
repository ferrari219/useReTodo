import React from 'react';
import { useDispatch } from '../context';
import { DEL, COMPLETED, UNCOMPLETED } from '../actions';

const ToDo = ({ id, text, isCompleted }) => {
	// console.log(isCompleted);
	const dispatch = useDispatch();

	const handleDelete = (id) => {
		dispatch({ type: DEL, payload: id });
	};
	const handleComplete = (id) => {
		dispatch({ type: isCompleted ? UNCOMPLETED : COMPLETED, payload: id });
	};
	return (
		<li>
			<span>{text}</span>
			<button onClick={() => handleDelete(id)}>❌</button>
			<button onClick={() => handleComplete(id)}>
				{isCompleted ? <>❎</> : <>✅</>}
			</button>
		</li>
	);
};

export default ToDo;
