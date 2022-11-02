import { Space, Table } from 'antd'
import { EyeOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons'
import Button from 'components/button/Button'

import './records.scss'

function Records() {
	const columns = [
		{
			title: 'Name',
			render: row => (
				<Button type='link'>{`${row.firstName} ${row.lastName}`}</Button>
			),
		},
		{
			title: 'Action',
			render: row => (
				<Space size='middle'>
					<Button shape='circle' icon={<EyeOutlined />} />
					<Button warning shape='circle' icon={<EditOutlined />} />
					<Button danger shape='circle' icon={<DeleteOutlined />} />
				</Space>
			),
		},
	]
	const data = [
		{
			firstName: 'John',
			lastName: 'Brown',
		},
		{
			firstName: 'Jim',
			lastName: 'Green',
		},
	]

	return (
		<div className='records'>
			<Table columns={columns} dataSource={data} />
		</div>
	)
}

export default Records
