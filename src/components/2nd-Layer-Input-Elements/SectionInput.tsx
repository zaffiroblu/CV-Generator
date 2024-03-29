import { ExperienceInput, ExperienceData } from './ExperienceInput';
import { Trash3 } from 'react-bootstrap-icons';
import { Plus } from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';

// This is the component that renders the experience section inputs,
// which are found in the lower-left part of the page.
// These house one or more "experience" sections (a separate component).

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

export const SectionInput = ({
	sectionData,
	updateSection,
	deleteSection,
}: {
	sectionData: SectionData;
	updateSection: (newData: Partial<SectionData>) => void;
	deleteSection: () => void;
}) => {
	return (
		<>
			<div className='input-box purple-left'>
				<h5 className='input-header font-effect-neon'>
					Experience Section
				</h5>
				<input
					className='my-2 text-line'
					id='narrow-section-input'
					type='text'
					value={sectionData.sectionHeader}
					placeholder='Section header'
					onChange={(event) => {
						updateSection({
							sectionHeader: event.target.value,
						});
					}}
				></input>
				{sectionData.experience.map(
					(experienceDataItem, experienceDataIndex) => (
						<ExperienceInput
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
							deleteExperience={() => {
								updateSection({
									experience: sectionData.experience.filter(
										(_, dataItemIndex) =>
											dataItemIndex !==
											experienceDataIndex
									),
								});
							}}
						/>
					)
				)}
				<div className='d-flex justify-content-center align-item-center'>
					<Button
						variant='outline-success add-btn'
						onClick={() =>
							updateSection({
								experience: [
									...sectionData.experience,
									emptyExperienceItem,
								],
							})
						}
					>
						<Plus />
					</Button>
				</div>
				<div className='d-flex justify-content-end delete-btn-container'>
					<Button
						variant='outline-danger delete-btn'
						onClick={() => deleteSection()}
					>
						<Trash3 />
					</Button>
				</div>
			</div>
		</>
	);
};
