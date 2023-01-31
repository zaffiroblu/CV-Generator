import React, { useContext } from 'react';
import { PersonalDataContext } from '../2nd-Layer-Input-Elements/PersonalDataInput';

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
