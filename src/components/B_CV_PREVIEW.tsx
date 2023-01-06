import React, { useRef } from 'react';
import { PersonalData } from './B_PER_DATA_INPUT';
import { ContactData } from './B_CONTACT_INPUT';
import { SkillsData } from './B_SKILLS_INPUT';
import { SectionData } from './B_SECTION_INPUT';
import { ImageData } from './B_IMAGE_UPLOAD';
import { B2_PRINT_COMPONENT } from './B2_PRINT_COMPONENT';
import exportAsImage from './exportAsImage';
import Button from 'react-bootstrap/Button';

export type CVDataType = {
	personalData: PersonalData;
	contactData: ContactData;
	skillData: SkillsData[];
	sections: SectionData[];
	imageData: ImageData;
};

function B_CV_PREVIEW(props: CVDataType) {
	const exportRef = useRef() as React.MutableRefObject<HTMLInputElement>;
	return (
		<div>
			<div
				className='d-flex flex-row mx-4'
				id='display-area'
				ref={exportRef}
			>
				<B2_PRINT_COMPONENT {...props} />
			</div>
			<div className='d-flex flex-row justify-content-end mx-4'>
				<Button
					className='d-flex justify-content-around align-items-center print-btn'
					variant='info'
					onClick={() => exportAsImage(exportRef.current, 'print')}
				>
					Capture
				</Button>
			</div>
		</div>
	);
}

export default B_CV_PREVIEW;
