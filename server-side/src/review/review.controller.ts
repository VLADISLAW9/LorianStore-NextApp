import { Controller, Get, Param } from '@nestjs/common'
import { ReviewService } from './review.service'

@Controller('review')
export class ReviewController {
	constructor(private readonly reviewService: ReviewService) {}

	@Get()
	findAll() {
		return 1
		return this.reviewService.findAll()
	}

	@Get(':id')
	findById(@Param('id') id: string) {
		return this.reviewService.findById(+id)
	}
}
