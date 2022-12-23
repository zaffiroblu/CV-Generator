import React from 'react';
import { ExperienceData } from './B2_EXPERIENCE_INPUT';
import C_EXPERIENCE_DISPLAY from './C_EXPERIENCE_DISPLAY';

type propsFromParent = {
	sectionHeader: string;
	experience: ExperienceData[];
};

function C_SECTION_DISPLAY({ sectionHeader, experience }: propsFromParent) {
	return (
		<div>
			<p className='classSectionHeader'>{sectionHeader}</p>
			{experience.map((experienceDataItem, experienceDataIndex) => (
				<C_EXPERIENCE_DISPLAY
					key={experienceDataIndex}
					{...experienceDataItem}
				/>
			))}
		</div>
	);
}

export default C_SECTION_DISPLAY;
