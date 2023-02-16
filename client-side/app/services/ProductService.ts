import { IProduct } from '@/types/product.interface'

import { axiosClassic } from '@/api/api'

const PRODUCTS = '/products'

export const ProductService = {
	async getProducts() {
		const { data } = await axiosClassic.get<IProduct[]>(PRODUCTS)

		return data
	},

	async bySearchTerm(searchTerm: string) {
		return axiosClassic.get<IProduct[]>(`${PRODUCTS}/search`, {
			params: { searchTerm }
		})
	},

	async byId(id: number) {
		return axiosClassic.get<IProduct>(`${PRODUCTS}/${id}`)
	},

	async bySlug(slug: string) {
		return axiosClassic.get<IProduct>(`${PRODUCTS}/slug/${slug}`)
	},

	async getRelatives(withoutId: number) {
		return axiosClassic.get<IProduct[]>(`${PRODUCTS}/relatives/${withoutId}`)
	}
}
