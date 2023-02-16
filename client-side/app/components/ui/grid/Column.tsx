import cn from 'clsx'
import React, { FC, PropsWithChildren } from 'react'

interface IColumn {
	size: number
	isCenter?: boolean
	className?: string
	isPadding?: boolean
	
}

const Column: FC<PropsWithChildren<IColumn>> = ({
	size,
	children,
	isCenter = true,
	className,
	isPadding = true,
}) => {
	return (
		<div
			style={{ gridColumn: `span ${size} / span ${size}` }}
			className={cn(
				'border-r-2 border-black border-solid   h-full flex items-center ',
				{
					'justify-center': isCenter,
					'p-3': isPadding
				},
				className
			)}
		>
			{children}
		</div>
	)
}

export default Column
