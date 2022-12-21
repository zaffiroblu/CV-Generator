export type SectionData = {
	sectionHeader: string;
};

export const B_SECTION_INPUT = ({
	data,
	changeData,
	deleteData,
}: {
	data: SectionData;
	changeData: (newData: Partial<SectionData>) => void;
	deleteData: () => void;
}) => {
	return (
		<>
			<input
				className='m-1'
				type='text'
				value={data.sectionHeader}
				placeholder='Section header'
				onChange={(event) => {
					changeData({ sectionHeader: event.target.value });
				}}
			></input>
			<button className='btn btn-warning' onClick={() => deleteData()}>
				Delete this section
			</button>
		</>
	);
};
