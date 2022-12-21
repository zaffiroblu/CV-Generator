export type ExperienceData = {
	entryHeader: string;
	entrySubheader: string;
	entryTimespan: string;
	entryDetails: string;
};

export const B_EXPERIENCE_INPUT = ({
	data,
	changeData,
	deleteData,
}: {
	data: ExperienceData;
	changeData: (newData: Partial<ExperienceData>) => void;
	deleteData: () => void;
}) => {
	return (
		<>
			<input
				className='m-1'
				type='text'
				value={data.entryHeader}
				placeholder='Entry header'
				onChange={(event) => {
					changeData({ entryHeader: event.target.value });
				}}
			></input>
			<input
				className='m-1'
				type='text'
				value={data.entrySubheader}
				placeholder='Entry subheader'
				onChange={(event) => {
					changeData({ entrySubheader: event.target.value });
				}}
			></input>
			<input
				className='m-1'
				type='text'
				value={data.entryTimespan}
				placeholder='Entry timespan'
				onChange={(event) => {
					changeData({ entryTimespan: event.target.value });
				}}
			></input>
			<textarea
				className='m-1'
				value={data.entryDetails}
				placeholder='Entry details'
				onChange={(event) => {
					changeData({ entryDetails: event.target.value });
				}}
			></textarea>
			<button className='btn btn-warning' onClick={() => deleteData()}>
				Delete this experience
			</button>
		</>
	);
};
