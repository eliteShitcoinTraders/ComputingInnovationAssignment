import { useState} from 'react';


const ImageSlider = ({ slides }) => {
	const [currentIndex, setcurrentuser] = useState(0);

	const slidestyles = {
		width: '100%',

	}

	return (
		<div>
			<div
				style={{ backgroundImage: 'url(${slides[currentIndex].url})' }}
			></div>
		</div>
	)
};

export default ImageSlider;