import { Layout } from 'antd'
import './layout.scss'

const { Content } = Layout

const MWLayout = ({ children }) => {
	return (
		<Layout className='mw-layout'>
			<Content className='mw-content'>{children}</Content>
		</Layout>
	)
}

export default MWLayout
