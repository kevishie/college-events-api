import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { University } from './university.entity';
import { CreateUniversityDto } from './dto/create-university.dto';
import { UpdateUniversityDto } from './dto/update-university.dto';

@Injectable()
export class UniversityService {
  constructor(
    @InjectRepository(University)
    private universitiesRepository: Repository<University>,
  ) {}

  async findAll(): Promise<University[]> {
    return this.universitiesRepository.find();
  }

  async findOne(id: string): Promise<University> {
    return this.universitiesRepository.findOne({ where: { id: id } });
  }

  async create(createUniversityDto: CreateUniversityDto): Promise<University> {
    const newUniversity =
      this.universitiesRepository.create(createUniversityDto);
    return this.universitiesRepository.save(newUniversity);
  }

  async update(
    id: string,
    updateUniversityDto: UpdateUniversityDto,
  ): Promise<University> {
    const existingUniversity = await this.universitiesRepository.preload({
      id: id,
      ...updateUniversityDto,
    });

    if (!existingUniversity) {
      throw new Error('University not found');
    }

    return this.universitiesRepository.save(existingUniversity);
  }

  async remove(id: string): Promise<void> {
    const university = await this.findOne(id);

    if (!university) {
      throw new Error('University not found');
    }

    await this.universitiesRepository.remove(university);
  }
}
