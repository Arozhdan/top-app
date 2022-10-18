import cn from 'classnames';
import { StarIcon } from '@heroicons/react/24/solid';
import styles from './Rating.module.css';
import { RatingProps } from './Rating.props';
import { KeyboardEvent, useEffect, useState } from 'react';

export const Rating = ({ isEditable = false, rating, setRating, ...props }: RatingProps) => {

	const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

	useEffect(() => {
		constructRating(rating);
	}, [rating]);


	const constructRating = (currentRating: number) => {
		const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
			return <StarIcon
				className={cn(styles.star, {
					[styles.filled]: i < currentRating,
					[styles.isEditable]: isEditable
				})}
				onMouseEnter={() => changeDisplay(i + 1)}
				onMouseLeave={() => changeDisplay(rating)}
				onClick={() => onclick(i + 1)}
				tabIndex={isEditable ? 0 : -1}
				onKeyDown={e => handleSpace(i + 1, e)}
			/>;
		});
		setRatingArray(updatedArray);
	};

	const changeDisplay = (i: number) => {
		if (!isEditable) return;
		constructRating(i);
	};
	const onclick = (i: number) => {
		if (!isEditable || !setRating) return;
		setRating(i);
	};

	const handleSpace = (i: number, e: KeyboardEvent<SVGElement>) => {
		if (!isEditable || !setRating) return;
		if (e.code !== 'Space') return;
		setRating(i);
	};

	return (
		<div {...props}>
			{ratingArray.map((r, i) => <span key={i}>{r}</span>)}
		</div>
	);
};
