import React, { createContext, useReducer, useContext } from 'react';
import reducer, { initialState } from './reducer';

const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<TodoContext.Provider value={{ state, dispatch }}>
			{children}
		</TodoContext.Provider>
	);
};

export const useDispatch = () => {
	// const context = useContext(TodoContext)
	const { dispatch } = useContext(TodoContext);
	return dispatch;
};
export const useState = () => {
	// const context = useContext(TodoContext)
	const { state } = useContext(TodoContext);
	return state;
};
// export const useTodos = () => {
// 	// const context = useContext(TodoContext)
// 	const { state: toDos } = useContext(TodoContext);
// 	return toDos;
// };
// export const useCompleted = () => {
// 	// const context = useContext(TodoContext)
// 	const { state: completed } = useContext(TodoContext);
// 	return completed;
// };

export default TodoContextProvider;
