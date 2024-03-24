import { Module } from '@nestjs/common';
import { ReviewController } from './review.controller';
import { ReviewService } from './review.service';
import { Reviews } from 'src/entities/entities/Reviews';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Reviews])],
  controllers: [ReviewController],
  providers: [ReviewService],
})
export class ReviewModule {}
