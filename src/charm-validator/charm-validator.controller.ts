import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';
import { CharmValidatorService } from './charm-validator.service';
import { CreateValidatorDto } from './dto/create-validator.dto';
import { UpdateValidatorDto } from './dto/update-validator.dto';

@Controller('validator')
export class CharmValidatorController {
  constructor(private readonly validatorService: CharmValidatorService) {}

  @Get()
  getAll() {
    return this.validatorService.getAllValidators();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.validatorService.getValidatorById(id);
  }

  @Post()
  create(@Body() dto: CreateValidatorDto) {
    return this.validatorService.createValidator(dto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateValidatorDto) {
    return this.validatorService.updateValidator(id, dto);
  }
}