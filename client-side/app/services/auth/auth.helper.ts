
import {get, set, remove} from 'js-cookie'

export const saveTokenToStorage = async (accessToken:string) => {
	await set('accessToken', accessToken)
}

export const removeTokenFromStorage = async () => {
	await remove('accessToken')
}