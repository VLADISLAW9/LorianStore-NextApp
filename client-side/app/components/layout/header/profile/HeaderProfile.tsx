import React from 'react'
import { FiUser } from 'react-icons/fi'

import Column from '@/ui/grid/Column'
import SquareButton from '@/ui/square-button/SquareButton'

import { useAuth } from '@/hooks/useAuth'
import Link from 'next/link'

const HeaderProfile = () => {
	const { isLoggedIn } = useAuth()
	return (
		<Column size={3} className='flex items-center'>
			{/* {isLoggedIn ? (
				<>
					<SquareButton Icon={FiUser} />
					<div className='ml-3'>
						<div className='text-gray text-sm'>Vladislav Duplinskiy</div>
						<button className='btn-link'>Logout</button>
					</div>
				</>
			) : (
				<><Link className='btn-link' href='/auth'>Go to auth</Link></>
			)} */}
			<SquareButton Icon={FiUser} />
					<div className='ml-3'>
						<div className='text-gray text-sm'>Vladislav Duplinskiy</div>
						<button className='btn-link '>Logout</button>
					</div>
		</Column>
	)
}

export default HeaderProfile
