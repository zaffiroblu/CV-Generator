import React from 'react';

type propsFromParent = { name?: string; title?: string };

function C_PER_DATA_DISPLAY({ name, title }: propsFromParent) {
	return (
		<div>
			<div className='CV-header'>{name}</div>
			<div className='CV-subheader'>{title}</div>
		</div>
	);
}

export default C_PER_DATA_DISPLAY;
