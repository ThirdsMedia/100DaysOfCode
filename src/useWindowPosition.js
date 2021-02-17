import React from 'react';
import { useLayoutEffect, useState } from '';

export default function useWindowPosition(id) {
	const [animation, setAnimation] = useState(false);

	useLayoutEffect(() => {
		function updatePosition() {
			const offSetHeight = window.document.getElementById(id).offsetHeight;
			if (windowPageYOffset > offsetHeight * 0.7) {
				setAnimation(true);
			}
		}
		window.addEventListener('scroll', updatePosition);
		updatePosition();
		return () => window.remoteEventListener('scroll', updatePosition);
	}, [id])
	return animation;
}
