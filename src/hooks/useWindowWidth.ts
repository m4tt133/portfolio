import { useState, useEffect } from "react";

const useWindowWidth = (): number => {
	const [windowWidth, setWindowWidth] = useState<number>(0);

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
