export type ContactData = {
	addressLine1: string;
	addressLine2: string;
	phone: string;
	email: string;
	socialMedia: string;
};

export const B_CONTACT_INPUT = ({
	data,
	changeData,
}: {
	data: ContactData;
	changeData: (newData: Partial<ContactData>) => void;
}) => {
	return (
		<>
			<input
				className='m-1'
				type='text'
				value={data.addressLine1}
				placeholder='Address (line 1)'
				onChange={(event) => {
					changeData({ addressLine1: event.target.value });
				}}
			></input>
			<input
				className='m-1'
				type='text'
				value={data.addressLine2}
				placeholder='Address (line 2)'
				onChange={(event) => {
					changeData({ addressLine2: event.target.value });
				}}
			></input>
			<input
				className='m-1'
				type='text'
				value={data.phone}
				placeholder='Phone number'
				onChange={(event) => {
					changeData({ phone: event.target.value });
				}}
			></input>
			<input
				className='m-1'
				type='text'
				value={data.email}
				placeholder='Email address'
				onChange={(event) => {
					changeData({ email: event.target.value });
				}}
			></input>
			<input
				className='m-1'
				type='text'
				value={data.socialMedia}
				placeholder='LinkedIn or Xing URL'
				onChange={(event) => {
					changeData({ socialMedia: event.target.value });
				}}
			></input>
		</>
	);
};
