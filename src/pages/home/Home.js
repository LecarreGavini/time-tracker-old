import AdminSetting from 'components/admin-setting/AdminSetting'
import './home.scss'

function Home() {
	return (
		<div className='home'>
			<div className='home-container'>Home</div>
			<AdminSetting to='/announcement' />
		</div>
	)
}

export default Home
