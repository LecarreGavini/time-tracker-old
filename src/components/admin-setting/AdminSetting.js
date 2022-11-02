import { NavLink } from 'react-router-dom'
import { SettingOutlined } from '@ant-design/icons'

import './admin-setting.scss'

const AdminSetting = ({ to }) => {
	return (
		<NavLink to={to}>
			<div className='admin-setting'>
				<SettingOutlined spin className='setting-icon' />
			</div>
		</NavLink>
	)
}

export default AdminSetting
