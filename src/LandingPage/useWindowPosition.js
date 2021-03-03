import { useLayoutEffect, useState } from 'react';

export default function useWindowPosition(id) {
	const [animation, setAnimation] = useState(false);

	useLayoutEffect(() => {
		// this function runs as soon as you begin scrolling
		function updatePosition() {
			const offSetHeight = window.document.getElementById(id).offsetHeight;
			// then, once window.document.getElementById("header").offsetHeight * 0.7 is less then the pageYOffset
			// the animation becomes true
			// So once the height of a certain element is higher then the pages YOffset, run the animation.
      console.log("window.pageYOffset", window.pageYOffset, (offSetHeight * 0.7))
			// that's when the animation should kick off
			if (window.pageYOffset > offSetHeight * 0.7) {
				setAnimation(true);
			}
		}
		// as seen here
		window.addEventListener('scroll', updatePosition);
		updatePosition();
		return () => window.removeEventListener('scroll', updatePosition);
	}, [id])

	return animation;
}
