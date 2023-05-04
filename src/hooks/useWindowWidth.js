import { useState, useEffect } from "react";

const useWindowWidth = () => {
	const [windowWidth, setWindowWidth] = useState(undefined);

	useEffect(() => {
		function handleResize() {
			setWindowWidth(window.innerWidth);
		}
		setWindowWidth(window.innerWidth);

		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return windowWidth;
};

export default useWindowWidth;
