import React from 'react';
import C_PER_DATA_DISPLAY from './C_PER_DATA_DISPLAY';
import C_CONTACT_DISPLAY from './C_CONTACT_DISPLAY';
import C_SKILLS_DISPLAY from './C_SKILLS_DISPLAY';
import C_SECTION_DISPLAY from './C_SECTION_DISPLAY';
import C_IMAGE_DISPLAY from './C_IMAGE_DISPLAY';
import { PersonalData } from './B_PER_DATA_INPUT';
import { ContactData } from './B_CONTACT_INPUT';
import { SkillsData } from './B_SKILLS_INPUT';
import { SectionData } from './B_SECTION_INPUT';
import { ImageData } from './B_IMAGE_UPLOAD';

type propsFromParent = {
	personalData: PersonalData;
	contactData: ContactData;
	skillData: SkillsData[];
	sections: SectionData[];
	imageData: ImageData;
};

function B_CV_PREVIEW({
	personalData,
	contactData,
	skillData,
	sections,
	imageData,
}: propsFromParent) {
	return (
		<div>
			<div className='d-flex flex-row mx-4' id='display-area'>
				<div className='d-flex flex-row' id='print-area'>
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
						{imageData.image !== '' ? (
							<C_IMAGE_DISPLAY {...imageData} />
						) : null}
						<C_CONTACT_DISPLAY {...contactData} />
						{skillData.map((skillDataItem, skillDataIndex) => (
							<C_SKILLS_DISPLAY
								key={skillDataIndex}
								{...skillDataItem}
							/>
						))}
					</div>
				</div>
			</div>
			{/* {data.skillHeader === 'Custom' ? (
				<div className='d-flex flex-row mx-2' id='display-area'>
					<div
						className='d-flex flex-column align-items-start m-2'
						id='display-area-left'
					>
						<C_PER_DATA_DISPLAY {...personalData} />
					</div>
				</div>
			) : null} */}
		</div>
	);
}

export default B_CV_PREVIEW;
