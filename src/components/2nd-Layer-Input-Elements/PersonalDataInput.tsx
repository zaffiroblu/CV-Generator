import { createContext, useContext } from 'react';

export type PersonalData = {
	name: string;
	title: string;
};

export const PersonalDataContext = createContext<PersonalData>({
	name: '',
	title: '',
});

export const PersonalDataInput = ({
	setData,
}: {
	setData: (data: PersonalData) => void;
}) => {
	const data = useContext(PersonalDataContext);
	return (
		<>
			<input
				className='text-line'
				type='text'
				name='item1'
				value={data.name}
				placeholder='Full name'
				onChange={(event) => {
					setData({ ...data, name: event.target.value });
				}}
			/>
			<input
				className='text-line'
				type='text'
				value={data.title}
				placeholder='Job title'
				onChange={(event) => {
					setData({ ...data, title: event.target.value });
				}}
			></input>
		</>
	);
};
