import { CVDataType } from './B_CV_PREVIEW';
import C_PER_DATA_DISPLAY from './C_PER_DATA_DISPLAY';
import C_CONTACT_DISPLAY from './C_CONTACT_DISPLAY';
import C_SKILLS_DISPLAY from './C_SKILLS_DISPLAY';
import C_SECTION_DISPLAY from './C_SECTION_DISPLAY';
import C_IMAGE_DISPLAY from './C_IMAGE_DISPLAY';

export const B2_PRINT_COMPONENT = (props: CVDataType) => {
	return (
		<div>
			<div className='d-flex flex-row' id='print-area'>
				<div
					className='d-flex flex-column align-items-start'
					id='display-area-left'
				>
					<C_PER_DATA_DISPLAY />
					{props.sections.map((sectionDataItem, sectionDataIndex) => (
						<C_SECTION_DISPLAY
							key={sectionDataIndex}
							{...sectionDataItem}
						/>
					))}
				</div>
				<div
					className='d-flex flex-column align-items-start'
					id='display-area-right'
				>
					{props.imageData.image !== '' ? (
						<C_IMAGE_DISPLAY {...props.imageData} />
					) : null}
					<C_CONTACT_DISPLAY {...props.contactData} />
					{props.skillData.map((skillDataItem, skillDataIndex) => (
						<C_SKILLS_DISPLAY
							key={skillDataIndex}
							{...skillDataItem}
						/>
					))}
				</div>
			</div>
		</div>
	);
};
