import React, { useState } from "react";
import Card from "../Card";
import styles from "./index.module.css";

function Table({ options, setOptions, betState, outcome }) {

	function optionHandler(face) {
		const cards = JSON.parse(JSON.stringify(options));
		cards.forEach((card) => {
			if (card.face === face) {
				card.bet += 1;
			}
		});
		setOptions(cards);
	}

	return (
		<div className={styles.tableContainer}>
			{options.map((option) => (
				<Card key={option.face} face={option.face} bet={option.bet} setOption={optionHandler} betState={betState} outcome={outcome} />
			))}
		</div>
	);
}

export default Table;
