import { faker } from '@faker-js/faker'
import { Injectable } from '@nestjs/common'
import * as YooKassa from 'yookassa'
import { PaymentStatusDto } from './dto/payment-status.dto'
import { PaymentDto } from './dto/payment.dto'

const yooKassa = new YooKassa({
	shopId: process.env['SHOP_ID'],
	secretKey: process.env['PAYMENT_TOKEN']
})

@Injectable()
export class PaymentService {
	async payment(dto: PaymentDto) {
		const payment = await yooKassa.createPayment({
			amount: {
				value: dto.amount.toFixed(2),
				currency: 'RUB'
			},
			payment_method_data: {
				/* CHANGE */
				type: 'bank_card'
			},
			confirmation: {
				type: 'redirect',
				/* CHANGE */
				return_url: 'http://localhost:3000/thanks'
			},
			/* CHANGE */
			description: faker.name.jobTitle
		})

		return payment
	}

	async paymentStatus(dto: PaymentStatusDto) {
		/* Confirm Payment */
		if (dto.event !== 'payment.waiting_for_capture') return

		const payment = await yooKassa.capturePayment(dto.object.id)
		return payment
	}
}
