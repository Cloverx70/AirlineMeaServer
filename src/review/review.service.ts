import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Reviews } from 'src/entities/entities/Reviews';
import { Repository } from 'typeorm';
import { ReviewDto } from './dtos/ReviewDto';

@Injectable()
export class ReviewService {
  constructor(
    @InjectRepository(Reviews) private readonly ReviewRepo: Repository<Reviews>,
  ) {}

  async getAllReviews(): Promise<Reviews[]> {
    try {
      return await this.ReviewRepo.find();
    } catch (error) {
      console.error(error);
    }
  }

  async addReview(ReviewDto: ReviewDto): Promise<Reviews> {
    try {
      const Review = this.ReviewRepo.create({
        reviewid: Math.floor(Math.random() * 10000) + 1000,
        username: ReviewDto.Username,
        userMessage: ReviewDto.UserMessage,
        userid: ReviewDto.Userid,
        stars: ReviewDto.Stars,
      });
      return this.ReviewRepo.save(Review);
    } catch (error) {
      console.error(error);
    }
  }
}
