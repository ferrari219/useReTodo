export const initialState = {
	toDos: [],
	completed: [],
};

export const ADD = 'add';
export const DEL = 'del';
export const COMPLETED = 'completed';
export const UNCOMPLETED = 'uncompleted';
const reducer = (state, action) => {
	switch (action.type) {
		case ADD:
			// console.log(state);
			// console.log(Date.now());
			return {
				...state,
				toDos: [
					...state.toDos,
					{ text: action.payload, id: Date.now() },
				],
			};
		case DEL:
			// console.log(state);
			return {
				...state,
				toDos: state.toDos.filter((item) => item.id !== action.payload),
			};
		case COMPLETED:
			const target = state.toDos.find(
				(item) => item.id === action.payload
			);
			console.log(target);
			return {
				...state,
				toDos: state.toDos.filter((item) => item.id !== action.payload),
				completed: [...state.completed, { ...target }],
			};
		case UNCOMPLETED:
			const untarget = state.completed.find(
				(item) => item.id === action.payload
			);
			// console.log(target);
			return {
				...state,
				completed: state.completed.filter(
					(item) => item.id !== action.payload
				),
				toDos: [...state.toDos, { ...untarget }],
			};
		default:
			throw new Error();
	}
};
export default reducer;
