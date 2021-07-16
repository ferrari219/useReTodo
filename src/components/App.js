import React from 'react';
import { useState } from '../context';
import Add from './Add';
import List from './List';
import Todo from './Todo';

const App = () => {
	const { todos, completed } = useState();
	return (
		<section>
			<Add />
			<List name="list">
				{todos.map((item) => (
					<Todo key={item.id} id={item.id} text={item.text} />
				))}

				<div>{JSON.stringify(todos)}</div>
			</List>
			<List name="comp">
				{completed.map((item) => (
					<Todo key={item.id} id={item.id} text={item.text} />
				))}
				<div>{JSON.stringify(completed)}</div>
			</List>
		</section>
	);
};

export default App;
