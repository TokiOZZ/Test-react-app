import React from 'react'
import './header.css'

const Header = (props) => {
	return (
		<div className="header">
			<h1 onClick={props.onClick} className="header__title">Currency exchange calculator</h1>
		</div>
	)
}

export default Header