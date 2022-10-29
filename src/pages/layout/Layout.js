import { Layout } from 'antd'

const { Header, Footer, Content } = Layout

const MWLayout = ({ children }) => {
	return (
		<div>
			<Layout>
				<Header>Header</Header>
				<Content>{children}</Content>
				<Footer>Footer</Footer>
			</Layout>
		</div>
	)
}

export default MWLayout
