import React, { useState } from 'react';
import B_CV_PREVIEW from './B_CV_PREVIEW';
import { B_PER_DATA_INPUT } from './B_PER_DATA_INPUT';
import { B_CONTACT_INPUT } from './B_CONTACT_INPUT';
import { B_SKILLS_INPUT } from './B_SKILLS_INPUT';
import { B_EXPERIENCE_INPUT } from './B_EXPERIENCE_INPUT';
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
		sectionData: [{ sectionHeader: '' }],
		experienceData: [
			{
				entryHeader: '',
				entrySubheader: '',
				entryTimespan: '',
				entryDetails: '',
			},
		],
	});

	const skillDataGroup = {
		skillHeader: '',
		customSkillHeader: '',
		skillDetails: '',
	};

	const sectionDataGroup = {
		sectionHeader: '',
	};

	const experienceDataGroup = {
		entryHeader: '',
		entrySubheader: '',
		entryTimespan: '',
		entryDetails: '',
	};

	const addItemsToArray = <
		PropertyNameType extends 'skillData' | 'sectionData' | 'experienceData'
	>(
		items: InputDataType[PropertyNameType],
		propertyName: PropertyNameType
	) => {
		setInputData({
			...inputData,
			[propertyName]: [...inputData[propertyName], ...items],
		});
	};

	return (
		<div className='d-flex'>
			<div className='d-flex flex-column mx-2' id='input-area'>
				<div className='d-flex flex-column per-contact-class'>
					<h5>Personal Information</h5>
					<B_PER_DATA_INPUT
						data={inputData.personalData}
						changeData={(newData) => {
							setInputData((inputData) => ({
								...inputData,
								personalData: {
									...inputData.personalData,
									...newData,
								},
							}));
						}}
					/>
					<B_CONTACT_INPUT
						data={inputData.contactData}
						changeData={(newData) => {
							setInputData((inputData) => ({
								...inputData,
								contactData: {
									...inputData.contactData,
									...newData,
								},
							}));
						}}
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
						Add another skills section
					</button>
				</div>
				<div className='d-flex flex-column section-class'>
					<h5>Section</h5>
					{inputData.sectionData.map(
						(sectionDataItem, sectionDataIndex) => (
							<B_SECTION_INPUT
								key={sectionDataIndex}
								data={sectionDataItem}
								changeData={(newData) => {
									setInputData((inputData) => ({
										...inputData,
										sectionData: inputData.sectionData.map(
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
									}));
								}}
								deleteData={() => {
									setInputData({
										...inputData,
										sectionData:
											inputData.sectionData.filter(
												(_, dataItemIndex) =>
													dataItemIndex !==
													sectionDataIndex
											),
									});
								}}
							/>
						)
					)}
					<button
						className='btn btn-primary'
						onClick={() =>
							addItemsToArray([sectionDataGroup], 'sectionData')
						}
					>
						Add a section header
					</button>
				</div>
				<div className='d-flex flex-column experience-class'>
					<h5>Experience</h5>
					{inputData.experienceData.map(
						(experienceDataItem, experienceDataIndex) => (
							<B_EXPERIENCE_INPUT
								key={experienceDataIndex}
								data={experienceDataItem}
								changeData={(newData) => {
									setInputData((inputData) => ({
										...inputData,
										experienceData:
											inputData.experienceData.map(
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
									}));
								}}
								deleteData={() => {
									setInputData({
										...inputData,
										experienceData:
											inputData.experienceData.filter(
												(_, dataItemIndex) =>
													dataItemIndex !==
													experienceDataIndex
											),
									});
								}}
							/>
						)
					)}
					<button
						className='btn btn-primary'
						onClick={() =>
							addItemsToArray(
								[experienceDataGroup],
								'experienceData'
							)
						}
					>
						Add another experience
					</button>
				</div>
			</div>
			<B_CV_PREVIEW {...inputData} />
		</div>
	);
};

export default A_INPUT;
