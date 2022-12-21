import React from 'react';

type propsFromParent = {
	skillHeader?: string;
	customSkillHeader?: string;
	skillDetails?: string;
};

function C_SKILLS_DISPLAY({
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

export default C_SKILLS_DISPLAY;
