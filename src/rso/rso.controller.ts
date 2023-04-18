import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import {
  ApiBody,
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiParam,
} from '@nestjs/swagger';
import { CreateRSODto } from './dto/create-rso.dto';
import { UpdateRSODto } from './dto/update-rso.dto';
import { RSO } from './rso.entity';
import { RsoService } from './rso.service';

@ApiTags('rsos')
@Controller('rsos')
export class RsoController {
  constructor(private readonly rsoService: RsoService) {}

  @Get()
  @ApiOperation({ summary: 'Get all RSOs' })
  @ApiResponse({
    status: 200,
    description: 'Returns an array of RSOs.',
    type: [RSO],
  })
  findAll() {
    return this.rsoService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a specific RSO by ID' })
  @ApiParam({ name: 'id', required: true, description: 'ID of the RSO' })
  @ApiResponse({
    status: 200,
    description: 'Returns the requested RSO.',
    type: RSO,
  })
  findOne(@Param('id') id: string) {
    return this.rsoService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create a new RSO' })
  @ApiBody({ type: CreateRSODto })
  @ApiResponse({
    status: 201,
    description: 'The RSO has been successfully created.',
    type: RSO,
  })
  create(@Body() createRSODto: CreateRSODto) {
    return this.rsoService.create(createRSODto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update an existing RSO by ID' })
  @ApiParam({
    name: 'id',
    required: true,
    description: 'ID of the RSO to update',
  })
  @ApiBody({ type: UpdateRSODto })
  @ApiResponse({
    status: 200,
    description: 'The RSO has been successfully updated.',
    type: RSO,
  })
  update(@Param('id') id: string, @Body() updateRSODto: UpdateRSODto) {
    return this.rsoService.update(id, updateRSODto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete an RSO by ID' })
  @ApiParam({
    name: 'id',
    required: true,
    description: 'ID of the RSO to delete',
  })
  @ApiResponse({
    status: 200,
    description: 'The RSO has been successfully deleted.',
  })
  remove(@Param('id') id: string) {
    return this.rsoService.remove(id);
  }
}
