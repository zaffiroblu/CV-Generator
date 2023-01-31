import React from 'react';
import { ExperienceData } from '../2nd-Layer-Input-Elements/ExperienceInput';
import ExperienceDisplay from './ExperienceDisplay';

// This component renders the information from the 'section' inputs
// and displays them in their proper place within the CV preview
// in the middle of the page. It also houses and displays the "experiences."
// (separate component)

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
