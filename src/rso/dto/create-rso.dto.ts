import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateRSODto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsUUID()
  universityId: string;
}
