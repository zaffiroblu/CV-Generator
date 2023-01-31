import html2canvas from 'html2canvas';

// html2canvas is the library I used to "capture" the
// CV preview as a jpeg image.
// I found this code snippet on Google, which allows
// the user to download the CV preview.

const exportAsImage = async (el, imageFileName) => {
	const canvas = await html2canvas(el, { scale: 5 });
	const image = canvas.toDataURL('image/jpeg', 1.0);
	downloadImage(image, imageFileName);
};
const downloadImage = (blob, fileName) => {
	const fakeLink = window.document.createElement('a');
	fakeLink.style = 'display:none;';
	fakeLink.download = fileName;

	fakeLink.href = blob;

	document.body.appendChild(fakeLink);
	fakeLink.click();
	document.body.removeChild(fakeLink);

	fakeLink.remove();
};

export default exportAsImage;
