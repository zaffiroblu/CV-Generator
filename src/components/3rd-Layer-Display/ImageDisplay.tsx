import React from 'react';

// This component renders the uploaded image and
// displays it within the CV preview in the middle of the page.

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
