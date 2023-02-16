import Image from 'next/image'
import React, { FC } from 'react'

import Layout from '@/layout/Layout'

import Column from '@/ui/grid/Column'
import Row from '@/ui/grid/Row'

import { formatToCurrency } from '@/utils/format-to-currency'

import ProductItem from './ProductItem'
import { IProductsPage } from '@/../pages'

const Shop: FC<IProductsPage> = ({ products }) => {
	return (
		<Layout title='Shop' description='Catalog clothing and accesories'>
			<Row
				className='bg-[#94221a]'
				style={{
					backgroundBlendMode: 'multiply',
					backgroundImage: 'url(/images/texture3.jpg)'
				}}
			>
				{products.map((product, index) => (
					<ProductItem 	key={product.id} product={product} index={index} />
				))}
			</Row>
		</Layout>
	)
}

export default Shop
