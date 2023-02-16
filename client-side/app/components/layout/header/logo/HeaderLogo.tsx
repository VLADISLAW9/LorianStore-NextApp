import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'

import Column from '@/ui/grid/Column'

const HeaderLogo: FC = () => {
	return (
		<Column size={3}>
			<Link href='/' className='flex items-center'>
				<Image
					src='/images/logo.svg'
					width={100}
					height={100}
					className='-mr-3'
					alt='Lorial shop'
				/>
				<span>
					<span className='tracking-[0.1em] text-white block font-light'>
						LORIAN
					</span>
					<span className='tracking-[0.42em] text-dark-gray text-sm block font-extralight'>
						STORE
					</span>
				</span>
			</Link>
		</Column>
	)
}

export default HeaderLogo
