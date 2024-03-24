import { Body, Controller, Post } from '@nestjs/common';
import { ReviewService } from './review.service';
import { ReviewDto } from './dtos/ReviewDto';
import { Reviews } from 'src/entities/entities/Reviews';

@Controller('review')
export class ReviewController {
  constructor(private readonly ReviewsService: ReviewService) {}

  @Post('get-all-reviews')
  async getAllReviews(): Promise<Reviews[]> {
    return this.ReviewsService.getAllReviews();
  }

  @Post('add-review')
  async addReview(@Body() Reviewdto: ReviewDto): Promise<Reviews> {
    return this.ReviewsService.addReview(Reviewdto);
  }
}
