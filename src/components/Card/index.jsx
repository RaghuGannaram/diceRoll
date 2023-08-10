import React, { useMemo } from "react";
import classNames from "classnames";
import styles from "./index.module.css";
import { FaDiceOne, FaDiceTwo, FaDiceThree, FaDiceFour, FaDiceFive, FaDiceSix, FaCoins } from "react-icons/fa";

function Card({ face, bet, setOption, betState, outcome }) {
	const MappedIcon = {
		1: <FaDiceOne size={50} />,
		2: <FaDiceTwo size={50} />,
		3: <FaDiceThree size={50} />,
		4: <FaDiceFour size={50} />,
		5: <FaDiceFive size={50} />,
		6: <FaDiceSix size={50} />,
	};

	const cardClass = useMemo(() => {
		return classNames({
			[styles.cardContainer]: true,
			[styles.active]: betState,
			[styles.inactive]: !betState,
			[styles.win]: outcome !== null && outcome === face && bet,
			[styles.lose]: outcome !== null && outcome !== face && bet,
		});
	}, [face, bet, betState, outcome]);

	return (
		<div className={cardClass} onClick={() => betState && setOption(face)}>
			<div className={styles.cardOptionIcon}>{MappedIcon[Number(face)]}</div>
			<div className={styles.cardOptionValue}>
				<FaCoins size={10} />
				{bet}
			</div>
		</div>
	);
}

export default Card;
