import React from 'react'
import { Button } from 'antd'

import './button.scss'

const MWButton = ({ children, warning, ...buttonProps }) => {
	return (
		<Button
			type='primary'
			shape='round'
			className={`mw-button ${!!warning && 'warning'}`}
			icon={buttonProps.icon || null}
			{...buttonProps}
		>
			{children}
		</Button>
	)
}

export default MWButton
