import { Module } from '@nestjs/common';
import { SpecialityService } from './speciality.service';
import { SpecialityController } from './speciality.controller';
import { SpeacialityRepository } from '../repository/speciality.repository';
import { CreateSpecialityUseCase } from '../usecase/create-speciality/create-speciality.usecase';
import { FindSpecialityByIdUseCase } from '../usecase/find-speciality-by-id/find-speciality-by-id.usecase';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SpecialityModel } from '../repository/speciality.model';

@Module({
  imports: [TypeOrmModule.forFeature([SpecialityModel])],
  controllers: [SpecialityController],
  providers: [
    SpecialityService,
    SpeacialityRepository,
    CreateSpecialityUseCase,
    FindSpecialityByIdUseCase,
  ],
  exports: [SpecialityService],
})
export class SpecialityModule {}
