import React, { useState } from 'react'
import { UA } from 'country-flag-icons/react/3x2'
import './tableItem.css'

const TableItem = () => {

	const [sum, setSum] = useState(0)

	const getSum = (value) => {
		setSum(+value)
	}

	return (
		<div className="table-item">
			<UA />
			<input
				type="number"
				className="table-item__input"
				onChange={(e) => getSum(e.target.value)}
				value={sum} />
			<span className="table-item__rate">
				1 currency#1 = ? currency#2
			</span>
		</div>
	)
}

export default TableItem