import React, { useContext } from 'react';
import { PersonalDataContext } from './B_PER_DATA_INPUT';

const C_PER_DATA_DISPLAY = () => {
	const { name, title } = useContext(PersonalDataContext);
	return (
		<div>
			<div className='CV-header'>{name}</div>
			<div className='CV-subheader'>{title}</div>
		</div>
	);
};

export default C_PER_DATA_DISPLAY;
