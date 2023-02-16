import { IProduct } from '@/types/product.interface'

export interface ICartItem {
	id: number
	product: IProduct
	quantity: number
}
