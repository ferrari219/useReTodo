import React from 'react';

const List = ({ name, children }) => {
	return (
		<div>
			<h2>{name}</h2>
			<ul>{children}</ul>
		</div>
	);
};

export default List;
