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
		<>
			<input
				className='m-1'
				type='text'
				value={data.header}
				placeholder='Entry header'
				onChange={(event) => {
					changeDataExperience({ header: event.target.value });
				}}
			></input>
			<input
				className='m-1'
				type='text'
				value={data.subheader}
				placeholder='Entry subheader'
				onChange={(event) => {
					changeDataExperience({ subheader: event.target.value });
				}}
			></input>
			<input
				className='m-1'
				type='text'
				value={data.timespan}
				placeholder='Entry timespan'
				onChange={(event) => {
					changeDataExperience({ timespan: event.target.value });
				}}
			></input>
			<textarea
				className='m-1'
				value={data.details}
				placeholder='Entry details'
				onChange={(event) => {
					changeDataExperience({ details: event.target.value });
				}}
			></textarea>
			<button
				className='btn btn-warning'
				onClick={() => deleteExperience()}
			>
				Delete this experience
			</button>
		</>
	);
};
