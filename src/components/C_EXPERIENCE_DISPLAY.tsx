import React from 'react';

type propsFromParent = {
	header?: string;
	subheader?: string;
	timespan?: string;
	details?: string;
};

function C_EXPERIENCE_DISPLAY({
	header,
	subheader,
	timespan,
	details,
}: propsFromParent) {
	return (
		<div>
			<p className='classEntryHeader'>{header}</p>
			<p className='classEntrySubheader'>{subheader}</p>
			<p className='classEntryTimeline'>{timespan}</p>
			<p className='classSidebarText'>{details}</p>
		</div>
	);
}

export default C_EXPERIENCE_DISPLAY;
