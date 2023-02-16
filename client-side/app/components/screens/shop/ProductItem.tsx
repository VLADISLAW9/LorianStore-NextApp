import Image from 'next/image'
import React, { FC } from 'react'

import Column from '@/ui/grid/Column'

import { useActions } from '@/hooks/useActions'
import { useCart } from '@/hooks/useCart'

import { IProduct } from '@/types/product.interface'

import { formatToCurrency } from '@/utils/format-to-currency'

interface IProductProps {
	product: IProduct
	index: number
}

const ProductItem: FC<IProductProps> = ({ product, index }) => {
	const { addToCart, removeFromCart } = useActions()

	const { cart } = useCart()

	const currentElement = cart.find(
		cartItem => cartItem.product.id === product.id
	)

	return (
		<Column
			className='border-t border-b'
			size={
				index === 0
					? 3
					: index === 4
					? 3
					: index === 5
					? 3
					: index === 9
					? 3
					: index === 10
					? 3
					: 2
			}
		>
			<div className='text-white text-center pb-5'>
				<div
					className='flex items-center justify-center mb-4'
					style={{ height: 460 }}
				>
					<Image alt='' src={product.images[0]} width={220} height={220} />
				</div>
				<h2 className='font-serif mb-2 text-lg'>{product.name}</h2>
				<div className='mb-3	'>{formatToCurrency(product.price)}</div>
				<button
					onClick={() =>
						currentElement
							? removeFromCart({ id: currentElement.id })
							: addToCart({ product, quantity: 1 })
					}
					className='btn-link'
				>
					{currentElement ? 'Remove from cart' : 'Add to cart'}
				</button>
			</div>
		</Column>
	)
}

export default ProductItem
