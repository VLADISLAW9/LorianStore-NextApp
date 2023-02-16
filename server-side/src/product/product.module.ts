import { Module } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { ReviewService } from 'src/review/review.service'
import { ProductController } from './product.controller'
import { ProductService } from './product.service'

@Module({
	controllers: [ProductController],
	providers: [ProductService, PrismaService, ReviewService]
})
export class ProductModule {}
