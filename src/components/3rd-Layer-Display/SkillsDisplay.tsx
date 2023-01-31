import React from 'react';

// This component renders the information from the 'skills' inputs
// and displays them in their proper place within the CV preview
// in the middle of the page.

type propsFromParent = {
	skillHeader?: string;
	customSkillHeader?: string;
	skillDetails?: string;
};

function SkillsDisplay({
	skillHeader,
	customSkillHeader,
	skillDetails,
}: propsFromParent) {
	return (
		<div>
			{skillHeader === 'Custom' ? (
				<div>
					<p className='classSidebarHeader'>{customSkillHeader}</p>
					<p className='classSidebarText'>{skillDetails}</p>
				</div>
			) : (
				<div>
					<p className='classSidebarHeader'>{skillHeader}</p>
					<p className='classSidebarText'>{skillDetails}</p>{' '}
				</div>
			)}
		</div>
	);
}

export default SkillsDisplay;
