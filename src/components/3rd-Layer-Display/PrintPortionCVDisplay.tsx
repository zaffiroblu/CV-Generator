import { CVDataType } from './CVPreview';
import PersonalDataDisplay from './PersonalDataDisplay';
import ContactDisplay from './ContactDisplay';
import SkillsDisplay from './SkillsDisplay';
import SectionDisplay from './SectionDisplay';
import ImageDisplay from './ImageDisplay';

// All of the elements in this component will be exported as a jpeg
// when the user clicks the "Capture" button under the CV preview
// on the bottom-middle part of the page.

export const PrintPortionCVDisplay = (props: CVDataType) => {
	return (
		<div>
			<div className='d-flex flex-row' id='print-area'>
				<div
					className='d-flex flex-column align-items-start'
					id='display-area-left'
				>
					<PersonalDataDisplay />
					{props.sections.map((sectionDataItem, sectionDataIndex) => (
						<SectionDisplay
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
						<ImageDisplay {...props.imageData} />
					) : null}
					<ContactDisplay {...props.contactData} />
					{props.skillData.map((skillDataItem, skillDataIndex) => (
						<SkillsDisplay
							key={skillDataIndex}
							{...skillDataItem}
						/>
					))}
				</div>
			</div>
		</div>
	);
};
