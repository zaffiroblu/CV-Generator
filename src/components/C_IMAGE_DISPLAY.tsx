import React from 'react';

type propsFromParent = {
	image?: string;
};

function C_IMAGE_DISPLAY({ image }: propsFromParent) {
	return (
		<div>
			<img src={image} height='75px' width='75px' alt='Profile' />
		</div>
	);
}

export default C_IMAGE_DISPLAY;
