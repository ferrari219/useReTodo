import { ADD, DEL, COMPLETED, UNCOMPLETED } from './actions';

export const initialState = {
	todos: [],
	completed: [],
};

const reducer = (state, action) => {
	switch (action.type) {
		case ADD:
			return {
				...state,
				todos: [
					...state.todos,
					{ text: action.payload, id: Date.now() },
				],
			};
		case DEL:
			return {
				...state,
				todos: state.todos.filter((item) => item.id !== action.payload),
				completed: state.completed.filter(
					(item) => item.id !== action.payload
				),
			};
		case COMPLETED:
			const target = state.todos.find(
				(item) => item.id === action.payload
			);
			console.log(target);
			return {
				...state,
				todos: state.todos.filter((item) => item.id !== action.payload),
				completed: [...state.completed, { ...target }],
			};
		case UNCOMPLETED:
			const unTarget = state.completed.find(
				(item) => item.id === action.payload
			);
			return {
				...state,
				completed: state.completed.filter(
					(item) => item.id !== action.payload
				),
				todos: [...state.todos, { ...unTarget }],
			};
		default:
			throw new Error();
	}
};

export default reducer;
