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
			{' '}
			<select
				className='form-select'
				aria-label='Default select example'
				onChange={(event) => {
					changeData({ skillHeader: event.target.value });
				}}
				value={data.skillHeader}
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
					className='m-1'
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
				className='m-1'
				value={data.skillDetails}
				placeholder='Skill details'
				onChange={(event) => {
					changeData({ skillDetails: event.target.value });
				}}
			></textarea>
			<button className='btn btn-warning' onClick={() => deleteData()}>
				Delete skill
			</button>
		</>
	);
};
