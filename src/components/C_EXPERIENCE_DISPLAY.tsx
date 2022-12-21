import React from 'react';

type propsFromParent = {
	entryHeader?: string;
	entrySubheader?: string;
	entryTimespan?: string;
	entryDetails?: string;
};

function C_EXPERIENCE_DISPLAY({
	entryHeader,
	entrySubheader,
	entryTimespan,
	entryDetails,
}: propsFromParent) {
	return (
		<div>
			<p className='classEntryHeader'>{entryHeader}</p>
			<p className='classEntrySubheader'>{entrySubheader}</p>
			<p className='classEntryTimeline'>{entryTimespan}</p>
			<p className='classSidebarText'>{entryDetails}</p>
		</div>
	);
}

export default C_EXPERIENCE_DISPLAY;
