import { Speciality } from '../domain/speciality.entity';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SpeacialityRepositoryInterface } from './speciality-repository.interface';
import { SpecialityModel } from './speciality.model';
import { Id } from '../../../@shared/value-objects/id.vo';

@Injectable()
export class SpeacialityRepository
  implements SpeacialityRepositoryInterface<SpecialityModel, Speciality>
{
  constructor(
    @InjectRepository(SpecialityModel)
    private _repository: Repository<SpecialityModel>,
  ) {}
  async create(entity: Speciality): Promise<void> {
    const model = this.toModel(entity);
    await this._repository.save(this._repository.create(model));
  }

  toModel(entity: Speciality): SpecialityModel {
    return {
      id: entity.id.value,
      name: entity.value,
      createdAt: new Date(),
      updatedAt: new Date(),
    } as SpecialityModel;
  }

  async findById(id: string): Promise<Speciality> {
    const model = await this._repository.findOne({ where: { id } });

    return this.toEntity(model);
  }

  toEntity(model: SpecialityModel): Speciality {
    return new Speciality({
      id: new Id(model.id),
      name: model.name,
    });
  }
}
