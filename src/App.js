import { useState, useEffect } from 'react';
import './app.css';
import Header from './Header'
import Table from './Table';

const App = () => {

	const [rate, setRate] = useState({})

	const apiService = async (url) => {
		const res = await fetch(url)
		return await setRate(res.json().filter(item => ({
			if(item.)
		})))
}
useEffect(() => {
	apiService('https://api.monobank.ua/bank/currency')
}, [])

return (
	<div className="container">
		<Header />
		<Table />
	</div>
)
}

export default App;
