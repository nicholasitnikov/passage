import React, { useMemo } from 'react'
import SimpleBar from 'simplebar-react'
import ButtonBlock from '../ButtonBlock/ButtonBlock'
import styles from './ButtonsGroupBlock.module.css'

interface IButtonGroupBlockProps {
	content: string[]
}

const ButtonsGroupBlock: React.FC<IButtonGroupBlockProps> = ({ content }) => {
	const renderContent = useMemo(() => {
		return content.map((c, i) => {
			return <ButtonBlock label={c} key={i} />
		})
	}, [content])

	return (
		// @ts-ignore
		<SimpleBar style={{ maxHeight: 300 }}>
			<div className={styles.buttonsGroup}>{renderContent}</div>
		</SimpleBar>
	)
}

export default ButtonsGroupBlock
