import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import CVPreview from './3rd-Layer-Display/CVPreview';
import {
	PersonalDataInput,
	PersonalData,
	PersonalDataContext,
} from './2nd-Layer-Input-Elements/PersonalDataInput';
import { ContactInput } from './2nd-Layer-Input-Elements/ContactInput';
import { SkillsInput } from './2nd-Layer-Input-Elements/SkillsInput';
import { SectionInput } from './2nd-Layer-Input-Elements/SectionInput';
import { ImageInput } from './2nd-Layer-Input-Elements/ImageInput';
import { InputDataType } from './InputDataType';
import Button from 'react-bootstrap/Button';
import { Plus } from 'react-bootstrap-icons';

export const MainPage = () => {
	const [personalData, setPersonalData] = useState<PersonalData>({
		name: '',
		title: '',
	});

	const [inputData, setInputData] = useState<InputDataType>({
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

	// Example: I want to add a new SkillsData section to the CV.
	// I click the "add" button below, then the function above gets sent these arguments: [skillDataGroup],'skillData'

	// const addItemsToArray = <I am defining a 'PropertyNameType', that CAN SIMPLY ACCEPT the STRINGS!: 'skillData' | 'sections'>(
	// 	items: the first argument gets data that has the TYPE structure: 'InputDataType.skillData', (or InputDataType.section)
	// 	propertyName: the second argument is a PropertyNameType (which I just said is either the STRINGS 'skillData' or 'sections')
	// ) => {
	// 	setInputData({
	// 		...inputData (Everything in the array),
	// 		skillData: [...inputData.skillData (this copies ALL the other skillData entries), ...skillDataGroup (this adds a new SkillDataGroup, a group defined separately from the state hook.)],
	// 	});
	// };

	const changeStateSlice = <
		PropertyNameType extends 'contactData' | 'imageData'
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

	// Next example: I am entering my phone number into the appropriate field, starting with '+'.
	// ContactData is a simple object (not an array of objects -- for that, see the next function!)
	// On the Contact Display page, the "<p className='classSidebarText'>{phone}</p>" receives the '+' and
	// sends the info back to this main page through this function, within the component under return:
	// changeData={(newContactData which is something like 'phone: +') =>
	// 	changeStateSlice(
	// 		newContactData, which is 'phone: +',
	// 		'contactData'
	// 	)
	// Then the function above looks like this:
	//
	// 	const changeStateSlice = <
	// 	PropertyNameType extends 'contactData' | 'imageData'
	// >(
	// 	newData: Partial<InputDataType.contactData>,
	// 	propertyName: contactData
	// ) => {
	// 	setInputData((inputData) => ({
	// 		...inputData,
	// 		contactData: {
	// 			...inputData.contactData,
	// 			...phone: '+',
	// 		},
	// 	}));
	// };

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

	// Example: I have 2 sections, Experience and Education, and in Education,
	// and in Education, "Fu Berlin" and "Brevard Community College."
	// I enter "October 2012" into "timespan" of FU Berlin.
	// In the "ExperienceInput" component,
	// we have "timespan: 'October 2012'", which is then sent to the parent Section Input, which
	// sticks it into this function as so:
	//
	// {sectionData.experience.map(
	// 	(experienceDataItem 1st 2nd, experienceDataIndex 1 2) => (
	// 		<ExperienceInput
	// 			key={experienceDataIndex}
	// 			data={experienceDataItem}
	// changeDataExperience={(newData sectionData.experience[1].timespan: 'October 2012'") =>
	// 	updateSection({
	// 		experience: sectionData.experience.map(
	// 			(dataItem, dataItemIndex) => {
	// 				if (
	// 					dataItemIndex !==
	// 					experienceDataIndex
	// 				) {
	// 					return dataItem;
	// 				}
	// 				return {
	// 					...dataItem,
	// 					...newData,
	// 				};
	// 			}
	// 		),
	// 	})
	// So that returns the first experience group (Fu Berlin) and and "timespan: 'October 2012'"
	// to "Update Section function on the main page:
	//
	// {inputData.sections.map(
	// 	(sectionDataItem, sectionDataIndex) => (
	// 		<SectionInput
	// 			key={sectionDataIndex}
	// 			sectionData={sectionDataItem}
	// 			updateSection={(newData) =>
	// 				changeInputData(
	// 					'sections' (a string),
	// 					newData(which is the 1st 'FU' object (the 1st experience) and includes "timeline: October 2012"),
	// 					sectionDataIndex, which is 2
	// 				)
	// 			}
	// Then FINALLY we are at the function we see above:
	// 	const changeInputData = <
	// 	PropertyNameType3 extends 'skillData' | 'sections'
	// >(
	// 	propertyName: PropertyNameType3,
	// 	newData: object,
	// 	dataIndex: number
	// ) => {
	// 	setInputData({
	// 		...inputData,
	// 		sections: inputData.sections.map(
	// 			(dataItem, dataItemIndex) => {
	// 				if (dataItemIndex !== dataIndex) {
	// 					return dataItem;
	// 				}
	// 				return {
	// 					...dataItem,
	// 					...newData,
	// 				};
	// 			}
	// 		),
	// 	});
	// };

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

	//Example: I want to delete the 1st skill data section (and I already added a second one).
	// After pushing the trashcan icon below on the said data section, the function above gets sent :
	// skillDataIndex,'skillData'.
	// const deleteDataFunction = <PropertyNameType2 extends 'skillData'>(
	// 	dataIndex: number, which is 2
	// 	propertyName: skillData
	// ) => {
	// 	setInputData((inputData) => ({
	// 		...inputData,
	// 		skillData: inputData.skillData.filter(
	// 			(_, dataItemIndexToDelete) =>
	// 				dataItemIndexToDelete !== dataIndex
	// 		),
	// 	}));
	// };

	return (
		<PersonalDataContext.Provider value={personalData}>
			<div
				className='d-flex flex-column justify-content-center'
				id='app-main'
			>
				<h1
					className='d-flex justify-content-center font-effect-neon'
					id='app-header'
				>
					CV Generator
				</h1>

				<div className='d-flex justify-content-center'>
					<div className='d-flex flex-column input-area mx-2'>
						<div className='input-box purple-left'>
							<h5 className='input-header font-effect-neon'>
								Personal Information
							</h5>
							<PersonalDataInput setData={setPersonalData} />
							<ContactInput
								data={inputData.contactData}
								changeData={(newContactData) =>
									changeStateSlice(
										newContactData,
										'contactData'
									)
								}
							/>
						</div>
						<div>
							{inputData.sections.map(
								(sectionDataItem, sectionDataIndex) => (
									<SectionInput
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
												sections:
													inputData.sections.filter(
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
									addItemsToArray(
										[sectionDataGroup],
										'sections'
									)
								}
							>
								<Plus />
							</Button>
						</div>
					</div>
					<CVPreview {...inputData} />
					<div className='right-column'>
						<div className='d-flex justify-content-center theme-switch'>
							<div className='mx-2 text-color'>dark mode</div>
							<Form>
								<Form.Check
									className='info'
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
								<ImageInput
									data={inputData.imageData}
									changeData={(newImageData) => {
										changeStateSlice(
											newImageData,
											'imageData'
										);
									}}
								/>
							</div>
							<div className='d-flex flex-column input-box purple-right'>
								<h5 className='input-header font-effect-neon'>
									Skills
								</h5>
								{inputData.skillData.map(
									(skillDataItem, skillDataIndex) => (
										<SkillsInput
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
		</PersonalDataContext.Provider>
	);
};

export default MainPage;
