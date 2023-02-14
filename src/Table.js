import React from 'react'
import './table.css'
import TableItem from './TableItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightLeft } from '@fortawesome/free-solid-svg-icons'


function Table() {
	return (
		<div className="table" >
			<TableItem />
			<button className="table__btn"><FontAwesomeIcon icon={faRightLeft} flip size='2x' style={{ '--fa-animation-duration': '3.5s', 'color': 'tomato' }} /></button>
			<TableItem />
		</div>
	)
}

export default Table