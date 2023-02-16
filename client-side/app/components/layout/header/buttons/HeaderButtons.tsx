import React from 'react';
import { FiBell, FiSearch, FiShoppingCart } from 'react-icons/fi'



import Column from '@/ui/grid/Column';
import SquareButton from '@/ui/square-button/SquareButton';
import Cart from './cart/Cart';


const HeaderButtons = () => {
	return (
		<Column size={2} className='gap-5'>
			<SquareButton Icon={FiSearch} onClick={() => {}} />
			<SquareButton Icon={FiBell} onClick={() => {}} />
			<Cart/>
		</Column>
	)
}

export default HeaderButtons