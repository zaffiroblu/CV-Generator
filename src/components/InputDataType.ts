import { SectionData } from './2nd-Layer-Input-Elements/SectionInput';

// This is the data type used for the app.
// The "Personal Data" part is missing here, because
// I wanted to practice using context providers
// and decided to extract that part of the data for that
// purpose. To see how I did that, check out all of the components
// connected to "Personal Data."

export type InputDataType = {
	contactData: {
		addressLine1: string;
		addressLine2: string;
		phone: string;
		email: string;
		socialMedia: string;
	};
	skillData: {
		skillHeader: string;
		customSkillHeader: string;
		skillDetails: string;
	}[];
	sections: SectionData[];
	imageData: { image: string };
};
