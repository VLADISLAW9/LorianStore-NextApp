import { FC, useEffect } from 'react'

import Layout from '@/layout/Layout'

import { useActions } from '@/hooks/useActions'

const Thanks: FC = () => {
	const { reset } = useActions()

	useEffect(() => {
		reset()
	}, [])

	return (
		<Layout title='Thanks'>
			<div className=' mt-16 text-2xl flex justify-center items-center'>
				Thanks for payment!
			</div>
		</Layout>
	)
}

export default Thanks
