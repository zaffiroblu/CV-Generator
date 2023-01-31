import React from 'react';
import { ExperienceData } from '../2nd-Layer-Input-Elements/ExperienceInput';
import ExperienceDisplay from './ExperienceDisplay';

type propsFromParent = {
	sectionHeader: string;
	experience: ExperienceData[];
};

function SectionDisplay({ sectionHeader, experience }: propsFromParent) {
	return (
		<div>
			<p className='classSectionHeader'>{sectionHeader}</p>
			{experience.map((experienceDataItem, experienceDataIndex) => (
				<ExperienceDisplay
					key={experienceDataIndex}
					{...experienceDataItem}
				/>
			))}
		</div>
	);
}

export default SectionDisplay;
