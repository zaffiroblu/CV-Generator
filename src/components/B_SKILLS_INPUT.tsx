import { Trash3 } from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';

export type SkillsData = {
	skillHeader: string;
	customSkillHeader: string;
	skillDetails: string;
};

export const B_SKILLS_INPUT = ({
	data,
	changeData,
	deleteData,
}: {
	data: SkillsData;
	changeData: (newData: Partial<SkillsData>) => void;
	deleteData: () => void;
}) => {
	return (
		<>
			<div className='input-box orange-inner'>
				{/* <div>Skill Set</div> */}
				<select
					className='form-select my-1'
					aria-label='Default select example'
					onChange={(event) => {
						changeData({ skillHeader: event.target.value });
					}}
					value={data.skillHeader}
					id='narrow'
				>
					<option value=''>Select a skill type</option>
					<option value='Industry Skills'>Industry Skills</option>
					<option value='Tools and Technologies'>
						Tools and Technologies
					</option>
					<option value='Languages'>Languages</option>
					<option value='Custom'>(Add custom)</option>
				</select>
				{data.skillHeader === 'Custom' ? (
					<input
						className='my-1 text-line'
						type='text'
						value={data.customSkillHeader}
						placeholder='Skill header'
						onChange={(event) => {
							changeData({
								customSkillHeader: event.target.value,
							});
						}}
					></input>
				) : null}
				<textarea
					className='my-1 text-line'
					value={data.skillDetails}
					placeholder='Skill details'
					onChange={(event) => {
						changeData({ skillDetails: event.target.value });
					}}
				></textarea>
				<div className='d-flex justify-content-end delete-btn-container my-1'>
					<Button
						variant='outline-danger delete-btn'
						id='delete-margin'
						onClick={() => deleteData()}
					>
						<Trash3 />
					</Button>
				</div>
			</div>
		</>
	);
};
