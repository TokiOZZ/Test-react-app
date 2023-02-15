import { useState, useEffect } from 'react';
import './app.css';
import Header from './Header'
import Table from './Table';

const App = () => {
	const _apiBase = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json'
	const [rate, setRate] = useState([])

	const apiService = async (url) => {
		let res = await fetch(url)
		if (!res.ok) {
			throw new Error(`Could not fetch ${url}, status: ${res.status}`)
		}
		return await res.json()
	}
	const getData = async (url) => {
		let data = await apiService(url)
		setRate(data)
	}

	return (
		<div className="container">
			<Header />
			<button onClick={() => getData(_apiBase)}>Click me</button>
			<Table />
		</div>
	)
}

export default App;
