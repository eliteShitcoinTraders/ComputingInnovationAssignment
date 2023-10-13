/*student ID:103798447
	name: sothearak heng
	group: g-99
*/
import { useState } from 'react';
import { useEffect } from 'react';



const ImageSlider = ({ slides }) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	/*css files for image slider*/
	const sliderstyles = {/*for img container*/

		height: "100%",
		position:"relative"
	};

	const slidestyles = {/*for each slides*/
		width: "100%",
		height: "100%",
		borderRadius: "10px",
		backgroundPosition: "center",
		backgroundSize: "cover",
		backgroundImage: `url(${slides[currentIndex].Img_Url})`,
	};

	const leftArrowStyles = {/*for arrrow*/
		position: "absolute",
		top: "50%",
		transform: "translate(0, -50%)",
		left: "32px",
		fontSize: "45px",
		color: "#fff",
		zIndex: 1,
		cursor: "pointer",

	};

	const rightArrowStyles = {/*for arrrow*/
		position: "absolute",
		top: "50%",
		transform: "translate(0, -50%)",
		right: "32px",
		fontSize: "45px",
		color: "#fff",
		zIndex: 1,
		cursor: "pointer",

	};

	//function to allow the user to go back to the previous slides by changing the index
	const goToPrevious = () => {
		const isFirstSlide = currentIndex === 0
		const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
		setCurrentIndex(newIndex);
	};
	//function to allow the user to go back to the next slides by changing the index

	const goToNext = () => {
		const isLastSlide = currentIndex === slides.length - 1;
		const newIndex = isLastSlide ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	};

	useEffect(() => {
		const slideInterval = setInterval(goToNext, 5000); // Change slide every 5 seconds
		return () => {
			clearInterval(slideInterval);
		};
	}, [currentIndex]); // Run the effect whenever currentIndex changes
	return (
		<div style={sliderstyles}>
			<div style={leftArrowStyles} onClick={goToPrevious}>(</div>
			<div style={rightArrowStyles} onClick={goToNext}>)</div>
			<div style={slidestyles}></div>
		</div>
	);
};

export default ImageSlider;