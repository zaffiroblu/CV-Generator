import React from 'react';

type propsFromParent = {
	image?: string;
};

function ImageDisplay({ image }: propsFromParent) {
	return (
		<div>
			<img src={image} height='75px' width='75px' alt='Profile' />
		</div>
	);
}

export default ImageDisplay;
