import AdminSetting from 'components/admin-setting/AdminSetting'
import { LoginOutlined, LogoutOutlined } from '@ant-design/icons'
import Button from 'components/button/Button'

import './home.scss'

function Home() {
	const handleTimeIn = () => {
		console.log('time in')
	}

	const handleTimeOut = () => {
		console.log('time out')
	}

	return (
		<div className='home'>
			<div className='home-container'>
				<div className='buttons'>
					<Button
						className='time-button'
						icon={<LoginOutlined />}
						onClick={handleTimeIn}
					>
						Time In
					</Button>
					<Button
						danger
						className='time-button'
						icon={<LogoutOutlined />}
						onClick={handleTimeOut}
					>
						Time Out
					</Button>
				</div>
			</div>
			<AdminSetting to='/records' />
		</div>
	)
}

export default Home
