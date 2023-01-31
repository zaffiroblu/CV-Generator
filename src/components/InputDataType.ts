import { SectionData } from './2nd-Layer-Input-Elements/SectionInput';

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
