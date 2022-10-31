import { BaseUseCaseInterface } from '../../../../@shared/usecase/base-usecase.interface';
import { Speciality } from '../../domain/speciality.entity';
import { SpeacialityRepository } from '../../repository/speciality.repository';

export class FindSpecialityByIdUseCase implements BaseUseCaseInterface {
  constructor(private _repository: SpeacialityRepository) {}

  async execute(id: string): Promise<Speciality> {
    return this._repository.findById(id);
  }
}
