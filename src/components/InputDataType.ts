import { SectionData } from './B_SECTION_INPUT';

export type InputDataType = {
	personalData: {
		name: string;
		title: string;
	};
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
