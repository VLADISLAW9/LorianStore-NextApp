import React, { FC } from 'react'

import { formatToCurrency } from '@/utils/format-to-currency'

const HotSale: FC = () => {
	return (
		<div className='text-white py-10 px-8'>
			<div className='text-sm'>HOT SALE</div>

			<h1 className='text-5xl font-normal mt-5 mb-14 font-serif'>
				A RED DRESS WILL BRIGHTEN UP YOUR EVENING
			</h1>

			<div className='flex items-center justify-between'>
				<div>
					<span className='font-normal text-3xl mr-2'>
						{formatToCurrency(195)}
					</span>
					<span className='line-through opacity-50 text-sm'>
						{formatToCurrency(295)}
					</span>
				</div>
				<button className='btn-link '>Buy now</button>
			</div>
		</div>
	)
}

export default HotSale
