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
		<div className='classEntryGroup'>
			<div className='classEntryHeader'>{header}</div>
			<div className='classEntrySubheader'>{subheader}</div>
			<div className='classEntryTimeline'>{timespan}</div>
			<div className='classExpDetailsText'>{details}</div>
		</div>
	);
}

export default C_EXPERIENCE_DISPLAY;
