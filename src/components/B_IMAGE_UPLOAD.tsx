import { useState } from 'react';

export type ImageData = {
	image: string;
};

export const B_IMAGE_UPLOAD = ({
	data,
	changeData,
}: {
	data: ImageData;
	changeData: (newData: Partial<ImageData>) => void;
}) => {
	const [baseImage, setBaseImage] = useState('');

	const uploadImage = async (e: any) => {
		const file = e.target.files[0];
		const base64 = await convertBase64(file);
		setBaseImage(base64);
		changeData({ image: base64 });
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
				hidden
			/>
			<label htmlFor='profileImage'>Choose file</label>
			<div className=' m-1 text-truncate'>{baseImage}</div>
		</>
	);
};
