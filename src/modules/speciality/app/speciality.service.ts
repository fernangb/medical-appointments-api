import { Injectable } from '@nestjs/common';
import { Speciality } from '../domain/speciality.entity';
import { CreateSpecialityInputDto } from '../usecase/create-speciality/create-speciality-input.dto';
import { CreateSpecialityUseCase } from '../usecase/create-speciality/create-speciality.usecase';
import { FindSpecialityByIdUseCase } from '../usecase/find-speciality-by-id/find-speciality-by-id.usecase';

@Injectable()
export class SpecialityService {
  constructor(
    private _createSpecialityUseCase: CreateSpecialityUseCase,
    private _findSpecialityByIdUseCase: FindSpecialityByIdUseCase,
  ) {}

  async create(input: CreateSpecialityInputDto): Promise<void> {
    return this._createSpecialityUseCase.execute(input);
  }

  async findById(id: string): Promise<Speciality> {
    return this._findSpecialityByIdUseCase.execute(id);
  }
}
