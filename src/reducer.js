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
				completed: [
					...state.completed,
					{ text: action.payload, id: Date.now() },
				],
			};
		case DEL:
			return {
				...state,
				todos: state.todos.filter((item) => item.id !== action.payload),
			};
		case COMPLETED:
			return;
		case UNCOMPLETED:
			return;
		default:
			throw new Error();
	}
};

export default reducer;
