import { PartialType } from '@nestjs/mapped-types';
import { CreateRSODto } from './create-rso.dto';

export class UpdateRSODto extends PartialType(CreateRSODto) {}
