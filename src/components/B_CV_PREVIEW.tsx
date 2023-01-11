import React, { useRef, useState } from 'react';
import { ContactData } from './B_CONTACT_INPUT';
import { SkillsData } from './B_SKILLS_INPUT';
import { SectionData } from './B_SECTION_INPUT';
import { ImageData } from './B_IMAGE_UPLOAD';
import { B2_PRINT_COMPONENT } from './B2_PRINT_COMPONENT';
import exportAsImage from './exportAsImage';
import Button from 'react-bootstrap/Button';

export type CVDataType = {
	contactData: ContactData;
	skillData: SkillsData[];
	sections: SectionData[];
	imageData: ImageData;
};

function B_CV_PREVIEW(props: CVDataType) {
	const exportRef = useRef<HTMLInputElement>(null);
	const [captureSpinner, setCaptureSpinner] = useState(false);

	const handleClick = async () => {
		setCaptureSpinner(true);
		await exportAsImage(exportRef.current, 'print');
		setCaptureSpinner(false);
	};

	return (
		<div>
			<div className='d-flex flex-row' id='display-area' ref={exportRef}>
				<B2_PRINT_COMPONENT {...props} />
			</div>
			<div className='d-flex flex-row justify-content-end mx-4'>
				{captureSpinner === true ? (
					<div
						className='spinner-border text-info'
						role='status'
						id='load-spinner-image'
					>
						<span className='visually-hidden'>Loading...</span>
					</div>
				) : null}
				<Button
					className='d-flex justify-content-around align-items-center print-btn'
					variant='info'
					onClick={handleClick}
				>
					Capture
				</Button>
			</div>
		</div>
	);
}

export default B_CV_PREVIEW;
