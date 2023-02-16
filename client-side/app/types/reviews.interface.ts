import { IProduct } from './product.interface'

export interface IReview {
	id: number
	// user
	product: IProduct
	text: string
	rating: number
}
