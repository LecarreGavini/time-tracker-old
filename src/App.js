import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Router from './routes/Router'
import Layout from 'pages/layout/Layout'
import 'antd/dist/antd.min.css'
import './app.scss'

function App() {
	return (
		<BrowserRouter>
			<Suspense fallback={<div>Loading...</div>}>
				<Layout>
					<Router />
				</Layout>
			</Suspense>
		</BrowserRouter>
	)
}

export default App
