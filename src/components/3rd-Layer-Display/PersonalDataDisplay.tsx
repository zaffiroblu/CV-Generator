import React, { useContext } from 'react';
import { PersonalDataContext } from '../2nd-Layer-Input-Elements/PersonalDataInput';

// This component renders the first two inputs from the 'personal data' section
// and displays them in their proper places within the CV preview
// in the middle of the page.

const PersonalDataDisplay = () => {
	const { name, title } = useContext(PersonalDataContext);
	return (
		<div>
			<div className='CV-header'>{name}</div>
			<div className='CV-subheader'>{title}</div>
		</div>
	);
};

export default PersonalDataDisplay;
