import React from 'react';
import C_PER_DATA_DISPLAY from './C_PER_DATA_DISPLAY';
import C_CONTACT_DISPLAY from './C_CONTACT_DISPLAY';
import C_SKILLS_DISPLAY from './C_SKILLS_DISPLAY';
import C_SECTION_DISPLAY from './C_SECTION_DISPLAY';
import { PersonalData } from './B_PER_DATA_INPUT';
import { ContactData } from './B_CONTACT_INPUT';
import { SkillsData } from './B_SKILLS_INPUT';
import { SectionData } from './B_SECTION_INPUT';

type propsFromParent = {
	personalData: PersonalData;
	contactData: ContactData;
	skillData: SkillsData[];
	sections: SectionData[];
};

function B_CV_PREVIEW({
	personalData,
	contactData,
	skillData,
	sections,
}: propsFromParent) {
	return (
		<div>
			<div className='d-flex flex-row mx-2' id='display-area'>
				<div
					className='d-flex flex-column align-items-start m-2'
					id='display-area-left'
				>
					<C_PER_DATA_DISPLAY {...personalData} />
					{sections.map((sectionDataItem, sectionDataIndex) => (
						<C_SECTION_DISPLAY
							key={sectionDataIndex}
							{...sectionDataItem}
						/>
					))}
				</div>
				<div
					className='d-flex flex-column align-items-start m-2'
					id='display-area-right'
				>
					<C_CONTACT_DISPLAY {...contactData} />
					{skillData.map((skillDataItem, skillDataIndex) => (
						<C_SKILLS_DISPLAY
							key={skillDataIndex}
							{...skillDataItem}
						/>
					))}
				</div>
			</div>
			<div className='d-flex flex-row mx-2' id='display-area'>
				<div
					className='d-flex flex-column align-items-start m-2'
					id='display-area-left'
				>
					<C_PER_DATA_DISPLAY {...personalData} />
				</div>
			</div>
		</div>
	);
}

export default B_CV_PREVIEW;
