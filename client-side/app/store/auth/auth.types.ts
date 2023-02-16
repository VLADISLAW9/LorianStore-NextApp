import { ICartItem } from '@/types/cart.interface'

export interface IAuthInitialState {
	isLoggedIn: boolean
	isLoading: boolean
}

export interface IEmailPassword {
	email: string
	password: string
}
