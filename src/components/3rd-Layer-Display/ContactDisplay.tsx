import React from 'react';

type propsFromParent = {
	addressLine1?: string;
	addressLine2?: string;
	phone?: string;
	email?: string;
	socialMedia?: string;
};

function ContactDisplay({
	addressLine1,
	addressLine2,
	phone,
	email,
	socialMedia,
}: propsFromParent) {
	return (
		<div>
			<p className='classSidebarText'>{addressLine1}</p>
			<p className='classSidebarText'>{addressLine2}</p>
			<p className='classSidebarText'>{phone}</p>
			<p className='classSidebarText'>{email}</p>
			<p className='classSidebarText'>{socialMedia}</p>
		</div>
	);
}

export default ContactDisplay;
