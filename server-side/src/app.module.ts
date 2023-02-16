import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { ServeStaticModule } from '@nestjs/serve-static'
import { path } from 'app-root-path'
import { ProductModule } from './product/product.module'
import { ReviewModule } from './review/review.module'
import { PaymentModule } from './payment/payment.module'

@Module({
	imports: [
		ServeStaticModule.forRoot({
			rootPath: `${path}/uploads`,
			serveRoot: '/uploads'
		}),
		ConfigModule.forRoot(),
		ProductModule,
		ReviewModule,
		PaymentModule,
		AuthModule
	]
})
export class AppModule {}
