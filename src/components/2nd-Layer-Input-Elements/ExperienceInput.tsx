import { Trash3 } from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';

// This is the component that renders the experience input fields.
// These are the orange sections under the "Experience Sections"
// on the lower-left side of the page.

export type ExperienceData = {
	header: string;
	subheader: string;
	timespan: string;
	details: string;
};

export const ExperienceInput = ({
	data,
	changeDataExperience,
	deleteExperience,
}: {
	data: ExperienceData;
	changeDataExperience: (newData: Partial<ExperienceData>) => void;
	deleteExperience: () => void;
}) => {
	return (
		<div className='input-box orange-inner'>
			{/* <div>Experience</div> */}
			<input
				className='my-1 text-line'
				type='text'
				value={data.header}
				placeholder='Experience header'
				onChange={(event) => {
					changeDataExperience({ header: event.target.value });
				}}
			></input>
			<input
				className='my-1 text-line'
				type='text'
				value={data.subheader}
				placeholder='Experience subheader'
				onChange={(event) => {
					changeDataExperience({ subheader: event.target.value });
				}}
			></input>
			<input
				className='my-1 text-line'
				type='text'
				value={data.timespan}
				placeholder='Experience timespan'
				onChange={(event) => {
					changeDataExperience({ timespan: event.target.value });
				}}
			></input>
			<textarea
				className='my-1 text-line'
				value={data.details}
				placeholder='Experience details'
				onChange={(event) => {
					changeDataExperience({ details: event.target.value });
				}}
			></textarea>
			<div className='d-flex justify-content-end delete-btn-container'>
				<Button
					variant='outline-danger delete-btn'
					onClick={() => deleteExperience()}
				>
					<Trash3 />
				</Button>
			</div>
		</div>
	);
};
