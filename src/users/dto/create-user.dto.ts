import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    example: 'john_doe',
    description: 'The unique username',
  })
  username: string;

  @ApiProperty({
    example: 'password123',
    description: 'The user password',
  })
  password: string;

  @ApiProperty({
    example: 'John',
    description: 'The user first name',
  })
  firstName: string;

  @ApiProperty({
    example: 'Doe',
    description: 'The user last name',
  })
  lastName: string;
}
