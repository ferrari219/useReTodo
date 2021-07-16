import React, { useState } from 'react';
import { ADD } from '../actions';
import { useDispatch } from '../context';

const Add = () => {
	const [value, setValue] = useState('');
	const dispatch = useDispatch();
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
	return (
		<form onSubmit={handleSubmit}>
			<input type="text" value={value} onChange={onChange} />
		</form>
	);
};

export default Add;
