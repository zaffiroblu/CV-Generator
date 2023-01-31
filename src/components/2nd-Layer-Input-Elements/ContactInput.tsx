export type ContactData = {
	addressLine1: string;
	addressLine2: string;
	phone: string;
	email: string;
	socialMedia: string;
};

// This is the component that renders the contact data input fields
// in the DOM. They are found under "Personal Data" on the upper
// left-hand side of the page.

export const ContactInput = ({
	data,
	changeData,
}: {
	data: ContactData;
	changeData: (newData: Partial<ContactData>) => void;
}) => {
	return (
		<>
			<input
				className='text-line'
				type='text'
				value={data.addressLine1}
				placeholder='Address (line 1)'
				onChange={(event) => {
					changeData({ addressLine1: event.target.value });
				}}
			></input>
			<input
				className='text-line'
				type='text'
				value={data.addressLine2}
				placeholder='Address (line 2)'
				onChange={(event) => {
					changeData({ addressLine2: event.target.value });
				}}
			></input>
			<input
				className='text-line'
				type='text'
				value={data.phone}
				placeholder='Phone number'
				onChange={(event) => {
					changeData({ phone: event.target.value });
				}}
			></input>
			<input
				className='text-line'
				type='text'
				value={data.email}
				placeholder='Email address'
				onChange={(event) => {
					changeData({ email: event.target.value });
				}}
			></input>
			<input
				className='text-line'
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
