import { useMutation } from '@tanstack/react-query';
import cn from 'clsx';
import { useRouter } from 'next/router';
import { FC, useRef, useState } from 'react';
import { FiShoppingCart } from 'react-icons/fi';



import SquareButton from '@/ui/square-button/SquareButton';



import { useCart } from '@/hooks/useCart';
import { useOutside } from '@/hooks/useOutside';



import { formatToCurrency } from '@/utils/format-to-currency';



import styles from './Cart.module.scss';
import CartItem from './cart-item/CartItem';
import { PaymentService } from '@/services/PaymentService';


const Cart: FC = () => {
	const { isShow, setIsShow, ref } = useOutside(false)

	const { cart, total } = useCart()

	const { push } = useRouter()

	const { mutate } = useMutation(
		['create payment'],
		() => PaymentService.createPayment(total),
		{
			onSuccess(data) {
				push(data.confirmation.confirmation_url)
			}
		}
	)

	return (
		<div className='relative' ref={ref}>
			<SquareButton
				Icon={FiShoppingCart}
				onClick={() => {
					setIsShow(!isShow)
				}}
				number={cart.length}
			/>

			<div
				className={cn(
					'absolute top-[4.2rem] w-[315px] bg-[#131313] px-5 py-3 -left-[204px] text-sm menu z-10',
					isShow ? 'openMenu' : 'closeMenu'
				)}
			>
				<div className='font-normal text-lg mb-5'>My cart</div>

				<div className={styles.cart}>
					{cart.length ? (
						cart.map(item => <CartItem item={item} key={item.id} />)
					) : (
						<div>Cart is empty!</div>
					)}
				</div>

				<div className={styles.footer}>
					<div>Total:</div>
					<div>{formatToCurrency(total)}</div>
				</div>
				<div className='text-center'>
					<button className='btn-link mt-5 mb-2' onClick={() => mutate()}>
						Payment
					</button>
				</div>
			</div>
		</div>
	)
}

export default Cart