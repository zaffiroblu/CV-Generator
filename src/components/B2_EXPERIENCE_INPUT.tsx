import { Trash3 } from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';

export type ExperienceData = {
	header: string;
	subheader: string;
	timespan: string;
	details: string;
};

export const B2_EXPERIENCE_INPUT = ({
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
			<div>Experience</div>
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
