import { CreateRepositoryInterface } from '../../../@shared/repository/create-model-repository.interface';
import { FindOneRepositoryInterface } from '../../../@shared/repository/find-one-repository.interface';

export interface SpeacialityRepositoryInterface<Model, Entity>
  extends CreateRepositoryInterface<Model, Entity>,
    FindOneRepositoryInterface<Model, Entity> {}
