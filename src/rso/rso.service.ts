import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RSO } from './rso.entity';
import { CreateRSODto } from './dto/create-rso.dto';
import { UpdateRSODto } from './dto/update-rso.dto';

@Injectable()
export class RsoService {
  constructor(
    @InjectRepository(RSO)
    private rsosRepository: Repository<RSO>,
  ) {}

  async findAll(): Promise<RSO[]> {
    return this.rsosRepository.find();
  }

  async findOne(id: string): Promise<RSO> {
    return this.rsosRepository.findOne({ where: { id } });
  }

  async create(createRSODto: CreateRSODto): Promise<RSO> {
    const newRSO = this.rsosRepository.create(createRSODto);
    return this.rsosRepository.save(newRSO);
  }

  async update(id: string, updateRSODto: UpdateRSODto): Promise<RSO> {
    const existingRSO = await this.rsosRepository.preload({
      id: id,
      ...updateRSODto,
    });

    if (!existingRSO) {
      throw new Error('RSO not found');
    }

    return this.rsosRepository.save(existingRSO);
  }

  async remove(id: string): Promise<void> {
    const rso = await this.findOne(id);

    if (!rso) {
      throw new Error('RSO not found');
    }

    await this.rsosRepository.remove(rso);
  }
}
