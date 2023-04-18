import { Module } from '@nestjs/common';
import { RsoService } from './rso.service';
import { RsoController } from './rso.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RSO } from './rso.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RSO])],
  controllers: [RsoController],
  providers: [RsoService],
})
export class RsoModule {}
