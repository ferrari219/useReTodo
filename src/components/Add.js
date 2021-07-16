import React, { useState } from 'react';
import { ADD } from '../actions';
import { useDispatch } from '../context';

const Add = () => {
	const [value, setValue] = useState('');
	const dispatch = useDispatch();

	const handleChange = (e) => {
		const {
			target: { value },
		} = e;
		setValue(value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch({ type: ADD, payload: value });
		setValue('');
	};
	return (
		<section>
			<h1>Test</h1>
			<form onSubmit={handleSubmit}>
				<input type="text" value={value} onChange={handleChange} />
				<button>Add</button>
			</form>
		</section>
	);
};

export default Add;
