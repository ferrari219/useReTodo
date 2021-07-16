import React, { createContext, useReducer, useContext } from 'react';
import reducer, { initialState } from './reducer';

const todoContext = createContext();

const todoContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<todoContext.Provider value={{ state, dispatch }}>
			{children}
		</todoContext.Provider>
	);
};

export const useDispatch = () => {
	// const context = useContext(todoContext)
	const { dispatch } = useContext(todoContext);
	return dispatch;
};
export const useState = () => {
	// const context = useContext(todoContext)
	const { state } = useContext(todoContext);
	return state;
};

export default todoContextProvider;
