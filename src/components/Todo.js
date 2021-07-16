import React from 'react';
import { useDispatch } from '../context';
import { DEL, COMPLETED, UNCOMPLETED } from '../actions';

const ToDo = ({ id, text, isCompleted }) => {
	const dispatch = useDispatch();

	const handleDelete = (id) => {
		dispatch({ type: DEL, payload: id });
	};
	return (
		<li>
			<span>{text}</span>
			<button onClick={() => handleDelete(id)}>❌</button>
			<button>{isCompleted ? <>❎</> : <>✅</>}</button>
		</li>
	);
};

export default ToDo;
