import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Router from './routes/Router'

function App() {
	return (
		<BrowserRouter>
			<Suspense fallback={<div>Loading...</div>}>
				<Router />
			</Suspense>
		</BrowserRouter>
	)
}

export default App
