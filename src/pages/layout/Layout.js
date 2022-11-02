import { Layout } from 'antd'
import './layout.scss'

const { Content } = Layout

const MWLayout = ({ children }) => {
	return (
		<Layout className='tmw-layout'>
			<Content className='tmw-content'>{children}</Content>
		</Layout>
	)
}

export default MWLayout
