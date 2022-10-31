import { BaseUseCaseInterface } from '../../../../@shared/usecase/base-usecase.interface';
import { Speciality } from '../../domain/speciality.entity';
import { SpeacialityRepository } from '../../repository/speciality.repository';
import { CreateSpecialityInputDto } from './create-speciality-input.dto';

export class CreateSpecialityUseCase implements BaseUseCaseInterface {
  constructor(private _repository: SpeacialityRepository) {}

  async execute(input: CreateSpecialityInputDto): Promise<void> {
    const specialityEntity = new Speciality({
      name: input.name,
    });
    await this._repository.create(specialityEntity);
  }
}
