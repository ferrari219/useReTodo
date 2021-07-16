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

export const useState = () => {
	const { state } = useContext(TodoContext);
	return state;
};
export const useDispatch = () => {
	const { dispatch } = useContext(TodoContext);
	return dispatch;
};

export default TodoContextProvider;
