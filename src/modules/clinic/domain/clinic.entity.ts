import { Id } from '../../../@shared/value-objects/id.vo';
import { BaseEntity } from '../../../@shared/entity/base-entity';
import { Speciality } from '../../../modules/speciality/domain/speciality.entity';

export type ClinicProps = {
  id?: Id;
  name: string;
  address: string;
  specialities: Speciality[];
  schedule: string;
};

export class Clinic extends BaseEntity {
  private _name: string;
  private _address: string;
  private _specialities: Speciality[];
  private _schedule: string;

  constructor(props: ClinicProps) {
    super(props.id);
    this._name = props.name;
    this._address = props.address;
    this._specialities = props.specialities;
    this._schedule = props.schedule;
  }

  get name(): string {
    return this._name;
  }

  get address(): string {
    return this._address;
  }

  get specialities(): Speciality[] {
    return this._specialities;
  }

  get schedule(): string {
    return this._schedule;
  }
}
