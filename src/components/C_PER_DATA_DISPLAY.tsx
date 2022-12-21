import React from 'react';

type propsFromParent = { name?: string; title?: string };

function C_PER_DATA_DISPLAY({ name, title }: propsFromParent) {
	return (
		<div>
			<h2 className='CV-header'>{name}</h2>
			<h5 className='CV-subheader'>{title}</h5>
		</div>
	);
}

export default C_PER_DATA_DISPLAY;
