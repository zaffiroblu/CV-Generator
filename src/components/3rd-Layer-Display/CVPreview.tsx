import React, { useRef, useState } from 'react';
import { ContactData } from '../2nd-Layer-Input-Elements/ContactInput';
import { SkillsData } from '../2nd-Layer-Input-Elements/SkillsInput';
import { SectionData } from '../2nd-Layer-Input-Elements/SectionInput';
import { ImageData } from '../2nd-Layer-Input-Elements/ImageInput';
import { PrintPortionCVDisplay } from './PrintPortionCVDisplay';
import exportAsImage from './exportAsImage';
import Button from 'react-bootstrap/Button';

export type CVDataType = {
	contactData: ContactData;
	skillData: SkillsData[];
	sections: SectionData[];
	imageData: ImageData;
};

function CVPreview(props: CVDataType) {
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
				<PrintPortionCVDisplay {...props} />
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

export default CVPreview;
