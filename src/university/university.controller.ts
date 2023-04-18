import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
} from '@nestjs/swagger';
import { UniversityService } from './university.service';
import { University } from './university.entity';
import { CreateUniversityDto } from './dto/create-university.dto';
import { UpdateUniversityDto } from './dto/update-university.dto';

@ApiTags('universities')
@Controller('universities')
export class UniversityController {
  constructor(private readonly UniversityService: UniversityService) {}

  @ApiOperation({ summary: 'Get all universities' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The universities have been successfully fetched.',
    type: [University],
  })
  @Get()
  findAll(): Promise<University[]> {
    return this.UniversityService.findAll();
  }

  @ApiOperation({ summary: 'Get a university by ID' })
  @ApiNotFoundResponse({ description: 'University not found.' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The university has been successfully fetched.',
    type: University,
  })
  @Get(':id')
  findOne(@Param('id') id: string): Promise<University> {
    return this.UniversityService.findOne(id);
  }

  @ApiOperation({ summary: 'Create a new university' })
  @ApiCreatedResponse({
    description: 'The university has been successfully created.',
    type: University,
  })
  @Post()
  create(
    @Body() createUniversityDto: CreateUniversityDto,
  ): Promise<University> {
    return this.UniversityService.create(createUniversityDto);
  }

  @ApiOperation({ summary: 'Update a university by ID' })
  @ApiNotFoundResponse({ description: 'University not found.' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The university has been successfully updated.',
    type: University,
  })
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateUniversityDto: UpdateUniversityDto,
  ): Promise<University> {
    return this.UniversityService.update(id, updateUniversityDto);
  }

  @ApiOperation({ summary: 'Delete a university by ID' })
  @ApiNotFoundResponse({ description: 'University not found.' })
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'The university has been successfully deleted.',
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.UniversityService.remove(id);
  }
}
