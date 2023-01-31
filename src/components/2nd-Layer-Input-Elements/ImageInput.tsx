import { useState } from 'react';
import { Trash3 } from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';
import React, { useRef } from 'react';

export type ImageData = {
	image: string;
};

export const ImageInput = ({
	data,
	changeData,
}: {
	data: ImageData;
	changeData: (newData: Partial<ImageData>) => void;
}) => {
	const [baseImage, setBaseImage] = useState('');

	const [imageSpinner, setImageSpinner] = useState(false);

	const imageRef = useRef<HTMLInputElement>(null);

	const uploadImage = async (e: any) => {
		try {
			const file = e.target.files[0];
			setImageSpinner(true);
			const base64 = await convertBase64(file);
			setBaseImage(base64);
			changeData({ image: base64 });
			setImageSpinner(false);
		} catch (error) {
			setImageSpinner(false);
		}
	};

	const convertBase64 = (file: any) => {
		return new Promise<string>((resolve, reject) => {
			const fileReader = new FileReader();
			fileReader.readAsDataURL(file);

			fileReader.onload = () => {
				resolve(fileReader.result?.toString() ?? '');
			};

			fileReader.onerror = (error) => {
				reject(error);
			};
		});
	};

	function deleteImage() {
		changeData({ image: '' });
		const profileImage = imageRef.current;
		if (profileImage) {
			profileImage.value = '';
		}
		setBaseImage('');
	}

	return (
		<>
			<h5 className='input-header font-effect-neon'>Image Upload</h5>
			<input
				type='file'
				id='profileImage'
				name='profileImage'
				accept='image/jpeg, image/png, image/jpg'
				onChange={(e) => {
					uploadImage(e);
				}}
				ref={imageRef}
				hidden
			/>
			<label className='btn btn-outline-info' htmlFor='profileImage'>
				Choose file
			</label>
			<div className=' m-1 text-truncate d-none'>{baseImage}</div>
			<div className='d-flex justify-content-end align-items-center'>
				{imageSpinner === true ? (
					<div
						className='spinner-border text-info'
						role='status'
						id='load-spinner-image'
					>
						<span className='visually-hidden'>Loading...</span>
					</div>
				) : null}
				<Button
					variant='outline-danger delete-btn'
					onClick={deleteImage}
				>
					<Trash3 />
				</Button>
			</div>
		</>
	);
};
