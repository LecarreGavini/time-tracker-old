import { lazy } from 'react'
import { Routes, Route } from 'react-router-dom'

const Home = lazy(() => import('pages/home/Home'))
const Records = lazy(() => import('pages/records/Records'))

function Router() {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/records' element={<Records />} />
		</Routes>
	)
}

export default Router
