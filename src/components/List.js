import React from 'react';

const List = ({ name, children }) => {
	return (
		<section>
			<h2>{name}</h2>
			<ul>{children}</ul>
		</section>
	);
};

export default List;
