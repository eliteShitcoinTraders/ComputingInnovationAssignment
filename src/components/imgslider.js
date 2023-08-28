import { useState } from 'react';
import { useEffect } from 'react';



const ImageSlider = ({ slides }) => {
	const [currentIndex, setCurrentIndex] = useState(0);




	const sliderstyles = {

		height: "100%",
		position:"relative"
	};

	const slidestyles = {
		width: "100%",
		height: "100%",
		borderRadius: "10px",
		backgroundPosition: "center",
		backgroundSize: "cover",
		backgroundImage: `url(${slides[currentIndex].url})`,
	};

	const leftArrowStyles = {
		position: "absolute",
		top: "50%",
		transform: "translate(0, -50%)",
		left: "32px",
		fontSize: "45px",
		color: "#fff",
		zIndex: 1,
		cursor: "pointer",

	};

	const rightArrowStyles = {
		position: "absolute",
		top: "50%",
		transform: "translate(0, -50%)",
		right: "32px",
		fontSize: "45px",
		color: "#fff",
		zIndex: 1,
		cursor: "pointer",

	};

	const goToPrevious = () => {
		const isFirstSlide = currentIndex === 0
		const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
		setCurrentIndex(newIndex);
	};

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