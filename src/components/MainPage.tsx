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

// Welcome to the code for my CV App!

export const MainPage = () => {
	// The typing of this state was a practice for using a context provider --
	//see code below, directly under "return".
	// I only do this for "Personal Data" input fields.
	const [personalData, setPersonalData] = useState<PersonalData>({
		name: '',
		title: '',
	});

	// The rest of the input fields are kept in this state, and do not use
	// context providers to supply the component with prop information.
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

	// "skillDataGroup" and "sectionDataGroup" allow new objects
	// to be added to the 'inputData' state directly above.
	const skillDataGroup = {
		skillHeader: '',
		customSkillHeader: '',
		skillDetails: '',
	};

	const sectionDataGroup = { sectionHeader: '', experience: [] };

	// This allows new "skill data groups" and "section groups", defined directly above,
	// to be added to the state when the user clicks the add/+ button in the DOM.
	const addItemsToArray = <PropertyNameType extends 'skillData' | 'sections'>(
		items: InputDataType[PropertyNameType],
		propertyName: PropertyNameType
	) => {
		setInputData({
			...inputData,
			[propertyName]: [...inputData[propertyName], ...items],
		});
	};

	// This function accepts changes for the 'contactData' and 'imageData'
	// input fields and updates the state here on the main page.
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

	// This function has the same purpose as the function above it, only it
	// accepts changes for the input fields in 'skillData' and 'sections.'
	// I created a new function for these two, because they have a more complex
	// data structure -- they are arrays of objects rather than just objects.

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

	// This function allows the user to delete skill sections.
	// The functionality for deleting the experience sections is found in
	// the "SectionInput" component.
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
		// Here is the context provider mentioned above -- It's here only for PersonalData,
		// so I can practice how to provide and consume a context in Typescript/React.
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
