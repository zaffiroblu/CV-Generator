export type PersonalData = {
	name: string;
	title: string;
};

export const B_PER_DATA_INPUT = ({
	data,
	changeData,
}: {
	data: PersonalData;
	changeData: (newData: Partial<PersonalData>) => void;
}) => {
	return (
		<>
			<input
				className='m-1 text-line'
				type='text'
				name='item1'
				value={data.name}
				placeholder='Full name'
				onChange={(event) => {
					changeData({ name: event.target.value });
				}}
			/>
			<input
				className='m-1 text-line'
				type='text'
				value={data.title}
				placeholder='Job title'
				onChange={(event) => {
					changeData({ title: event.target.value });
				}}
			></input>
		</>
	);
};
