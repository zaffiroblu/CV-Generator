import React, { useState } from 'react';
import B_CV_PREVIEW from './B_CV_PREVIEW';
import { B_PER_DATA_INPUT } from './B_PER_DATA_INPUT';
import { B_CONTACT_INPUT } from './B_CONTACT_INPUT';
import { B_SKILLS_INPUT } from './B_SKILLS_INPUT';
import { B_SECTION_INPUT } from './B_SECTION_INPUT';
import { InputDataType } from './InputDataType';

export const A_INPUT = () => {
	const [inputData, setInputData] = useState<InputDataType>({
		personalData: {
			name: '',
			title: '',
		},
		contactData: {
			addressLine1: '',
			addressLine2: '',
			phone: '',
			email: '',
			socialMedia: '',
		},
		skillData: [
			{
				skillHeader: '',
				customSkillHeader: '',
				skillDetails: '',
			},
		],
		sections: [{ sectionHeader: '', experience: [] }],
	});

	const skillDataGroup = {
		skillHeader: '',
		customSkillHeader: '',
		skillDetails: '',
	};

	const sectionDataGroup = { sectionHeader: '', experience: [] };

	const addItemsToArray = <PropertyNameType extends 'skillData' | 'sections'>(
		items: InputDataType[PropertyNameType],
		propertyName: PropertyNameType
	) => {
		setInputData({
			...inputData,
			[propertyName]: [...inputData[propertyName], ...items],
		});
	};

	const changeStateSlice = <
		PropertyNameType extends 'personalData' | 'contactData'
	>(
		newData: Partial<InputDataType[PropertyNameType]>,
		propertyName: PropertyNameType
	) => {
		setInputData((inputData) => ({
			...inputData,
			[propertyName]: {
				...inputData[propertyName],
				...newData,
			},
		}));
	};

	return (
		<div className='d-flex'>
			<div className='d-flex flex-column mx-2' id='input-area'>
				<div className='d-flex flex-column per-contact-class'>
					<h5>Personal Information</h5>
					<B_PER_DATA_INPUT
						data={inputData.personalData}
						changeData={(newPersonalData) =>
							changeStateSlice(newPersonalData, 'personalData')
						}
					/>
					<B_CONTACT_INPUT
						data={inputData.contactData}
						changeData={(newContactData) =>
							changeStateSlice(newContactData, 'contactData')
						}
					/>
				</div>
				<div className='d-flex flex-column skills-class'>
					<h5>Skills</h5>
					{inputData.skillData.map(
						(skillDataItem, skillDataIndex) => (
							<B_SKILLS_INPUT
								key={skillDataIndex}
								data={skillDataItem}
								changeData={(newData) => {
									setInputData((inputData) => ({
										...inputData,
										skillData: inputData.skillData.map(
											(dataItem, dataItemIndex) => {
												if (
													dataItemIndex !==
													skillDataIndex
												) {
													return dataItem;
												}
												return {
													...dataItem,
													...newData,
												};
											}
										),
									}));
								}}
								deleteData={() => {
									setInputData({
										...inputData,
										skillData: inputData.skillData.filter(
											(_, dataItemIndex) =>
												dataItemIndex !== skillDataIndex
										),
									});
								}}
							/>
						)
					)}
					<button
						className='btn btn-primary'
						onClick={() =>
							addItemsToArray([skillDataGroup], 'skillData')
						}
					>
						Add skills set
					</button>
				</div>
				<div className='d-flex flex-column section-class'>
					<h5>Experience Section</h5>
					{inputData.sections.map(
						(sectionDataItem, sectionDataIndex) => (
							<B_SECTION_INPUT
								key={sectionDataIndex}
								sectionData={sectionDataItem}
								updateSection={(newData) => {
									setInputData({
										...inputData,
										sections: inputData.sections.map(
											(dataItem, dataItemIndex) => {
												if (
													dataItemIndex !==
													sectionDataIndex
												) {
													return dataItem;
												}
												return {
													...dataItem,
													...newData,
												};
											}
										),
									});
								}}
								deleteSection={() => {
									setInputData({
										...inputData,
										sections: inputData.sections.filter(
											(_, dataItemIndex) =>
												dataItemIndex !==
												sectionDataIndex
										),
									});
								}}
								// deleteExperience={() => {
								// 	setInputData({
								// 		...inputData,
								// 		sections:
								// 			inputData.sections.experience.filter(
								// 				(_, experienceItemIndex) =>
								// 					experienceItemIndex !==
								// 					sectionDataIndex
								// 			),
								// 	});
								// }}
							/>
						)
					)}
				</div>
				<button
					className='btn btn-primary'
					onClick={() =>
						addItemsToArray([sectionDataGroup], 'sections')
					}
				>
					Add section
				</button>
			</div>
			<B_CV_PREVIEW {...inputData} />
		</div>
	);
};

export default A_INPUT;
