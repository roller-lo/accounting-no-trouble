import './App.css'
import { Route, Routes } from 'react-router-dom'
import Board from './components/Board.js'
import Demo from './components/Demo.js'
import Home from './components/Home.js'
import Oauth from './components/oauth/Oauth.js'
import Authorization from './components/oauth/Authorization.js'

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/demo/*" element={<Demo path={'/demo'} />} />
				<Route path="/board" element={<Board />} />
				<Route path="/oauth/*" element={<Oauth path={'/oauth'} />} />
				<Route
					path="/"
					element={
						<Authorization>
							<Home />
						</Authorization>
					}
				/>
			</Routes>
		</div>
	)
}

export default App
