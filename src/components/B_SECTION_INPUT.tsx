import { B2_EXPERIENCE_INPUT, ExperienceData } from './B2_EXPERIENCE_INPUT';

export type SectionData = {
	sectionHeader: string;
	experience: ExperienceData[];
};

const emptyExperienceItem: ExperienceData = {
	header: '',
	subheader: '',
	timespan: '',
	details: '',
};

export const B_SECTION_INPUT = ({
	sectionData,
	updateSection,
	deleteSection,
}: // deleteExperience,
{
	sectionData: SectionData;
	updateSection: (newData: Partial<SectionData>) => void;
	deleteSection: () => void;
	// deleteExperience: () => void;
}) => {
	return (
		<>
			<input
				className='m-1'
				type='text'
				value={sectionData.sectionHeader}
				placeholder='Section header'
				onChange={(event) => {
					updateSection({ sectionHeader: event.target.value });
				}}
			></input>
			{sectionData.experience.map(
				(experienceDataItem, experienceDataIndex) => (
					<B2_EXPERIENCE_INPUT
						key={experienceDataIndex}
						data={experienceDataItem}
						changeDataExperience={(newData) =>
							updateSection({
								experience: sectionData.experience.map(
									(dataItem, dataItemIndex) => {
										if (
											dataItemIndex !==
											experienceDataIndex
										) {
											return dataItem;
										}
										return {
											...dataItem,
											...newData,
										};
									}
								),
							})
						}
						deleteExperience={() => {}}
					/>
				)
			)}
			<button
				className='btn btn-primary'
				onClick={() =>
					updateSection({
						experience: [
							...sectionData.experience,
							emptyExperienceItem,
						],
					})
				}
			>
				Add experience
			</button>
			<button className='btn btn-warning' onClick={() => deleteSection()}>
				Delete this section
			</button>
		</>
	);
};
