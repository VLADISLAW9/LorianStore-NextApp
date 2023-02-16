import { Controller, Get, Param, Query } from '@nestjs/common'
import { ProductService } from './product.service'
import { sortType } from './sort.type'

@Controller('products')
export class ProductController {
	constructor(private readonly productService: ProductService) {}

	@Get()
	findAllWithSort(@Query('sortType') type?: sortType) {
		return this.productService.findAll(type)
	}

	@Get('search')
	findAllBySearchTerm(@Query('searchTerm') searchTerm?: string) {
		return this.productService.bySearchTerm(searchTerm)
	}

	@Get('/slug/:slug')
	findBySlug(@Param('slug') slug: string) {
		return this.productService.findBySlug(slug)
	}

	@Get('/relatives/:id')
	findRelatives(@Param('id') id: string) {
		return this.productService.findRelatives(+id)
	}

	@Get(':id')
	findById(@Param('id') id: string) {
		return this.productService.findById(+id)
	}
}
