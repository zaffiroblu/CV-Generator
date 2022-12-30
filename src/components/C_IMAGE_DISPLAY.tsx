import React from 'react';

type propsFromParent = {
	image?: string;
};

function C_IMAGE_DISPLAY({ image }: propsFromParent) {
	return (
		<div>
			<img src={image} height='100px' width='100px' alt='Profile' />
		</div>
	);
}

export default C_IMAGE_DISPLAY;
