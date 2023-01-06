import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import B_CV_PREVIEW from './B_CV_PREVIEW';
import { B_PER_DATA_INPUT } from './B_PER_DATA_INPUT';
import { B_CONTACT_INPUT } from './B_CONTACT_INPUT';
import { B_SKILLS_INPUT } from './B_SKILLS_INPUT';
import { B_SECTION_INPUT } from './B_SECTION_INPUT';
import { B_IMAGE_UPLOAD } from './B_IMAGE_UPLOAD';
import { InputDataType } from './InputDataType';
import Button from 'react-bootstrap/Button';
import { Plus, Printer } from 'react-bootstrap-icons';

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
		imageData: { image: '' },
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
		PropertyNameType extends 'personalData' | 'contactData' | 'imageData'
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

	const changeInputData = <
		PropertyNameType3 extends 'skillData' | 'sections'
	>(
		propertyName: PropertyNameType3,
		newData: object,
		dataIndex: number
	) => {
		setInputData({
			...inputData,
			[propertyName]: inputData[propertyName].map(
				(dataItem, dataItemIndex) => {
					if (dataItemIndex !== dataIndex) {
						return dataItem;
					}
					return {
						...dataItem,
						...newData,
					};
				}
			),
		});
	};

	const deleteDataFunction = <PropertyNameType2 extends 'skillData'>(
		dataIndex: number,
		propertyName: PropertyNameType2
	) => {
		setInputData((inputData) => ({
			...inputData,
			[propertyName]: inputData[propertyName].filter(
				(_, dataItemIndexToDelete) =>
					dataItemIndexToDelete !== dataIndex
			),
		}));
	};

	return (
		<div className='d-flex flex-column' id='app-main'>
			<div className='d-flex justify-content-center' id='app-header'>
				CV Generator
			</div>
			{/* <div
				className='d-flex justify-content-end align-items-center'
				id='theme-print-row'
			>
				
			</div> */}
			<div className='d-flex justify-content-center'>
				<div className='d-flex flex-column input-area mx-2'>
					<div className='input-box yellow-left'>
						<h5>Personal Information</h5>
						<B_PER_DATA_INPUT
							data={inputData.personalData}
							changeData={(newPersonalData) =>
								changeStateSlice(
									newPersonalData,
									'personalData'
								)
							}
						/>
						<B_CONTACT_INPUT
							data={inputData.contactData}
							changeData={(newContactData) =>
								changeStateSlice(newContactData, 'contactData')
							}
						/>
					</div>
					<div>
						{inputData.sections.map(
							(sectionDataItem, sectionDataIndex) => (
								<B_SECTION_INPUT
									key={sectionDataIndex}
									sectionData={sectionDataItem}
									updateSection={(newData) =>
										changeInputData(
											'sections',
											newData,
											sectionDataIndex
										)
									}
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
								/>
							)
						)}
					</div>
					<div className='d-flex justify-content-center align-item-center'>
						<Button
							variant='outline-success add-btn'
							onClick={() =>
								addItemsToArray([sectionDataGroup], 'sections')
							}
						>
							<Plus />
						</Button>
					</div>
				</div>
				<B_CV_PREVIEW {...inputData} />
				<div className='right-column'>
					<div className='d-flex justify-content-center theme-switch'>
						<div className='mx-2 text-color'>dark mode</div>
						<Form>
							<Form.Check
								type='switch'
								id='custom-switch'
								onClick={() =>
									document.body.classList.toggle(
										'light-theme'
									)
								}
							/>
						</Form>
						<div className='mx-1 text-color'>light mode</div>
					</div>
					<div className='input-area'>
						<div className='input-box purple-right'>
							<B_IMAGE_UPLOAD
								data={inputData.imageData}
								changeData={(newImageData) => {
									changeStateSlice(newImageData, 'imageData');
								}}
							/>
						</div>
						<div className='d-flex flex-column input-box yellow-right'>
							<h5>Skills</h5>
							{inputData.skillData.map(
								(skillDataItem, skillDataIndex) => (
									<B_SKILLS_INPUT
										key={skillDataIndex}
										data={skillDataItem}
										changeData={(newData) =>
											changeInputData(
												'skillData',
												newData,
												skillDataIndex
											)
										}
										deleteData={() =>
											deleteDataFunction(
												skillDataIndex,
												'skillData'
											)
										}
									/>
								)
							)}
							<div className='d-flex justify-content-center align-item-center'>
								<Button
									variant='outline-success add-btn'
									onClick={() =>
										addItemsToArray(
											[skillDataGroup],
											'skillData'
										)
									}
								>
									<Plus />
								</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default A_INPUT;
