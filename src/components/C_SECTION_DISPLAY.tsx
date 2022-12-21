import React from 'react';

type propsFromParent = { sectionHeader?: string };

function C_SECTION_DISPLAY({ sectionHeader }: propsFromParent) {
	return (
		<div>
			<p className='classSectionHeader'>{sectionHeader}</p>
		</div>
	);
}

export default C_SECTION_DISPLAY;
